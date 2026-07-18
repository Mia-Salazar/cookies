import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import cookie from '../../../assets/img/logo.png';
import ArticleItem from "../../molecules/ArticleItem/ArticleItem";
import './ArticlesList.scss'

export const ArticlesList = ({ isLoading, data }) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
			<p role="status" aria-live="polite">
				<img alt="" className="articles__img" src={cookie} aria-hidden="true" />
				<span className="sr-only">{t("alt.loading")}</span>
			</p>
		);
    }
	return (
        <ul className="articles-list">
            {data.map(({date, tags, title, href}) => {
                return(
                    <ArticleItem date={date} tags={tags} title={title} href={href} key={title}/>
                );
            })}
        </ul>

	);
};

ArticlesList.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
    })),
};

export default ArticlesList;
