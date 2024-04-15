import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Form, Header, Heading, Layout, Navbar, Text } from "../../components";
import "./Contact.scss";

export const Contact = () => {
    const { t } = useTranslation();

	return (
		<Layout styles="contact">
            <Header />
            <Navbar />
            <Container>
                <Heading text="nav.contact" />
                <Text>{t('contact.text')}</Text>
                <Form />
            </Container>
        </Layout>
	);
};

export default Contact;