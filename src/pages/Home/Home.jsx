import React from "react";

import { Header, Layout, Navbar } from "../../components";
import "./Home.scss";

export const Home = () => {
	return (
		<Layout>
            <Header />
            <Navbar />
        </Layout>
	);
};

export default Home;