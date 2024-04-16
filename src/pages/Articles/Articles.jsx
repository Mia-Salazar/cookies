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
        </Layout>
	);
};

export default Articles;