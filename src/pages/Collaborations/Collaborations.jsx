import React from "react";
import { useTranslation } from "react-i18next";

import { Heading, Text, Layout, ActivityItem } from "../../components";
import "./Collaborations.scss";
import { gameArray, interviewsArray, otherArray } from "../../utils/ActivitiesElements";

export const Collaborations = () => {
    const { t } = useTranslation();

    return (
        <Layout styles="activities">
            <Heading text="home.collaborations" />
            <Text>{t('activities.textOne')}</Text>
            <Text>{t('activities.text')}</Text>
            <Text>{t('activities.textThree')}</Text>
            <section>
                <Heading text="activities.interview" size="medium" />
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
                <Heading text="activities.game" size="medium" />
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
                <Heading text="activities.others" size="medium" />
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

export default Collaborations;