import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Header, Heading, Layout, Navbar, Text } from "../../components";
import "./Articles.scss";

export const Articles = () => {
    const { t } = useTranslation();

	return (
		<Layout>
            <Header />
            <Navbar />
            <Container>
                <Heading text="home.hello" />
                <Text>{t('home.textOne')}</Text>
                <Text>{t('home.textTwo')}</Text>
                <Text>{t('home.textThree')}</Text>
                <Heading text="home.activities" type={2} />
            </Container>
        </Layout>
	);
};

export default Articles;