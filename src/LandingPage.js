import React from 'react'
import {Link} from 'react-router-dom'

import team from './team'

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<div>
					<img src="assets/big-picture.jpeg" className="big-picture"/>
					<Link to="/questionnaire"> Make awesome questionnaire </Link>
				</div>

				<div className="explanation">
					<h2> Why is this so important </h2>
					<p> This is a lot of text explaining why the questionnaire can help so much </p>
				</div>

				<div className="team">
					{team.map(teamMember => (
						<div key={teamMember.name} className="teammember">
							<img src={teamMember.picture} />
							<h3 className="name"> {teamMember.name} </h3>
							<p> {teamMember.description} </p>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default LandingPage