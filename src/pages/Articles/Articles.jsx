import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Heading, Text, Layout, ArticleItem, ArticlesList, LinkButton } from "../../components";
import { articlesArray, othersArray } from "../../utils/ArticlesElements";
import "./Articles.scss";
import { articleConstructor } from "../../models/ArticlesModel";
import Tabs, { Tab } from "../../components/molecules/Tabs/Tabs";
import usePageTitle from "../../utils/usePageTitle";

export const Articles = () => {
    const { t } = useTranslation();
    usePageTitle("articles");
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

    const articlesNumber = othersArray.length + articlesArray.length;

	return (
		<Layout>
            <Heading text="nav.articles" />
            <Text>{t('articles.text')}</Text>
            <Text>{t('articles.textTwo')}</Text>
            <Text>{t('articles.textThree')}</Text>
            <Tabs name="articles" legend={t("articles.choose")}>
                <Tab name={`${t("home.dev")} (+55)`}>
                    <Text>{t("articles.30")}</Text>
                    <ArticlesList data={content.data} isLoading={content.isLoading} />
                    <div className="articles__wrapper">
                        <LinkButton href="https://dev.to/miasalazar" text={t("articles.all")} />
                    </div>
                    
                </Tab>
                <Tab name={`${t("home.others")} (${articlesNumber})`}>
                    <ul className="articles__list">
                    {
                        othersArray.map(({source,date, tags, title, href}) => {
                            return(
                                <ArticleItem source={source} date={date} tags={tags} title={title} href={href} key={title}/>
                            );
                        })
                    }
                    {
                        articlesArray.map(({source, date, tags, title, href}) => {
                            return(
                                <ArticleItem source={source} date={date} tags={tags} title={title} href={href} key={title}/>
                            );
                        })
                    }
                </ul>
                </Tab>

            </Tabs>
        </Layout>
	);
};

export default Articles;