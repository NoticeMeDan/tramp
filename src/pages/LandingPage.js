import React from 'react'
import {Link} from 'react-router-dom'

import team from '../team'

class LandingPage extends React.Component {
	componentDidMount() {
	  // The location of MarkTramp
	  const markTramp = {lat: 56.468820, lng: 10.142050};
	  // The map, centered at MarkTramp
	  const map = new google.maps.Map(
	      document.getElementById('map'), {zoom: 10, center: markTramp});
	  // The marker, positioned at MarkTramp
	  const marker = new google.maps.Marker({position: markTramp, map: map});
	}


	render() {
		return (
			<div className="landing-page">
				<div className="picture-container">
					<img src="assets/big-picture.jpeg" className="big-picture"/>
					<Link to="/questionnaire" className="link"> Help the festival! </Link>
				</div>

				<div className="why-container">
					<h1> Why answer these questions? </h1>
					<h3> It is incredibly important to us to know what we should prioritise when planning Marktramp. So your answers could help shape the festival! </h3>
					<div className="subject">
						<img src="/assets/icons/audio.png"/>
						<p> Is this festival going to be all about the music? </p>
					</div>
					
					<div className="subject">
						<img src="/assets/icons/leaf.png"/>
						<p> Do we need to decorate a lot and make sure nature is all around you? </p>
					</div>

					<div className="subject">
						<img src="/assets/icons/beer.png"/>
						<p> Are we into very cheap beers or expensive liqueur? </p>
					</div>
				</div>

				<div className="map-container">
					<h2> Where it is going to happen </h2>
					<div id="map"></div>
				</div>


				<div className="team-container">
					<h2> The Team </h2>
					{team.map(teamMember => (
						<div key={teamMember.name} className="team-member">
							<img className="picture" src={teamMember.picture} />
							<div className="flow-column">
								<h3 className="name"> {teamMember.name} </h3>
								<p> {teamMember.description} </p>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default LandingPage