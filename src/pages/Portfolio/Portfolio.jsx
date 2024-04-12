import React from "react";

import { 
        Container,
        Header,
        Heading,
        Layout,
        Navbar,
        PortfolioContent,
        PortfolioItem,
        Text 
    } from "../../components";
    import foodiesaurus from "../../assets/img/foodiesaurus.png";
import "./Portfolio.scss";

export const Portfolio = () => {
	return (
		<Layout>
            <Header />
            <Navbar />
            <Container>
                <Heading text="Portfolio" />
                <Text>Aquí puedes ver algunos de los proyectos en los que he trabajado a nivel profesional, y muchos de los proyectos personales que he realizado</Text>
                <PortfolioContent />
            </Container>
        </Layout>
	);
};

export default Portfolio;