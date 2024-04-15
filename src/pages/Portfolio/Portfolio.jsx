import React from "react";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();

	return (
		<Layout>
            <Header />
            <Navbar />
            <Container>
                <Heading text="nav.portfolio" />
                <Text>{t('portfolio.text')}</Text>
                <PortfolioContent />
                <Heading text="portfolio.past" type={2} />
                <Text>{t('portfolio.textTwo')}</Text>
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