import React from "react";

import { CloudItem, Container, Header, Heading, Layout, Navbar, StrengthItem, Text } from "../../components";
import "./Portfolio.scss";

export const Portfolio = () => {
	return (
		<Layout>
            <Header />
            <Navbar />
            <Container>
                <Heading text="Portfolio" />
            </Container>
        </Layout>
	);
};

export default Portfolio;