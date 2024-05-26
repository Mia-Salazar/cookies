import React, { useEffect, useState } from "react";

import { portfolioArray } from "../../../utils/PortfolioElements";
import ProjectItem from "../../molecules/ProjectItem/ProjectItem";
import Button from "../../atoms/Button/Button";
import Filter from "../../molecules/Filter/Filter";
import "./ProjectsContent.scss";

export const ProjectsContent = () => {
	const [portfolioContent, setProjectsContent] = useState(portfolioArray.slice(0, 6));
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

		setProjectsContent(portfolioContent.concat(arrayFiltered.slice(length, length + 3)));

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
		setProjectsContent(filterFunction(filter, portfolioArray));
	}, [filter]);

	return (
		<div className="portfolio-items">
			<Filter buttonFunctionality={changeFilter} filterActive={filter} />
			<ul className="portfolio-items__container">
				{
					portfolioContent.map(({text, image, href, title}, index) => {
						return(
							<ProjectItem text={text} href={href} image={image} key={index} title={title} />
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

export default ProjectsContent;