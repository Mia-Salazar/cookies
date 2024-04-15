import React from "react";
import { useTranslation } from "react-i18next";

import { Heading, Text, Layout } from "../../components";
import "./Articles.scss";

export const Articles = () => {
    const { t } = useTranslation();

	return (
		<Layout>
            <Heading text="home.hello" />
            <Text>{t('home.textOne')}</Text>
            <Text>{t('home.textTwo')}</Text>
            <Text>{t('home.textThree')}</Text>
            <Heading text="home.activities" type={2} />
        </Layout>
	);
};

export default Articles;