import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { priceDisplay } from "./util";
import ajax from "./ajax";

class DealDetail extends Component {
  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired
  };
  state = {
    deal: this.props.initialDealData
  };
  async componentDidMount() {
    const fullDeal = await ajax.fetchDealDetail(this.state.deal.key);
    this.setState({ deal: fullDeal });
  }

  render() {
    const { deal } = this.state;
    //console.log(deal);
    return (
      <View style={styles.deal}>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text style={styles.backLink}>Back</Text>
        </TouchableOpacity>
        <Image source={{ uri: deal.media[0] }} style={styles.image} />
        <View>
          <Text style={styles.title}>{deal.title}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.info}>
            <Text style={styles.cause}>{deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
          {deal.user && (
            <View style={styles.user}>
              <Image source={{ uri: deal.user.avatar }} style={styles.avatar} />
              <Text>{deal.user.name}</Text>
            </View>
          )}
        </View>

        <View style={styles.description}>
          <Text>{deal.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginBottom: 20,
    marginHorizontal: 12
    //marginTop: 50
  },
  backLink: {
    marginBottom: 5,
    color: "#22f"
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: "#ccc"
  },
  detail: {
    borderColor: "#bab",
    borderWidth: 1
  },
  user: {
    alignItems: "center"
  },
  info: {
    alignItems: "center"
    // padding: 10,
    // backgroundColor: "#fff",
    // borderColor: "#bbb",
    // borderWidth: 1,
    // borderTopWidth: 0
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "rgba(237, 149, 45, 0.4)"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15
  },
  cause: {
    marginVertical: 10
  },
  price: {
    fontWeight: "bold"
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  description: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderStyle: "dotted",
    margin: 10,
    padding: 10
  }
});

export default DealDetail;
