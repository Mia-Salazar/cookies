import React from "react";
import PropTypes from "prop-types";

import Frame from "../../molecules/Frame/Frame";
import Navbar from "../Navbar/Navbar";
import Header from "../../molecules/Header/Header";
import Container from "../../atoms/Container/Container";
import './Layout.scss';

export const Layout = ({ children, styles }) => {

	return (
		<Frame styles={styles}>
            <Header />
            <Navbar />
            <Container>
                {children}
            </Container>
        </Frame>
	);
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.string
};

export default Layout;