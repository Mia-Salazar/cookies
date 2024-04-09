import React from "react";

import { Container, Header, Heading, Layout, Navbar, Text } from "../../components";
import "./Home.scss";

export const Home = () => {
	return (
		<Layout>
            <Header />
            <Navbar />
            <Container>
                <Heading text="Holi" />
                <Text>Soy Mia Salazar, Front-end developer y monstrua de las galletas.</Text>
                <Text>En 2018 empecé en informática y llevo enamorada desde entonces. Actualmente me estoy especializando en accesibilidad, un tema que me apasiona.
                    Soy una persona inquieta, a la que le gusta meterse 'fregaos' y que siempre está aprendiendo algo nuevo.</Text>
                <Text>Friki por naturaleza, cuando no estoy programando algo en mi tiempo libre, veo series, juego a juegos de mesa o de rol o voy al cine.</Text>
                <Heading text="Algunos fregaos" type={2} />

            </Container>
        </Layout>
	);
};

export default Home;