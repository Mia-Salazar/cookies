import React from "react";
import { useTranslation } from "react-i18next";

import { oldPortfolio } from "../../utils/PortfolioElements";
import { 
        Heading,
        PortfolioContent,
        PortfolioItem,
        Text, 
        Layout
    } from "../../components";
import "./Portfolio.scss";

export const Portfolio = () => {
    const { t } = useTranslation();

	return (
        <Layout>
            <section>
                <Heading text="nav.portfolio" />
                <Text>{t('portfolio.text')}</Text>
                <PortfolioContent />
            </section>
            <section>
                <Heading text="portfolio.past" type="medium" />
                <Text>{t('portfolio.textTwo')}</Text>
                <ul className="portfolio__list">
                    {
                        oldPortfolio.map(({text, image, href}, index) => {
                            return(
                                <PortfolioItem text={text} href={href} image={image} key={index}/>
                            );
                        })
                    }
                </ul>
            </section>
        </Layout>
	);
};

export default Portfolio;