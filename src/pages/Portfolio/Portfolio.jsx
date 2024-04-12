import React from "react";

import { oldPortfolio } from "../../utils/data/PortfolioElements";
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
                <Heading text="Mi pasado" type={2} />
                <Text>Antes de ser una monstrua de las galletas, fui una viajera intergaláctica y una superheroína. Puedes ver mis proyectos aquí</Text>
                <div className="portfolio__list">
                    {
                        oldPortfolio.map(({text, image, href}, index) => {
                            return(
                                <PortfolioItem text={text} href={href} image={image} key={index}/>
                            );
                        })
                    }
                </div>
                
            </Container>
        </Layout>
	);
};

export default Portfolio;