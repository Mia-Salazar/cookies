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
            <section>
                <Heading text="activities.speeches" type={2} />
                <ul className="activities__list">
                    {
                        speechesArray.map(({aria, speechLink, slidesLink, hasVideo, icon, lang, text, year}, index) => {
                            return(
                                <ActivityItem aria={aria} speechLink={speechLink} hasVideo ={hasVideo} icon={icon} lang={lang}
                                    text={text} year={year} key={index} slidesLink={slidesLink} />
                            );
                        })
                    }
                </ul>
            </section>
            <section>
                <Heading text="activities.interview" type={2} />
                <ul className="activities__list">
                    {
                        interviewsArray.map(({aria, speechLink, icon, lang, text, year}, index) => {
                            return(
                                <ActivityItem aria={aria} speechLink={speechLink} icon={icon} lang={lang} text={text} year={year} key={index}/>
                            );
                        })
                    }
                </ul>
            </section>
            <section>
                <Heading text="activities.game" type={2} />
                <ul className="activities__list">
                    {
                        gameArray.map(({aria, speechLink, icon, lang, text, year}, index) => {
                            return(
                                <ActivityItem aria={aria} speechLink={speechLink} icon={icon} lang={lang} text={text} year={year} key={index}/>
                            );
                        })
                    }
                </ul>
            </section>
            <section>
                <Heading text="activities.others" type={2} />
                <ul className="activities__list">
                    {
                        otherArray.map(({aria, speechLink, icon, lang, text, year}, index) => {
                            return(
                                <ActivityItem aria={aria} speechLink={speechLink} icon={icon} lang={lang} text={text} year={year} key={index}/>
                            );
                        })
                    }
                </ul>
            </section>
        </Layout>
	);
};

export default Activities;