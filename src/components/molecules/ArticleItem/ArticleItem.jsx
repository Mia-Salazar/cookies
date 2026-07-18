import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import "./ArticleItem.scss";

export const ArticleItem = ({ date, href, source, tags, title }) => {
    const { t } = useTranslation();
    const formattedDate = date.slice(0, 10);
    const dateTime = date.length >= 10 ? date.slice(0, 10) : formattedDate;
	return (
        <li className="article-item">
            <div className="article-item__wrapper">
                {source && <p className="article-item__source">{source}</p>}
                <time className="article-item__date" dateTime={dateTime}>{formattedDate}</time>
            </div>

            <a
                className="article-item__link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("alt.openArticle", { title })}
            >
                <span className="article-item__title">{title}</span>
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
    source: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
};

export default ArticleItem;
