// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {

	constructor(props){
		super(props);
		this.state = {name: ''};
	};

	handleChange = (e) => {
		this.setState({
			name: e.target.value
		});
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		console.log("in handle onSubmit");
		this.props.addBand(this.state);
		this.setState({name: ''});
	}


  render() {
    return(
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
        	<label>Band Name: </label>
        	<input type="text" value={this.state.name} onChange={e => this.handleChange(e)}/>
        	<input type="submit" value="Add Band" />  
        </form>
      </div>
    )
  }
}



export default BandInput
