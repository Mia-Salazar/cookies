import React from "react";
import PropTypes from "prop-types";

import "./ArticleItem.scss";

export const ArticleItem = ({ date, href, tags, title }) => {
    const formattedDate = date.slice(0, 10)
	return (
        <li className="article-item">
            <p className="article-item__date">{formattedDate}</p>
            <a className="article-item__link" target="_blank" href={href} rel="noreferrer">
                <h3 className="article-item__title">{title}</h3>
            </a>
            
            {tags &&
                <ul className="article-item__list">
                    {tags.map((item) => {
                            return(
                                <li className="article-item__tag" key={item}>{item}</li>
                            );
                        })
                    }
                </ul>
            }
        </li>
	);
};

ArticleItem.propTypes = {
    date: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
};

export default ArticleItem;