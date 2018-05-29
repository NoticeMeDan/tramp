import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {postJSON} from '../util/ajax'

import Modal from 'react-modal'

const modalStyle = {
	content: {
		width: '50vw',
		height: '50vh',
		top: '25vh',
		left: '25vw'
	}	
}


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
					<button onClick={this.toggleModal}>See your answers</button>
					<Modal
						isOpen={this.state.answerModalIsOpen}
						onRequestClose={this.toggleModal}
						contentLabel='Dine svar'
						appElement={document.querySelector('#app')}
						style={modalStyle}>
	                    <div className="modal-content">
	                    	<h2> Your answers </h2>
	                        <p>Name: {name}</p>
	                        <p>Gender: {gender}</p>
	                        <p>Food: {food}</p>
	                        <p>Money: {money}</p>
	                        <p>Age: {age}</p>
	                        <p>Toilet: {toilet}</p>
	                        <p>Festival: {festival}</p>
	                        <p>Nature: {nature}</p>
							<p>Artists: </p>
							<ul>
	                            {artists.map(artist => (
	                                <li key={artist}>  {artist}</li>
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