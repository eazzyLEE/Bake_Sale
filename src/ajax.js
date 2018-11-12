const apiHost = 'https://bakesaleforgood.com';

export default {
	fetchInitialDeals() {
		return fetch(apiHost + '/api/deals')
			.then((response) => {
			//.then((responseJson) => {
				return response.json();
			})
			.catch((error) => {
				console.error(error);
			});
	}
//  fetchInitialDeals() {
// 		try {
// 			let response = await fetch(apiHost + '/api/deals');
// 			let responseJson = response.json();
// 			return responseJson;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}
};

