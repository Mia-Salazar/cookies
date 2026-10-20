import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { ActivityItem, Heading, Text, Layout } from "../../components";
import { speechesArray } from "../../utils/ActivitiesElements";
import "./Activities.scss";
import { conferencesArray } from "../../utils/ConferencesElements";
import usePageTitle from "../../utils/usePageTitle";

const countByYear = (items, year) => items.filter((item) => item.year === year).length;

export const Activities = () => {
    const { t } = useTranslation();
    usePageTitle("activities");

    const talks = speechesArray.filter((talk) => !talk.isWorkshop);
    const workshops = speechesArray.filter((talk) => talk.isWorkshop);
    const spanishCount = speechesArray.filter((talk) => talk.lang === "es").length;
    const englishCount = speechesArray.filter((talk) => talk.lang === "en").length;
    const years = [...new Set(speechesArray.map((talk) => talk.year))].sort((a, b) => b - a);
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(
        years.includes(currentYear) ? currentYear : years[0]
    );

    const visibleItems = selectedYear == null
        ? speechesArray
        : speechesArray.filter((item) => item.year === selectedYear);

    const renderList = (items) => {
        if (!items.length) {
            return <p className="activities__empty">{t("activities.emptyYear")}</p>;
        }

        return (
            <ul className="activities__list">
                {items.map((talk, index) => {
                    const previousYear = items[index - 1]?.year;
                    const showYear = selectedYear == null && (index === 0 || previousYear !== talk.year);

                    return (
                        <React.Fragment key={`${talk.text}-${index}`}>
                            {showYear && (
                                <li className="activities__year-item">
                                    <h2 className="activities__year">
                                        {talk.year}
                                        {" "}
                                        <span className="activities__year-count">
                                            {t("activities.yearTalks", { count: countByYear(talks, talk.year) })}
                                            {" · "}
                                            {t("activities.yearWorkshops", { count: countByYear(workshops, talk.year) })}
                                        </span>
                                    </h2>
                                </li>
                            )}
                            <ActivityItem {...talk} />
                        </React.Fragment>
                    );
                })}
            </ul>
        );
    };

	return (
        <Layout styles="activities">
            <Heading text="activities.speeches" />
            <section className="activities__summary" aria-labelledby="activities-summary">
                <h2 id="activities-summary" className="sr-only">{t("activities.summary")}</h2>
                <ul className="activities__stats">
                    <li className="activities__stat">
                        <span className="activities__stat-value">{talks.length}</span>
                        <span className="activities__stat-label">{t("activities.givenTalks")}</span>
                    </li>
                    <li className="activities__stat">
                        <span className="activities__stat-value">{workshops.length}</span>
                        <span className="activities__stat-label">{t("activities.givenWorkshops")}</span>
                    </li>
                    <li className="activities__stat">
                        <span className="activities__stat-value">{spanishCount}</span>
                        <span className="activities__stat-label">{t("activities.inSpanish")}</span>
                    </li>
                    <li className="activities__stat">
                        <span className="activities__stat-value">{englishCount}</span>
                        <span className="activities__stat-label">{t("activities.inEnglish")}</span>
                    </li>
                </ul>
            </section>
            <Text>{t('activities.textOne')}</Text>
            <Text>{t('activities.textTwo')}</Text>
            <Text>{t('activities.text')}</Text>
            <Text>{t('activities.textThree')}</Text>
            <ul className="activities__logos">
                {conferencesArray.map((talk, index) => (
                    <li key={talk.alt || index}>
                        <a
							href={talk.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={t("alt.openConference", { name: talk.alt })}
						>
                            <img alt={talk.alt} src={talk.image} />
                        </a>
                    </li>
                ))}
            </ul>

            <fieldset className="activities__years">
                <legend className="activities__years-legend">{t("activities.filterByYear")}</legend>
                <div className="activities__years-options">
                    <button
                        type="button"
                        className={`activities__year-button${selectedYear == null ? " activities__year-button--active" : ""}`}
                        aria-pressed={selectedYear == null}
                        onClick={() => setSelectedYear(null)}
                    >
                        <span className="activities__year-mark">{t("activities.allYears")}</span>
                        <span className="activities__year-meta">
                            {t("activities.yearTalks", { count: talks.length })}
                        </span>
                        <span className="activities__year-meta">
                            {t("activities.yearWorkshops", { count: workshops.length })}
                        </span>
                    </button>
                    {years.map((year) => {
                        const talksInYear = countByYear(talks, year);
                        const workshopsInYear = countByYear(workshops, year);

                        return (
                            <button
                                key={year}
                                type="button"
                                className={`activities__year-button${selectedYear === year ? " activities__year-button--active" : ""}`}
                                aria-pressed={selectedYear === year}
                                onClick={() => setSelectedYear(year)}
                            >
                                <span className="activities__year-mark">{year}</span>
                                <span className="activities__year-meta">
                                    {t("activities.yearTalks", { count: talksInYear })}
                                </span>
                                <span className="activities__year-meta">
                                    {t("activities.yearWorkshops", { count: workshopsInYear })}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </fieldset>
            {renderList(visibleItems)}
        </Layout>
	);
};

export default Activities;
