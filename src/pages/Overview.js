import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {postJSON} from '../util/ajax'

import Modal from 'react-modal'

class Overview extends Component {
	state = {
		answerModalIsOpen: false
	}

	submitSurvey = formObj => {
		postJSON('https://syst-api.azurewebsites.net/marktramp/survey', formObj) // Do something with the result - handle errors
			.then(() => this.props.history.push('/'))
			.catch(() => alert('Shit, noget gik galt.. Prøv igen!'))
	}

	toggleModal = () => {
		this.setState({
            answerModalIsOpen: !this.state.answerModalIsOpen
		})
	}

	render() {
        const { gender, age, food, money, name, artists } = this.props.location.state
        const { toilet, festival, nature } = this.props.location.state.grades

		return(
			<div className="overview-container">
				<img src="assets/celebrate.svg" />
				<div className="grey-box">
					<h2>{`Tusinde tak, ${name}!`}</h2>
					<button onClick={this.toggleModal}>Se dine svar</button>
					<Modal
						isOpen={this.state.answerModalIsOpen}
						onRequestClose={this.toggleModal}
						contentLabel='Dine svar'
						appElement={document.querySelector('#app')}>
	                    <div>
	                        <p>Navn: {name}</p>
	                        <p>Køn: {gender}</p>
	                        <p>Mad: {food}</p>
	                        <p>Penge: {money}</p>
	                        <p>Alder: {age}</p>
	                        <p>Toilet: {toilet}</p>
	                        <p>Festival: {festival}</p>
	                        <p>Natur: {nature}</p>
							<p>Kunstnere: </p>
							<ul>
	                            {artists.map(artist => (
	                                <li key={artist}>{artist}</li>
	                            ))}
							</ul>
	                        <button onClick={this.toggleModal}>Luk</button>
	                    </div>
					</Modal>
	                <br />
                </div>

				<button 
					onClick={() => this.submitSurvey(this.props.location.state)}
					className="button">
					Send
				</button>

				<Link 
					to={{pathname: "/questionnaire", state: this.props.location.state}}
					className="button edit">
					Edit information
				</Link>
			</div>
		)
	}	
}

export default Overview