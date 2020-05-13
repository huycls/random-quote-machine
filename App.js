import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			quotes: [],
			selectedQuoteIndex: null
		}
		this.selectQuoteIndex= this.selectQuoteIndex.bind(this);
		this.nextQuoteClickHandler= this.nextQuoteClickHandler.bind(this);
	}
	componentDidMount(){
		fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
		.then(data => data.json())
		.then(quotes => this.setState({quotes}, this.nextQuoteClickHandler));
	}
	get selectedQuote(){
		if( !this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
			return;
		}
		return this.state.quotes[this.state.selectedQuoteIndex];
	}
	nextQuoteClickHandler(){
		 this.setState({selectedQuoteIndex: this.selectQuoteIndex()});
	}
	selectQuoteIndex(){
		if(!this.state.quotes.length){
			return;
		}
		return Math.floor(Math.random()*this.state.quotes.length);
	}

    render(){
    	
        return(
		        <div className="wrapper">	
		        	<div className="quote-box">
		        		 
		        		<br /> 
		        		
		        		<div className="text">
		        			{this.selectedQuote ? `"${this.selectedQuote.quote}"` :''}
		        		</div>
		        		<div className="author">
		        			- {this.selectedQuote ? `${this.selectedQuote.author}`  :''}
		        		</div>
		        		<div className="buttons">
		        				<a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
		        					<i className="fab fa-twitter"></i>
		        				</a>
		        				<a className="button" id="tumblr-quote" title="Post this on tumblr!" target="_blank">
		        					<i className="fab fa-tumblr"></i>
		        				</a>
		        		</div>
		        		<Button className="next-quote" id="new-quote" buttonDisplayName="Next Quote" clickHandler={this.nextQuoteClickHandler} />
		        </div>	</div>

        	);
    } 
}            

export default App;