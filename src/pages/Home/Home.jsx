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
    const talks = speechesArray.filter(talk => !talk.isWorkshop)
    const workshop = speechesArray.filter(talk => talk.isWorkshop)

	return (
        <Layout>
            <section>
                <Heading text="home.hello" />
                <Text>{t('home.textOne')}</Text>
                <Text>{t('home.textTwo')}</Text>
                <Text>{t('home.textThree')}</Text>
                <Text>{t('home.textFour')}</Text>
                <Text>{t('home.textSix')}</Text>
            </section>
            <section>
                <Heading text="home.activities" size="medium" />
                <ul className="home__container">
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
                        title={talks.length + 1}
                        subtitle="home.speeches"
                    />
                    <StrengthItem 
                        title={workshop.length}
                        subtitle="home.workshops"
                    />
                    <StrengthItem 
                        title="4"
                        subtitle="home.university"
                    />
                    <StrengthItem 
                        title="+55"
                        subtitle="home.articles"
                    />
                    <StrengthItem 
                        title="14"
                        subtitle="home.collaborationsActive"
                    />
                    <StrengthItem 
                        title="2"
                        subtitle="home.lang"
                    />
                </ul>
            </section>
            <section>
                <Heading text="home.tech" size="medium" />
                <Text>{t('home.textSeven')}</Text>
                <Text>{t('home.textFive')}</Text>
                <ul className="home__list">
                    <TechItem href="https://jestjs.io/es-ES/" size="high" text="Jest" />
                    <TechItem href="https://www.w3schools.com/css/" size="reallyHigh" text="CSS" />
                    <TechItem href="https://es.react.dev/" size="high" text="React" />
                    <TechItem href="https://angular.io/" size="medium" text="Angular" />
                    <TechItem href="https://redux.js.org/" size="medium" text="Redux" />
                    <TechItem href="https://www.sketch.com/" size="low" text="Sketch" />
                    <TechItem href="https://playwright.dev/" size="low" text="Playwright" />
                    <TechItem href="https://www.w3schools.com/sql/" size="reallyLow" text="SQL" />
                    <TechItem href="https://www.w3schools.com/typescript/" size="high" text="Accesibility" />
                    <TechItem href="https://tailwindcss.com/" size="low" text="Tailwind" />
                    <TechItem href="https://sass-lang.com/" size="medium" text="SASS" />
                    <TechItem href="https://www.w3schools.com/js/" size="reallyHigh" text="Javascript" />
                    <TechItem href="https://git-scm.com/" size="medium" text="Git" />
                    <TechItem href="https://www.w3schools.com/css/css_rwd_intro.asp" size="high" text="Responsive" />
                    <TechItem href="https://styled-components.com/" size="medium" text="Styled components" />
                    <TechItem href="https://www.w3schools.com/typescript/" size="high" text="Typescript" />
                    <TechItem href="https://www.mysql.com/" size="low" text="MySQL" />
                    <TechItem href="https://testing-library.com/" size="medium" text="Testing library" />
                    <TechItem href="https://cursor.com/" size="medium" text="Cursor" />
                    <TechItem href="https://www.w3schools.com/html/" size="reallyHigh" text="HTML" />
                    <TechItem href="https://nextjs.org/" size="low" text="Next" />
                    <TechItem href="https://www.w3schools.com/php" size="reallyLow" text="PHP" />
                    <TechItem href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/" size="high" text="Aria" />
                    <TechItem href="https://getbootstrap.com/" size="high" text="Bootstrap" />
                    <TechItem href="hhttps://vitejs.dev/guide/" size="low" text="Vite" />
                    <TechItem href="https://vuejs.org/" size="low" text="Vue" />
                    <TechItem href="https://www.figma.com/" size="low" text="Figma" />
                    <TechItem href="https://jquery.com/" size="medium" text="jQuery" />
                    <TechItem href="https://tanstack.com/" size="medium" text="TanStack" />
                    <TechItem href="https://storybook.js.org/" size="medium" text="Storybook" />
                    <TechItem href="https://nodejs.org/en" size="low" text="Node" />
                    <TechItem href="https://turborepo.dev/" size="low" text="Turborepo" />
                    <TechItem href="https://uifrommars.com/atomic-design-ventajas/" size="high" text="Atomic Design" />
                    <TechItem href="https://dev.to/miasalazar/clean-architecture-in-front-end-development-523n" size="medium" text="Clean achitecture" />
                </ul>
            </section>
        </Layout>
	);
};

export default Home;