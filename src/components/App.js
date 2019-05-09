import axios from 'axios';
import React from "react";
import SearchBar from './SearchBar';


class App extends React.Component{

	onSearchSubmit(term){		
	 	axios.get('https://api.unsplash.com/',{
	 		headers:{
	 			Authorization:'Client-ID 4ba66b873ec0a6622198a22cc8f481eb31af86f6d8021719c3ee1a7ca30bb0d4'
	 		}

	 	});
	 	
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