import React from "react";
import { useTranslation } from "react-i18next";

import { speechesArray } from "../../utils/ActivitiesElements";
import { CloudItem, Heading, StrengthItem, Text, Layout } from "../../components";
import "./Home.scss";

export const Home = () => {
    const { t } = useTranslation();

    // Speeches on schools where two
    const speechesNumber = speechesArray.length + 1;
    const yearActual = new Date().getFullYear();
    const yearsOfExperience = yearActual - 2018;

	return (
        <Layout>
            <Heading text="home.hello" />
            <Text>{t('home.textOne')}</Text>
            <Text>{t('home.textTwo')}</Text>
            <Text>{t('home.textThree')}</Text>
            <Heading text="home.activities" type="medium" />
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
            <Heading text="home.tech" type="medium" />
            <Text>{t('home.textFour')}</Text>
            <Text>{t('home.textFive')}</Text>
            <div className="home__list">
                <CloudItem href="https://jestjs.io/es-ES/" size="high" text="Jest" />
                <CloudItem href="https://www.w3schools.com/css/" size="reallyHigh" text="CSS" />
                <CloudItem href="https://es.react.dev/" size="high" text="React" />
                <CloudItem href="https://angular.io/" size="medium" text="Angular" />
                <CloudItem href="https://www.sketch.com/" size="low" text="Sketch" />
                <CloudItem href="https://playwright.dev/" size="low" text="Playwright" />
                <CloudItem href="https://www.w3schools.com/sql/" size="reallyLow" text="SQL" />
                <CloudItem href="https://www.w3schools.com/typescript/" size="high" text="Accesibility" />
                <CloudItem href="https://tailwindcss.com/" size="low" text="Tailwind" />
                <CloudItem href="https://www.w3schools.com/js/" size="reallyHigh" text="Javascript" />
                <CloudItem href="https://git-scm.com/" size="medium" text="Git" />
                <CloudItem href="https://www.w3schools.com/css/css_rwd_intro.asp" size="high" text="Responsive" />
                <CloudItem href="https://styled-components.com/" size="medium" text="Styled components" />
                <CloudItem href="https://www.w3schools.com/typescript/" size="high" text="Typescript" />
                <CloudItem href="https://www.mysql.com/" size="low" text="MySQL" />
                <CloudItem href="https://testing-library.com/" size="medium" text="Testing library" />
                <CloudItem href="https://www.w3schools.com/html/" size="reallyHigh" text="HTML" />
                <CloudItem href="https://nextjs.org/" size="low" text="Next" />
                <CloudItem href="https://www.w3schools.com/php" size="reallyLow" text="PHP" />
                <CloudItem href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/" size="high" text="Aria" />
                <CloudItem href="https://getbootstrap.com/" size="high" text="Bootstrap" />
                <CloudItem href="hhttps://vitejs.dev/guide/" size="low" text="Vite" />
                <CloudItem href="https://www.figma.com/" size="low" text="Figma" />
                <CloudItem href="https://jquery.com/" size="medium" text="jQuery" />
            </div>
        </Layout>
	);
};

export default Home;