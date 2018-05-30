import React from 'react'
import {Link} from 'react-router-dom'

export default props => (
    <div className="top-bar">
		<Link to="/">
		    <img src="/assets/Marktramp_logo_outlined.svg" className="logo" />
		</Link>
    </div>
)