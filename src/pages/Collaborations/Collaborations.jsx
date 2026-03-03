import React from "react";
import { useTranslation } from "react-i18next";

import { Heading, Text, Layout, ActivityItem } from "../../components";
import "./Collaborations.scss";
import { gameArray } from "../../utils/ActivitiesElements";
import { CollaborationItem } from "../../components/molecules/CollaborationItem/CollaborationItem";
import { interviewArray, mentorArray, volunteerArray } from "../../utils/Collaborations";

export const Collaborations = () => {
    const { t } = useTranslation();

    return (
        <Layout styles="activities">
            <Heading text="home.collaborations" />
            <Text>{t('collaborations.text')}</Text>
            <Heading text="collaborations.mentorship" size="medium" />
            {
                mentorArray.map(collab => <CollaborationItem {...collab} />)
            }
            <Heading text="collaborations.volunteering" size="medium" />
            {
                volunteerArray.map(collab => <CollaborationItem {...collab} />)
            }
            <Heading text="activities.interview" size="medium" />
            {
                interviewArray.map(collab => <CollaborationItem {...collab} />)
            }
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

        </Layout>
    );
};

export default Collaborations;