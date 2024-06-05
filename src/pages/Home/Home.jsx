import React from "react";
import { useTranslation } from "react-i18next";

import { speechesArray } from "../../utils/ActivitiesElements";
import { TechItem, Heading, StrengthItem, Text, Layout } from "../../components";
import "./Home.scss";

export const Home = () => {
    const { t } = useTranslation();

    // Speeches on schools where two
    const speechesNumber = speechesArray.length + 1;
    const yearActual = new Date().getFullYear();
    const yearsOfExperience = yearActual - 2018;

	return (
        <Layout>
            <section>
                <Heading text="home.hello" />
                <Text>{t('home.textOne')}</Text>
                <Text>{t('home.textTwo')}</Text>
                <Text>{t('home.textThree')}</Text>
            </section>
            <section>
                <Heading text="home.activities" size="medium" />
                <div className="home__container">
                    <StrengthItem 
                        title={yearsOfExperience.toString()}
                        subtitle="home.experience"
                    />
                    <StrengthItem 
                        title="home.accesibility"
                        subtitle="home.specialized"
                    />
                    <StrengthItem 
                        title="home.mentor"
                        subtitle="home.step4ward"
                    />
                    <StrengthItem 
                        title="+35"
                        subtitle="home.articles"
                    />
                    <StrengthItem 
                        title={speechesNumber.toString()}
                        subtitle="home.speeches"
                    />
                    <StrengthItem 
                        title="2"
                        subtitle="home.lang"
                    />
                </div>
            </section>
            <section>
                <Heading text="home.tech" size="medium" />
                <Text>{t('home.textFour')}</Text>
                <Text>{t('home.textFive')}</Text>
                <div className="home__list">
                    <TechItem href="https://jestjs.io/es-ES/" size="high" text="Jest" />
                    <TechItem href="https://www.w3schools.com/css/" size="reallyHigh" text="CSS" />
                    <TechItem href="https://es.react.dev/" size="high" text="React" />
                    <TechItem href="https://angular.io/" size="medium" text="Angular" />
                    <TechItem href="https://www.sketch.com/" size="low" text="Sketch" />
                    <TechItem href="https://playwright.dev/" size="low" text="Playwright" />
                    <TechItem href="https://www.w3schools.com/sql/" size="reallyLow" text="SQL" />
                    <TechItem href="https://www.w3schools.com/typescript/" size="high" text="Accesibility" />
                    <TechItem href="https://tailwindcss.com/" size="low" text="Tailwind" />
                    <TechItem href="https://www.w3schools.com/js/" size="reallyHigh" text="Javascript" />
                    <TechItem href="https://git-scm.com/" size="medium" text="Git" />
                    <TechItem href="https://www.w3schools.com/css/css_rwd_intro.asp" size="high" text="Responsive" />
                    <TechItem href="https://styled-components.com/" size="medium" text="Styled components" />
                    <TechItem href="https://www.w3schools.com/typescript/" size="high" text="Typescript" />
                    <TechItem href="https://www.mysql.com/" size="low" text="MySQL" />
                    <TechItem href="https://testing-library.com/" size="medium" text="Testing library" />
                    <TechItem href="https://www.w3schools.com/html/" size="reallyHigh" text="HTML" />
                    <TechItem href="https://nextjs.org/" size="low" text="Next" />
                    <TechItem href="https://www.w3schools.com/php" size="reallyLow" text="PHP" />
                    <TechItem href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/" size="high" text="Aria" />
                    <TechItem href="https://getbootstrap.com/" size="high" text="Bootstrap" />
                    <TechItem href="hhttps://vitejs.dev/guide/" size="low" text="Vite" />
                    <TechItem href="https://www.figma.com/" size="low" text="Figma" />
                    <TechItem href="https://jquery.com/" size="medium" text="jQuery" />
                </div>
            </section>
        </Layout>
	);
};

export default Home;