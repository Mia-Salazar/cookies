import React from "react";

import { Container, Header, Heading, Layout, Navbar, Text } from "../../components";
import "./Activities.scss";

export const Activities = () => {
	return (
		<Layout styles="activities">
            <Header />
            <Navbar />
            <Container>
                <Heading text="Fregaos" />
                <Text>Aquí puedes ver todos los fregaos en los que me he metido: desde charlas a Game Jams</Text>
            </Container>
        </Layout>
	);
};

export default Activities;