import React, { useEffect, useState } from "react";

import { portfolioArray } from "../../../utils/PortfolioElements";
import PortfolioItem from "../../molecules/PortfolioItem/PortfolioItem";
import Button from "../../atoms/Button/Button";
import Filter from "../../molecules/Filter/Filter";
import "./PortfolioContent.scss";

export const PortfolioContent = () => {
	const [portfolioContent, setPortfolioContent] = useState(portfolioArray.slice(0, 6));
	const [loadMore, setLoadMore] = useState(true);
	const [filter, setFilter] = useState("all");

	const loadMoreFunc = () => {
		const length = portfolioContent.length;
		let arrayFiltered;

		if (filter === "all") {
			arrayFiltered = portfolioArray;
		} else {
			arrayFiltered = portfolioArray.filter(element => element.text.toLowerCase().includes(filter));
		}

		setPortfolioContent(portfolioContent.concat(arrayFiltered.slice(length, length + 3)));

		if (portfolioContent.length + 3 >= arrayFiltered.length) {
			setLoadMore(false);
		} else {
			setLoadMore(true);
		}
	};

	const changeFilter = (filterNew) => {
		if (filter !== filterNew) {
			setFilter(filterNew);
		}
	};

	const filterFunction = (term , array) => {
		if (term === "all") {
			return array.slice(0, 6);
		} else {
			const arrayFiltered = array.filter(element => element.text.toLowerCase().includes(filter));
			const arrayFilteredShort = arrayFiltered.slice(0, 6);
			if (arrayFilteredShort >= arrayFiltered) {
				setLoadMore(false);
			} else {
				setLoadMore(true);
			}
			return arrayFilteredShort;
		}
	};

	useEffect(() => {
		setPortfolioContent(filterFunction(filter, portfolioArray));
	}, [filter]);

	return (
		<div className="portfolio-items">
			<Filter buttonFunctionality={changeFilter} filterActive={filter} />
			<ul className="portfolio-items__container">
				{
					portfolioContent.map(({text, image, href, title}, index) => {
						return(
							<PortfolioItem text={text} href={href} image={image} key={index} title={title} />
						);
					})
				}
			</ul>
			{
				loadMore &&
                    <Button text="portfolio.load" functionality={loadMoreFunc}/>
			}
		</div>
	);
};

export default PortfolioContent;