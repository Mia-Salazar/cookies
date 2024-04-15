import React from "react";

import { Container, Header, Heading, Layout, Navbar, Text } from "../../components";
import "./Activities.scss";
import { useTranslation } from "react-i18next";

export const Activities = () => {
    const { t } = useTranslation();
	return (
		<Layout styles="activities">
            <Header />
            <Navbar />
            <Container>{t('footer')}
                <p></p>
                <Heading text="Fregaos" />
                <Text>Aquí puedes ver todos los fregaos en los que me he metido: desde charlas a Game Jams</Text>
            </Container>
        </Layout>
	);
};

export default Activities;