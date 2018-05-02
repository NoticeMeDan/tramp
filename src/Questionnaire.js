import React from 'react'

class Questionnaire extends React.Component {
	state = {
		name: "",
		gender: "",
		age: 15,
		artists: [],
		grades: {
			toilet: 1,
			festival: 1,
			nature: 1
		},
		money: 100,
		food: "",
		artists: []	
	}

	componentDidMount() {
		fetch("https://syst-api.azurewebsites.net/marktramp/artists")
		.then(res => res.json())
		.then(artists => this.setState({artists}))
	}

	handleChange = (e) => {
		this.setState({[e.target.id]: e.target.value})
	}

	handleSubmit = () => {
		
	}

	render() {
		return(
			<div className='contact-container'>
				<form onSubmit={(e) => this.handleSubmit(e)} id="contactForm">
					<label htmlFor="name">Name</label>
					<input 
						value={this.state.name} 
						onChange={(e) => this.handleChange(e)}
						id="name" 
						placeholder="Mark funny guy" 
						required
					/>
					<label htmlFor="email">Email</label>
					<input 
						value={this.state.email} 
						onChange={(e) => this.handleChange(e)}
						id="email"
						type="email" 
						placeholder="Email" 
						required
					/>
					<label htmlFor="message">Message</label>
					<textarea 
						value={this.state.message} 
						onChange={(e) => this.handleChange(e)}		
						id="message" 
						rows="20" 
						cols="40" 
						placeholder="I want to know why there are no pissoires on the school?!?!" required></textarea>
					<button id="submit" type="submit">Check answers</button>
				</form>
			</div>
		)
	}

}

export default Questionnaire
