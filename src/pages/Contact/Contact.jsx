import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Form, Header, Heading, Frame, Navbar, Text } from "../../components";
import "./Contact.scss";

export const Contact = () => {
    const { t } = useTranslation();

	return (
		<Frame styles="contact">
            <Header />
            <Navbar />
            <Container>
                <Heading text="nav.contact" />
                <Text>{t('contact.text')}</Text>
                <Form />
            </Container>
        </Frame>
	);
};

export default Contact;