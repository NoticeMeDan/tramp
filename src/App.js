import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Questionnaire from './pages/Questionnaire'
import Overview from './pages/Overview'

const App = () => (
	<Router>
		<Fragment>
			<div className="top-bar">
				<img src="assets/Marktramp_logo_outlined.svg" className="logo" />
			</div>

			<Route exact path="/" component={LandingPage} />
			<Route exact path="/questionnaire" component={Questionnaire} />
			<Route exact path="/overview" component={Overview} />
		</Fragment>
	</Router>
)

export default App
