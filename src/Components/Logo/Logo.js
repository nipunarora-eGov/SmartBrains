import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return(
			<div className='m4 mt0 position'>
				<Tilt className="Tilt br2 shadow-2 ba bw1 br2 grow mh4 mb1" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
	 				<div className="Tilt-inner pa3"> <img style={{paddingTop : '5px'}} alt ='logo' src={brain}/> </div>
				</Tilt>
			</div>
		);
}

export default Logo;