import axios from 'axios';
import React from "react";
import SearchBar from './SearchBar';


class App extends React.Component{

	onSearchSubmit(term){		
	 	axios.get('https://api.unsplash.com/',{

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