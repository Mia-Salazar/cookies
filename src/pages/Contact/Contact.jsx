import React from "react";
import { useTranslation } from "react-i18next";

import { Form, Heading, Text, Layout } from "../../components";
import "./Contact.scss";

export const Contact = () => {
    const { t } = useTranslation();

	return (
        <Layout styles="contact">
            <Heading text="nav.contact" />
            <Text>{t('contact.text')}</Text>
            <Form />
        </Layout>
	);
};

export default Contact;