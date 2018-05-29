import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {getJSON, postJSON} from './util/ajax'
import setInPath from 'lodash/set'
import Overview from './Overview'

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
		artists: [],
        modalIsOpen: false
	}

	componentDidMount() {
		 getJSON('https://syst-api.azurewebsites.net/marktramp/artists')
			.then(artists => this.setState({artists}))
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

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    submitSurvey = formObj => {
        postJSON('https://syst-api.azurewebsites.net/marktramp/survey', formObj) // Do something with the result - handle errors
    }

    renderModal = bool => (
        bool &&
		<Overview
			answers={this.state.form}
            modalIsOpen={this.state.modalIsOpen}
            afterOpenModal={this.afterOpenModal}
            closeModal={this.closeModal}
            submitSurvey={this.submitSurvey}
        />
	)

	render() {
	// This was previously named isArtistDisabled, but we decided to rename it due to PC reasons. :)
	const isArtistButtonDisabled = artist => {
		return !this.state.form.artists.includes(artist)
			&& this.state.form.artists.length === 3
	}

	return(
		<div className='contact-container'>
			<form id="contactForm">
				<label htmlFor="name">Name</label>
				<input
					value={this.state.form.name}
					onChange={this.handleInputChange('name')}
					placeholder="Mark funny guy"
					required
				/>

				<label htmlFor="gender">Gender</label>
				<select
					value={this.state.form.gender}
					onChange={this.handleInputChange('gender')}
					required
				>
					<option value="M"> Mand </option>
					<option value="F"> Kvinde </option>
				</select>

				<label htmlFor="age">Age</label>
				<input
					value={this.state.form.age}
					onChange={this.handleInputChange('age')}
					type="number"
					min="15"
					max="120"
					required
				/>

				<label htmlFor="artists">Artists</label>
				<div className="artist-menu" id="artists">
				{this.state.artists.map(artist => (
					<Fragment key={artist}>
						<label htmlFor="artist"> {artist} </label>
						<input
							type="checkbox"
							value={artist}
							disabled={isArtistButtonDisabled(artist)}
							onChange={this.handleArtistChange(artist)}
						/>
					</Fragment>
				))}
				</div>

				<label htmlFor="age">Toilets</label>
				<input
					value={this.state.form.grades.toilet}
					onChange={this.handleInputChange('grades.toilet')}
					type="number"
					min="1"
					max="5"
					required
				/>

				<label htmlFor="age">Festival</label>
				<input
					value={this.state.form.grades.festival}
					onChange={this.handleInputChange('grades.festival')}
					type="number"
					min="1"
					max="5"
					required
				/>

				<label htmlFor="age">Nature</label>
				<input
					value={this.state.form.grades.nature}
					onChange={this.handleInputChange('grades.nature')}
					type="number"
					min="1"
					max="5"
					required
				/>

				<label htmlFor="age">Money</label>
				<input
					value={this.state.form.money}
					onChange={this.handleInputChange('money')}
					type="number"
					min="1"
					required
				/>

				<label htmlFor="food">Food</label>
				<textarea
					value={this.state.form.food}
					onChange={this.handleInputChange('food')}
					rows="20"
					cols="40"
					placeholder="I want to know why there are no pissoires on the school?!?!" required />
			</form>

			{/* TODO: Don't allow user to continue, unless data is correct */}
			<button onClick={this.openModal}>Check answers</button>
			{this.renderModal(this.state.modalIsOpen)}
			</div>
		)
	}

}

export default Questionnaire
