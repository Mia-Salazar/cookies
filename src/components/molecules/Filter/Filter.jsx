import React from "react";
import PropTypes from "prop-types";

import { portfolioFilter } from "../../../utils/PortfolioFilter"
import Button from "../../atoms/Button/Button";
import "./Filter.scss";

export const Filter = ({ buttonFunctionality, filterActive }) => {
	return (
		<div className="filter">
			{
				portfolioFilter.map((item) => {
					return(
						<Button key={item.value} text={item.text} id={item.value}
							functionality={() => buttonFunctionality(item.value)} styles={filterActive === item.value ? "selected" : "ghost-secondary"}/>
					);
				})
			}
		</div>
	);
};

Filter.propTypes = {
	buttonFunctionality: PropTypes.func.isRequired,
	filterActive: PropTypes.string.isRequired,
};

export default Filter;