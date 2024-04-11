import React from "react";

import { Container, Form, Header, Heading, Layout, Navbar, Text } from "../../components";
import "./Contact.scss";

export const Contact = () => {
	return (
		<Layout>
            <Header />
            <Navbar />
            <Container>
                <Heading text="Contacto" />
                <Text>Si tienes algo que contarme o algún fregao interesante, no te cortes y ¡escríbeme!</Text>
                <Form />
            </Container>
        </Layout>
	);
};

export default Contact;