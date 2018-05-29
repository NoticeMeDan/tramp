import React from 'react'
import {Link} from 'react-router-dom'

import team from './team'

class LandingPage extends React.Component {
	componentDidMount() {
	  // The location of Uluru
	  const uluru = {lat: -25.344, lng: 131.036};
	  // The map, centered at Uluru
	  const map = new google.maps.Map(
	      document.getElementById('map'), {zoom: 4, center: uluru});
	  // The marker, positioned at Uluru
	  const marker = new google.maps.Marker({position: uluru, map: map});
	}


	render() {
		return (
			<div className="landing-page">
				<div className="picture-container">
					<img src="assets/big-picture.jpeg" className="big-picture"/>
					<Link to="/questionnaire" className="link"> Help! </Link>
				</div>

				<div className="why-container">
					<div className="subject">
						<img src=""/>
						<p> This is a lot of text explaining why the questionnaire can help so much </p>
					</div>
					
					<div className="subject">
						<img src=""/>
						<p> 2 This is a lot of text explaining why the questionnaire can help so much </p>
					</div>

					<div className="subject">
						<img src=""/>
						<p> 3 This is a lot of text explaining why the questionnaire can help so much </p>
					</div>
				</div>

				<div className="map-container">
					<h2> Where it is going down </h2>
					<div id="map"></div>
				</div>


				<div className="team-container">
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