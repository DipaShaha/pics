import axios from 'axios';
import React from "react";
import SearchBar from './SearchBar';


class App extends React.Component{

	async onSearchSubmit(term){		
	 	const response= await axios.get('https://api.unsplash.com/search/photos',{
	 		params:{query:term},
	 		headers:{
	 			Authorization:'Client-ID 4ba66b873ec0a6622198a22cc8f481eb31af86f6d8021719c3ee1a7ca30bb0d4'
	 		}

	 	});
	 	console.log(response.data.results);


	 	//2nd method
	 	// .then((response)=>{
	 	// 	console.log(response.data.results);
	 	// });
	 	
	}

	render(){
		return(
		<div className="ui container" style={{marginTop:'10px'}}>
			<SearchBar onSubmit={this.onSearchSubmit}/> 
		</div>
	 );

	}
}

export default App;