import React from "react";
import { useTranslation } from "react-i18next";

import { Heading, Text, Layout } from "../../components";
import "./Articles.scss";

export const Articles = () => {
    const { t } = useTranslation();

	return (
		<Layout>
            <Heading text="nav.articles" />
            <Text>{t('articles.text')}</Text>
            <Text>{t('articles.textTwo')}</Text>
            <Heading text="Dev.to" type={2} />
            <Heading text="Medium" type={2} />
        </Layout>
	);
};

export default Articles;