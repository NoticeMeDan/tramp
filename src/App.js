import React, {Fragment} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Questionnaire from './pages/Questionnaire'
import Overview from './pages/Overview'

const App = () => (
	<BrowserRouter>
		<Fragment>
			<div className="topBar">
				<img src="assets/Marktramp_logo.svg" className="logo" />
			</div>

			<Route exact path="/" component={LandingPage} />
			<Route exact path="/questionnaire" component={Questionnaire} />
			<Route exact path="/overview" component={Overview} />
		</Fragment>
	</BrowserRouter>
)

export default App
