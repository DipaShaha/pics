import axios from "axios";

export default axios.create({

	baseURL:'https://api.unsplash.com',
	headers:{
	 			Authorization:'Client-ID 4ba66b873ec0a6622198a22cc8f481eb31af86f6d8021719c3ee1a7ca30bb0d4'
	 		}

});
