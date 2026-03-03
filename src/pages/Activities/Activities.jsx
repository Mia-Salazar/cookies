import React from "react";
import { useTranslation } from "react-i18next";

import { ActivityItem, Heading, Text, Layout } from "../../components";
import { speechesArray } from "../../utils/ActivitiesElements";
import "./Activities.scss";
import { conferencesArray } from "../../utils/ConferencesElements";
import Tabs, { Tab } from "../../components/molecules/Tabs/Tabs";

export const Activities = () => {
    const { t } = useTranslation();

    const talks = speechesArray.filter(talk => !talk.isWorkshop)
    const workshop = speechesArray.filter(talk => talk.isWorkshop)

	return (
        <Layout styles="activities">
            <Heading text="activities.speeches" />
            <Text>{t('activities.textOne')}</Text>
            <Text>{t('activities.textTwo')}</Text>
            <Text>{t('activities.text')}</Text>
            <Text>{t('activities.textThree')}</Text>
            <ul className="activities__logos">
                {conferencesArray.map((talk, index) => (
                    <li key={talk.alt || index}>
                        <a href={talk.href}>
                            <img alt={talk.alt} src={talk.image} />
                        </a>
                    </li>
                ))}
            </ul>
            <Tabs name="activity" legend={t("activities.choose")}>
                <Tab name={t("activities.speeches")}>
                    {talks?.map((talk, index) => {
                        const previousYear = talks?.[index - 1]?.year;
                        const showYear = index === 0 || previousYear !== talk.year;

                        return (
                        <React.Fragment key={index}>
                            {showYear && <h3 className="activities__year">{talk.year}</h3>}
                            <ActivityItem {...talk} />
                        </React.Fragment>
                        );
                    })}
                </Tab>
                <Tab name={t("home.workshops")}>
                    {workshop?.map((talk, index) => {
                        const previousYear = workshop?.[index - 1]?.year;
                        const showYear = index === 0 || previousYear !== talk.year;

                        return (
                        <React.Fragment key={index}>
                            {showYear && <h3 className="activities__year">{talk.year}</h3>}
                            <ActivityItem {...talk} />
                        </React.Fragment>
                        );
                    })}
                </Tab>
            </Tabs>
        </Layout>
	);
};

export default Activities;