import React, {Component, Fragment} from 'react'
import {postJSON} from './util/ajax'
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class Overview extends Component {
	render() {
		const { gender, age, food, money, name, artists } = this.props.location.state
		const { toilet, festival, nature } = this.props.location.state.grades

		return(
				<Modal
                    isOpen={this.props.modalIsOpen}
                    onAfterOpen={this.props.afterOpenModal}
                    onRequestClose={this.props.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
					<h2 ref={subtitle => this.subtitle = subtitle}>Your answers</h2>
					<p>Name: {name}</p>
					<p>Gender: {gender}</p>
					<p>Food: {food}</p>
					<p>Money: {money}</p>
					<p>Age: {age}</p>
					<p>Toilet: {toilet}</p>
					<p>Festival: {festival}</p>
					<p>Nature: {nature}</p>
					{artists.map(artist => (
                            <p key={artist}> {artist} </p>
                        ))}
					<button onClick={this.props.closeModal}>close</button>
                    <button onClick={() => this.props.submitSurvey(this.props.location.state)}>Submit</button>
				</Modal>
		)
	}	
}

export default Overview