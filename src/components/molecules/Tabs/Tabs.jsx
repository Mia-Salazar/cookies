import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Tabs.scss";

export const Tab = ({ children }) => children;

Tab.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const Tabs = ({ legend, name, children }) => {
  const tabsArray = React.Children.toArray(children).filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);

  const groupName = name || "tabs-group";

  if (!tabsArray.length) {
    return null;
  }

  return (
    <div className="tabs">
      <fieldset className="tabs__fieldset">
        {legend && <legend className="tabs__legend">{legend}</legend>}

        {tabsArray.map((tabElement, index) => {
          const tabName = tabElement.props.name || `Tab ${index + 1}`;
          const radioId = `${groupName}-radio-${index}`;
          const panelId = `${groupName}-panel-${index}`;

          return (
            <React.Fragment key={radioId}>
              <input
                type="radio"
                name={groupName}
                id={radioId}
                className="tabs__radio"
                checked={activeIndex === index}
                onChange={() => setActiveIndex(index)}
                aria-controls={panelId}
              />
              <label
                htmlFor={radioId}
                className={`tabs__label${activeIndex === index ? " tabs__label--active" : ""}`}
                id={`${groupName}-tab-${index}`}
              >
                {tabName}
              </label>
            </React.Fragment>
          );
        })}
      </fieldset>

      {tabsArray.map((tabElement, index) => {
        const panelId = `${groupName}-panel-${index}`;
        const labelId = `${groupName}-tab-${index}`;

        return (
          <section
            key={panelId}
            id={panelId}
            aria-labelledby={labelId}
            hidden={activeIndex !== index}
            className="tabs__panel"
          >
            {tabElement.props.children}
          </section>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  legend: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Tabs;
