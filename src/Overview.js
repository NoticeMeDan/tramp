import React, {Component, Fragment} from 'react'
import {postJSON} from './util/ajax'

class Overview extends Component {
	submitSurvey = formObj => {
		postJSON('https://syst-api.azurewebsites.net/marktramp/survey', formObj) // Do something with the result - handle errors
	}

	render() {
		const { gender, age, food, money, name, artists } = this.props.location.state
		const { toilet, festival, nature } = this.props.location.state.grades

		return(
			<div className="overview">
                <div className="name">
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
                </div>
				<button onClick={() => this.submitSurvey(this.props.location.state)}>Submit</button>
			</div>
		)
	}	
}

export default Overview