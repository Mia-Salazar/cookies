import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import cookie from '../../assets/img/logo.png';
import { Heading, Text, Layout, ArticleItem } from "../../components";
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
			.then(data => setContent({isLoading: false, data}));
	}, []);

	return (
		<Layout>
            <Heading text="nav.articles" />
            <Text>{t('articles.text')}</Text>
            <Text>{t('articles.textTwo')}</Text>
            <Heading text="Dev.to" type={2} />
            {content.isLoading
                ? <img alt="" className="articles__img" src={cookie} />
                : content.data.map(({date, tags, title, href}) => {
                    return(
                        <ArticleItem date={date} tags={tags} title={title} href={href} key={title}/>
                    );
                })
            }            
            <Heading text="Medium" type={2} />

            {
				articlesArray.map(({date, tags, title, href}) => {
					return(
						<ArticleItem date={date} tags={tags} title={title} href={href} key={title}/>
					);
				})
			}
            
        </Layout>
	);
};

export default Articles;