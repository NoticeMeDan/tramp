import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {getJSON} from '../util/ajax'
import setInPath from 'lodash/set'

class Questionnaire extends React.Component {
	state = {
		form: {
			name: "",
			gender: "M",
			age: 15,
			artists: [],
			grades: {
				toilet: 1,
				festival: 1,
				nature: 1
			},
			money: 100,
			food: "",
		},
		artists: []
	}

	componentDidMount() {
		 getJSON('https://syst-api.azurewebsites.net/marktramp/artists')
			.then(artists => this.setState({artists}))
			.then(() => {
				if(this.props.location.state) {
					this.setState({form: this.props.location.state})
				}
			})
	}

	/* Generic form handling */

	handleFormChange = (path, val) => {
		const fullPath = `form.${path}`
		this.setState(setInPath(this.state, fullPath, val))
	}

	handleInputChange = path => e => {
		this.handleFormChange(path, e.target.value)
	}

	/* Artist specific form handling */

	handleArtistChange = artist => e => {
		e.target.checked ? this.addArtist(artist) : this.removeArtist(artist)
	}

	addArtist = artist => {
        this.handleFormChange('artists', [...this.state.form.artists, artist])
	}

	removeArtist = artist => {
        this.handleFormChange('artists', this.state.form.artists.filter(x => x !== artist))
    }

	render() {
		// This was previously named isArtistDisabled, but we decided to rename it due to PC reasons. :)
		const isArtistButtonDisabled = artist => {
			return !this.state.form.artists.includes(artist)
				&& this.state.form.artists.length === 3
		}

		return(
			<div className='questionnaire-container'>
				<form id="contactForm">
					<h1> Questions </h1>
					<p> Please help us prioritise which areas is most important to have the best festival experience </p>
					<label htmlFor="name">Name</label>
					<input 
						value={this.state.form.name} 
						onChange={this.handleInputChange('name')}
						placeholder="Mark funny guy"
					/>

					<label htmlFor="gender">Gender</label>
					<select 
						value={this.state.form.gender} 
						onChange={this.handleInputChange('gender')}
					>
						<option value="M"> Man </option>
						<option value="F"> Woman </option>
					</select>
					

					<label htmlFor="age">Age</label>
					<input 
						value={this.state.form.age} 
						onChange={this.handleInputChange('age')}
						type="number"
						min="15"
						max="120"
					/>

					<label className="special-label" htmlFor="artists">Choose the 3 artists you want to see the most:</label>
					<div className="artist-menu" id="artists">
					{this.state.artists.map(artist => (
						<div className="artist" key={artist}>
							<input 
								type="checkbox"
								className="checkbox"
								value={artist}
								disabled={isArtistButtonDisabled(artist)}
								onChange={this.handleArtistChange(artist)}
							/>
							<label htmlFor="artist"> {artist} </label>
						</div>
					))}
					</div>

					<p> On a scale from 1-5 how important is: </p>
					<div className="priority">
					<label htmlFor="age">Toilets</label>
					<input 
						value={this.state.form.grades.toilet} 
						onChange={this.handleInputChange('grades.toilet')}
						type="number"
						min="1"
						max="5"
					/>

					<label htmlFor="age">Festival</label>
					<input 
						value={this.state.form.grades.festival} 
						onChange={this.handleInputChange('grades.festival')}
						type="number"
						min="1"
						max="5"
					/>

					<label htmlFor="age">Nature</label>
					<input 
						value={this.state.form.grades.nature} 
						onChange={this.handleInputChange('grades.nature')}
						type="number"
						min="1"
						max="5"
					/>
					</div>

					<label htmlFor="age" className="special-label">How much money, do you plan to bring with you?</label>
					<input 
						value={this.state.form.money} 
						onChange={this.handleInputChange('money')}
						type="number"
						min="1"
					/>

					<label htmlFor="food" className="special-label">Anything special we should consider about the food?</label>
					<div className="food">
						<textarea 
							value={this.state.form.food} 
							onChange={this.handleInputChange('food')}
							rows="10"
							cols="30" 
							placeholder="I have a lot of special requirements">
						</textarea>
					</div>
				
					<div className="check">
						{/* TODO: Don't allow user to continue, unless data is correct */}
						<Link to={{pathname: "/overview", state: this.state.form}}> 
							Check Answers 
						</Link>
					</div>
				</form>

			</div>
		)
	}

}

export default Questionnaire
