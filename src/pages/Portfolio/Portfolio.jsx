import React from "react";

import { 
        Container,
        Header,
        Heading,
        Layout,
        Navbar,
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
                <PortfolioItem href="https://foodiesaurus.com/" text="HTML5, CSS3, Javascript, PHP, MySQL, phpMyAdmin" image={foodiesaurus} />
            </Container>
        </Layout>
	);
};

export default Portfolio;