import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

class Questionnaire extends React.Component {
	state = {
		form: {
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
		},
		artists: [],
		artistMenuToggled: false
	}

	componentDidMount() {
		fetch("https://syst-api.azurewebsites.net/marktramp/artists")
		.then(res => res.json())
		.then(artists => this.setState({artists}, console.log(artists)))
	}

	handleChange = (e) => {
		this.setState(prevState => ({ 
			form: {
				[e.target.id]: e.target.value,
				...prevState.form 
			}
		}))
	}

	handleGrades = (e) => {
		this.setState(prevState => ({ 
			form: {
				grades: {
					[e.target.id]: e.target.value,
					...prevState.form.grades 
				}
			}
		}))
	}

	handleSubmit = () => {
		
	}

	chooseArtists = (e, artist) => {
		this.setState(prevState => ({chosenArtists: prevState.form.chosenArtists.push(artist)}), 
			() => {
				if(this.state.form.chosenArtists.length === 3)
					this.setState(prevState => {artistsMenuToggled: false})
			})
	}

	render() {
		return(
			<div className='contact-container'>
				<form id="contactForm">
					<label htmlFor="name">Name</label>
					<input 
						value={this.state.form.name} 
						onChange={(e) => this.handleChange(e)}
						id="name" 
						placeholder="Mark funny guy" 
						required
					/>

					<label htmlFor="gender">Gender</label>
					<select 
						value={this.state.form.gender} 
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
						value={this.state.form.age} 
						onChange={(e) => this.handleChange(e)}
						id="age" 
						type="number"
						min="15"
						max="120"
						required
					/>

					<label htmlFor="artists">Artists</label>
					<div className="artist-menu" id="artists">
					{this.state.artists.map(artist => (
						<Fragment>
							<label htmlFor="artist"> {artist} </label>
							<input 
								id={artist}
								key={artist}
								type="checkbox" 
								value={artist}
								onChange={(e) => this.chooseArtists(e, artist)}
							/>
						</Fragment>
					))}
					</div>

					<div className="priotity">
					<label htmlFor="age">Toilets</label>
					<input 
						value={this.state.form.grades.toilet} 
						onChange={(e) => this.handleGrades(e)}
						id="toilet" 
						type="number"
						min="1"
						max="5"
						required
					/>

					<label htmlFor="age">Festival</label>
					<input 
						value={this.state.form.grades.festival} 
						onChange={(e) => this.handleGrades(e)}
						id="festival" 
						type="number"
						min="1"
						max="5"
						required
					/>

					<label htmlFor="age">Nature</label>
					<input 
						value={this.state.form.grades.nature} 
						onChange={(e) => this.handleGrades(e)}
						id="nature" 
						type="number"
						min="1"
						max="5"
						required
					/>
					</div>

					<label htmlFor="age">Money</label>
					<input 
						value={this.state.form.money} 
						onChange={(e) => this.handleChange(e)}
						id="nature" 
						type="number"
						min="1"
						required
					/>

					<label htmlFor="food">Food</label>
					<div className="food">
					<textarea 
						value={this.state.form.food} 
						onChange={(e) => this.handleChange(e)}		
						id="food" 
						rows="20" 
						cols="40" 
						placeholder="I want to know why there are no pissoires on the school?!?!" required></textarea>
						</div>
				
						<div className="check">
				<Link to={{pathname: "/overview", state: this.state.form}}> Check Answers </Link>
			</div>
			</form>
			</div>
		)
	}

}

export default Questionnaire
