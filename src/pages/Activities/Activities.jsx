import React from "react";
import { useTranslation } from "react-i18next";

import { ActivityItem, Heading, Text, Layout } from "../../components";
import { gameArray, interviewsArray, otherArray, speechesArray } from "../../utils/ActivitiesElements";
import "./Activities.scss";

export const Activities = () => {
    const { t } = useTranslation();

	return (
        <Layout styles="activities">
            <Heading text="nav.activities" />
            <Text>{t('activities.text')}</Text>
            <Heading text="activities.speeches" type={2} />
            <div className="activities__list">
                {
                    speechesArray.map(({aria, speechLink, slidesLink, icon, lang, text, year}, index) => {
                        return(
                            <ActivityItem aria={aria} speechLink={speechLink} icon={icon} lang={lang}
                                text={text} year={year} key={index} slidesLink={slidesLink} />
                        );
                    })
                }
            </div>
            <Heading text="activities.interview" type={2} />
            <div className="activities__list">
                {
                    interviewsArray.map(({aria, speechLink, icon, lang, text, year}, index) => {
                        return(
                            <ActivityItem aria={aria} speechLink={speechLink} icon={icon} lang={lang} text={text} year={year} key={index}/>
                        );
                    })
                }
            </div>
            <Heading text="activities.game" type={2} />
            <div className="activities__list">
                {
                    gameArray.map(({aria, speechLink, icon, lang, text, year}, index) => {
                        return(
                            <ActivityItem aria={aria} speechLink={speechLink} icon={icon} lang={lang} text={text} year={year} key={index}/>
                        );
                    })
                }
            </div>
            <Heading text="activities.others" type={2} />
            <div className="activities__list">
                {
                    otherArray.map(({aria, speechLink, icon, lang, text, year}, index) => {
                        return(
                            <ActivityItem aria={aria} speechLink={speechLink} icon={icon} lang={lang} text={text} year={year} key={index}/>
                        );
                    })
                }
            </div>
        </Layout>
	);
};

export default Activities;