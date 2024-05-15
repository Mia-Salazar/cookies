import React, { useEffect, useState } from "react";

import cookie from '../../../assets/img/logo.png';
import { articleConstructor } from "../../../models/ArticlesModel";
import ArticleItem from "../../molecules/ArticleItem/ArticleItem";
import './ArticlesList.scss'

export const ArticlesList = () => {
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

    if (content.isLoading) {
        return <img className="articles__img" src={cookie} />
    }

	return (
        <ul className="articles-list">
            {content.data.map(({date, tags, title, href}) => {
                return(
                    <ArticleItem date={date} tags={tags} title={title} href={href} key={title}/>
                );
            })}
        </ul>

	);
};

export default ArticlesList;