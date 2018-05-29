import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Questionnaire from './pages/Questionnaire'
import Overview from './pages/Overview'
import Footer from './components/Footer'
import TopBar from './components/TopBar'

const App = () => (
	<Router>
		<Fragment>
			<TopBar />

			<main>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/questionnaire" component={Questionnaire} />
                <Route exact path="/overview" component={Overview} />
			</main>

			<Footer />
		</Fragment>
	</Router>
)

export default App
