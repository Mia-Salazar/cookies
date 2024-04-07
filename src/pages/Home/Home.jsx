import React from "react";

import "./Home.scss";
import { Cookie, Layout, Navbar } from "../../components";

export const Home = () => {
	return (
		<Layout>
            <Cookie />
            <Navbar />
        </Layout>
	);
};

export default Home;