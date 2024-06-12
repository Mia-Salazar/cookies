import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Heading, Text, Layout, ArticleItem, ArticlesList } from "../../components";
import { articlesArray } from "../../utils/ArticlesElements";
import "./Articles.scss";
import { articleConstructor } from "../../models/ArticlesModel";

export const Articles = () => {
    const { t } = useTranslation();
    const [content, setContent] = useState({
        data: [],
        isLoading: true
    });

    useEffect(() => {
		fetch("https://dev.to/api/articles?username=miasalazar")
			.then(response => response.json())
			.then(data => data.map(articleConstructor))
            .then(data => {
                setContent({isLoading: false, data})
            });
	}, []);

	return (
		<Layout>
            <Heading text="nav.articles" />
            <Text>{t('articles.text')}</Text>
            <Text>{t('articles.textTwo')}</Text>
            <section aria-live="polite" aria-busy={content.isLoading}>
                <Heading text="Dev.to" size="medium" />
                <ArticlesList data={content.data} isLoading={content.isLoading} />   
            </section>
            <section>
                <Heading text="Medium" size="medium" />
                <ul className="articles__list">
                    {
                        articlesArray.map(({date, tags, title, href}) => {
                            return(
                                <ArticleItem date={date} tags={tags} title={title} href={href} key={title}/>
                            );
                        })
                    }
                </ul> 
            </section>
        </Layout>
	);
};

export default Articles;