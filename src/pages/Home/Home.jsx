import React from "react";

import logo from '../../assets/img/logo.png';


export const Home = () => {
	return (
		<div className="home">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Mia Salazar</p>
        </div>
	);
};

export default Home;