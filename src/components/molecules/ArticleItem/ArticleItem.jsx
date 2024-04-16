import React from "react";
import PropTypes from "prop-types";


import "./ArticleItem.scss";

export const ArticleItem = ({date, lang, tags, title}) => {
	return (
		<div className="article">
            <div>
                <p>{lang}</p>
                <p>{date}</p>
            </div>
            <p>{title}</p>
            {
				tags.map((item) => {
					return(
						<p key={item}>{item}</p>
					);
				})
			}
		</div>
	);
};

ArticleItem.propTypes = {
    date: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
};

export default ArticleItem;