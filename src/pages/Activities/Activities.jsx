import React from "react";
import { useTranslation } from "react-i18next";

import { ActivityItem, Container, Header, Heading, Layout, Navbar, Text } from "../../components";
import { gameArray, interviewsArray, otherArray, speechesArray } from "../../utils/data/ActivitiesElements";
import "./Activities.scss";

export const Activities = () => {
    const { t } = useTranslation();

	return (
		<Layout styles="activities">
            <Header />
            <Navbar />
            <Container>
                <Heading text="nav.activities" />
                <Text>{t('activities.text')}</Text>
                <Heading text="activities.speeches" type={2} />
                <div className="activities__list">
                    {
                        speechesArray.map(({aria, href, icon, lang, text, year}, index) => {
                            return(
                                <ActivityItem aria={aria} href={href} icon={icon} lang={lang} text={text} year={year} key={index}/>
                            );
                        })
                    }
                </div>
                <Heading text="activities.interview" type={2} />
                <div className="activities__list">
                    {
                        interviewsArray.map(({aria, href, icon, lang, text, year}, index) => {
                            return(
                                <ActivityItem aria={aria} href={href} icon={icon} lang={lang} text={text} year={year} key={index}/>
                            );
                        })
                    }
                </div>
                <Heading text="activities.game" type={2} />
                <div className="activities__list">
                    {
                        gameArray.map(({aria, href, icon, lang, text, year}, index) => {
                            return(
                                <ActivityItem aria={aria} href={href} icon={icon} lang={lang} text={text} year={year} key={index}/>
                            );
                        })
                    }
                </div>
                <Heading text="activities.others" type={2} />
                <div className="activities__list">
                    {
                        otherArray.map(({aria, href, icon, lang, text, year}, index) => {
                            return(
                                <ActivityItem aria={aria} href={href} icon={icon} lang={lang} text={text} year={year} key={index}/>
                            );
                        })
                    }
                </div>

            </Container>
        </Layout>
	);
};

export default Activities;