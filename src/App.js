import React, {Fragment} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Questionnaire from './Questionnaire'
import Overview from './Overview'

const App = () => (
	<BrowserRouter>
		<Fragment>
			<div className="top-bar">
				<img src="assets/Marktramp_logo_outlined.svg" className="logo" />
			</div>

			<Route exact path="/" component={LandingPage} />
			<Route exact path="/questionnaire" component={Questionnaire} />
			<Route exact path="/overview" component={Overview} />
		</Fragment>
	</BrowserRouter>
)

export default App
