import React from "react";
import { Link } from "react-router-dom";

import "./ButtonLink.scss";

export const ButtonLink = () => {
	return (
		<Link className={"link-styles"} to="abc" />
	);
};

export default ButtonLink;