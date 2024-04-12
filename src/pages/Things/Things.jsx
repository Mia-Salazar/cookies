import React from "react";

import { Container, Form, Header, Heading, Layout, Navbar, Text } from "../../components";
import "./Things.scss";

export const Things = () => {
	return (
		<Layout styles="contact">
            <Header />
            <Navbar />
            <Container>
                <Heading text="Thingso" />
                <Text>Si tienes algo que contarme o algún fregao interesante, no te cortes y ¡escríbeme!</Text>
                <Form />
            </Container>
        </Layout>
	);
};

export default Things;