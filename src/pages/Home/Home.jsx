import React from "react";

import { CloudItem, Container, Header, Heading, Layout, Navbar, StrengthItem, Text } from "../../components";
import "./Home.scss";

export const Home = () => {
	return (
		<Layout>
            <Header />
            <Navbar />
            <Container>
                <Heading text="¡Hola hola!" />
                <Text>Soy Mia Salazar, Front-end developer y monstrua de las galletas.</Text>
                <Text>En 2018 empecé en informática y llevo enamorada desde entonces. Actualmente me estoy especializando en accesibilidad, un tema que me apasiona.
                    Soy una persona inquieta, a la que le gusta meterse 'fregaos' y que siempre está aprendiendo algo nuevo.</Text>
                <Text>Friki por naturaleza, cuando no estoy programando algo en mi tiempo libre, veo series, juego a juegos de mesa o de rol o voy al cine.</Text>
                <Heading text="Algunos fregaos" type={2} />
                <div className="home__container">
                    <StrengthItem 
                        title="6"
                        subtitle="Años de experiencia"
                    />
                    <StrengthItem 
                        title="Accesibilidad"
                        subtitle="de especialización"
                    />
                    <StrengthItem 
                        title="Mentora"
                        subtitle="en Step4ward"
                    />
                    <StrengthItem 
                        title="+30"
                        subtitle="artículos"
                    />
                    <StrengthItem 
                        title="6"
                        subtitle="charlas"
                    />
                    <StrengthItem 
                        title="2"
                        subtitle="idiomas"
                    />
                </div>
                <Heading text="Tecnologías" type={2} />
                <Text>Me encanta desarrollar productos que pongan el foco en la accesibilidad y en las personas. Aunque actualmente trabajo como desarrolladora Front-end y soy una apasionada de la maquetación, también disfruto haciendo desarrollo back-end.</Text>
                <Text>Aquí puedes ver algunas de las tecnologías con las que he trabajado.</Text>
                <div className="home__list">
                    <CloudItem href="https://jestjs.io/es-ES/" size="high" text="Jest" />
                    <CloudItem href="https://www.w3schools.com/css/" size="reallyHigh" text="CSS" />
                    <CloudItem href="https://es.react.dev/" size="high" text="React" />
                    <CloudItem href="https://angular.io/" size="medium" text="Angular" />
                    <CloudItem href="https://playwright.dev/" size="low" text="Playwright" />
                    <CloudItem href="https://www.w3schools.com/sql/" size="reallyLow" text="SQL" />
                    <CloudItem href="https://www.w3schools.com/typescript/" size="high" text="Accesibilidad" />
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
                </div>
            </Container>
        </Layout>
	);
};

export default Home;