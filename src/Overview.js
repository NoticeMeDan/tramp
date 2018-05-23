import React from 'react'

class Overview extends React.Component {
	render() {
		const { gender, age, food, money, name, chosenArtists } = this.props.location.state
		const { toilet, festival, nature } = this.props.location.state.grades

		return(
			<div>
				<p>Name: {name}</p> 
				<p>Gender: {gender}</p> 
				<p>Food: {food}</p> 
				<p>Money: {money}</p> 
				<p>Age: {age}</p> 
				<p>Toilet: {toilet}</p> 
				<p>Festival: {festival}</p> 
				<p>Nature: {nature}</p>
				{chosenArtists.map(artist => (
					<p key={artist}> {artist} </p>
				))}
			</div>
		)
	}	
}

export default Overview