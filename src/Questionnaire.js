import React from 'react'

class Questionnaire extends React.Component {
	state = {
		name: "",
		gender: "other",
		age: 15,
		chosenArtists: [],
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
				<form id="contactForm">
					<label htmlFor="name">Name</label>
					<input 
						value={this.state.name} 
						onChange={(e) => this.handleChange(e)}
						id="name" 
						placeholder="Mark funny guy" 
						required
					/>

					<label htmlFor="gender">Gender</label>
					<select 
						value={this.state.gender} 
						onChange={(e) => this.handleChange(e)}
						id="gender"
						required
					>
						<option value="male"> Mand </option>
						<option value="female"> Kvinde </option>
						<option value="other"> Andet </option>
					</select>

					<label htmlFor="age">Age</label>
					<input 
						value={this.state.age} 
						onChange={(e) => this.handleChange(e)}
						id="age" 
						type="number"
						min="15"
						max="120"
						required
					/>

					<label htmlFor="gender">Artists</label>
					<select 
						value={this.state.gender} 
						onChange={(e) => this.handleChange(e)}
						id="gender"
						multiple
						required
					>
						{this.state.artists.map(artist => (
							<checkbox value={artist.name.toLowerCase()}> {artist.name} </checkbox>
						))}
					</select>

					<label htmlFor="food">Food</label>
					<textarea 
						value={this.state.food} 
						onChange={(e) => this.handleChange(e)}		
						id="food" 
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
