import React from "react";

import { Container, Form, Header, Heading, Layout, Navbar, Text } from "../../components";
import "./Things.scss";

export const Things = () => {
	return (
		<Layout styles="contact">
            <Header />
            <Navbar />
            <Container>
                <Heading text="Fregaos" />
                <Text>Aquí puedes ver todos los fregaos en los que me he metido: desde charlas a Game Jams</Text>
            </Container>
        </Layout>
	);
};

export default Things;