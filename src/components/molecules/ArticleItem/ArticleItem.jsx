import React from "react";
import PropTypes from "prop-types";

import "./ArticleItem.scss";

export const ArticleItem = ({ date, href, tags, title }) => {
	return (
        <li>
            <a target="_blank" href={href} className="article-item" rel="noreferrer">
                <p className="article-item__date">{date}</p>
                <p className="article-item__title">{title}</p>
                
                {tags &&
                    <div className="article-item__list">
                        {tags.map((item) => {
                                return(
                                    <p className="article-item__tag" key={item}>{item}</p>
                                );
                            })
                        }
                    </div>
                }
            </a>
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