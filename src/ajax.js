const apiHost = "https://bakesaleforgood.com";

export default {
  async fetchInitialDeals() {
    try {
      const response = await fetch(apiHost + "/api/deals");
      const responseJson = await response.json();
      //console.log(responseJson);
      return responseJson;
    } catch (error) {
      // return fetch(apiHost + '/api/deals')
      // 	.then((response) => {
      // 	//.then((responseJson) => {
      // 		return response.json();
      // 	})
      console.error(error);
    }
  },
  async fetchDealDetail(dealId) {
    try {
      // fetch(apiHost + "/api/deals/" + dealId)
      // .then(response => response.json())
      // .then(result => result);
      // try {
      const response = await fetch(apiHost + "/api/deals/" + dealId);
      const responseJson = await response.json();
      //console.log(responseJson.media);
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  },
  async fetchDealsSearchResults(searchTerm) {
    try {
      const response = await fetch(
        apiHost + "/api/deals?searchTerm=" + searchTerm
      );
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
};
