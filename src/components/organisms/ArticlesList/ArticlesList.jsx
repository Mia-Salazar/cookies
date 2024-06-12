import React from "react";
import PropTypes from "prop-types";

import ArticleItem from "../../molecules/ArticleItem/ArticleItem";
import './ArticlesList.scss'

export const ArticlesList = ({ isLoading, data }) => {
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