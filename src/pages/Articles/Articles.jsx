import React from "react";
import { useTranslation } from "react-i18next";

import { Heading, Text, Layout, ArticleItem } from "../../components";
import { articlesArray } from "../../utils/data/ArticlesElements";
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

            {
				articlesArray.map(({date, tags, title, href}) => {
					return(
						<ArticleItem date={date} tags={tags} title={title} href={href} />
					);
				})
			}
            
        </Layout>
	);
};

export default Articles;