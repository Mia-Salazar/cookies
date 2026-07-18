import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { portfolioFilter } from "../../../utils/PortfolioFilter"
import FormElement from "../../molecules/FormElement/FormElement";
import "./Filter.scss";

export const Filter = ({ buttonFunctionality, filterActive }) => {
	const { t } = useTranslation();

	return (
		<fieldset className="filter" aria-controls="filter-portoflio">
			<legend>{t("portfolio.filterLegend")}</legend>
			{
				portfolioFilter.map((item) => {
					return(
						<FormElement type="radio" name="filter" key={item.value} text={item.text} id={item.value}
						functionality={() => buttonFunctionality(item.value)} checked={filterActive === item.value}/>
					);
				})
			}
		</fieldset>
	);
};

Filter.propTypes = {
	buttonFunctionality: PropTypes.func.isRequired,
	filterActive: PropTypes.string.isRequired,
};

export default Filter;
