import React from "react";
import { useTranslation } from "react-i18next";

import { Heading, LinkButton, Text, Layout } from "../../components";
import { portfolioArray } from "../../utils/PortfolioElements";
import usePageTitle from "../../utils/usePageTitle";
import "./Foodiesaurus.scss";

const previousProject = portfolioArray.find((item) => item.title === "portfolio.foodiesaurus");
const currentProject = portfolioArray.find((item) => item.title === "portfolio.newFoodiesaurus");

const REGULATION = {
	es: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32011R1169",
	en: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R1169",
};

const SOURCES = {
	quironsalud: "https://www.quironsalud.com/es/comunicacion/actualidad/20-25-poblacion-mundial-sufre-alguna-enfermedad-alerg-57adf",
	medicalNewsToday: "https://www.medicalnewstoday.com/articles/180120",
	beyondCeliac: "https://www.beyondceliac.org/celiac-disease/facts-and-figures/",
};

const TALK = "https://www.youtube.com/watch?v=uOLKPGIAVWw";
const APP = "https://github.com/Mia-Salazar/foodiesaurus-app";

const toTechList = (text = "") => text.split(",").map((tech) => tech.trim()).filter(Boolean);

const ExternalLink = ({ href, children }) => {
	const { t } = useTranslation();

	return (
		<a className="foodiesaurus__link" href={href} target="_blank" rel="noopener noreferrer">
			{children}
			<span className="sr-only"> ({t("alt.opensNewTab")})</span>
		</a>
	);
};

const ProjectLinks = ({ name, links }) => {
	const { t } = useTranslation();

	return (
		<div className="foodiesaurus__links">
			{links.map((link) => (
				<LinkButton
					key={link.href}
					isExternal
					styles="activity small"
					text={link.text}
					href={link.href}
					aria-label={t(link.label, { name })}
				/>
			))}
		</div>
	);
};

export const Foodiesaurus = () => {
	const { t, i18n } = useTranslation();
	usePageTitle("foodiesaurus");

	const oldName = t("foodiesaurus.oldTitle");
	const currentName = t("foodiesaurus.currentTitle");
	const regulationHref = i18n.language?.startsWith("en") ? REGULATION.en : REGULATION.es;

	return (
		<Layout styles="foodiesaurus">
			<Heading text="nav.foodiesaurus" />
			<section className="foodiesaurus__origin">
				<Heading text="foodiesaurus.whyTitle" size="medium" />
				<Text>{t("foodiesaurus.whyPersonal")}</Text>
				<Text>
					{t("foodiesaurus.whyDataBefore")}
					<ExternalLink href={SOURCES.quironsalud}>Quirónsalud</ExternalLink>
					{t("foodiesaurus.whyLactose")}
					<ExternalLink href={SOURCES.medicalNewsToday}>Medical News Today</ExternalLink>
					{t("foodiesaurus.whyCeliac")}
					<ExternalLink href={SOURCES.beyondCeliac}>Beyond Celiac</ExternalLink>
					{t("foodiesaurus.whyRegulation")}{" "}
					<ExternalLink href={regulationHref}>{t("foodiesaurus.regulation")}</ExternalLink>
					{t("foodiesaurus.whyRegulationAfter")}
				</Text>
			</section>
			<section className="foodiesaurus__project">
				<Heading text="foodiesaurus.oldTitle" size="medium" />
				<img
					className="foodiesaurus__image"
					src={previousProject.image}
					alt={t("alt.projectImage", { title: oldName })}
				/>
				<p className="foodiesaurus__years">{t("foodiesaurus.oldYears")}</p>
				<Text>{t("foodiesaurus.oldStart")}</Text>
				<Text>
					{t("foodiesaurus.oldTalkBefore")}{" "}
					<ExternalLink href={TALK}>{t("foodiesaurus.oldTalkLink")}</ExternalLink>
					{t("foodiesaurus.oldTalkAfter")}
				</Text>
				<Text>{t("foodiesaurus.oldTech")}</Text>
				<Text>{t("foodiesaurus.oldScope")}</Text>
				<ul className="foodiesaurus__techs">
					{toTechList(previousProject.text).map((tech) => (
						<li key={tech}>{tech}</li>
					))}
				</ul>
				<ProjectLinks
					name={oldName}
					links={[
						{
							href: "https://github.com/Mia-Salazar/safetaurant",
							text: "foodiesaurus.code",
							label: "foodiesaurus.codeLabel",
						},
						{
							href: previousProject.href,
							text: "foodiesaurus.video",
							label: "foodiesaurus.videoLabel",
						},
					]}
				/>
			</section>
			<section className="foodiesaurus__project">
				<Heading text="foodiesaurus.currentTitle" size="medium" />
				<img
					className="foodiesaurus__image"
					src={currentProject.image}
					alt={t("alt.projectImage", { title: currentName })}
				/>
				<p className="foodiesaurus__years">{t("foodiesaurus.currentStatus")}</p>
				<Text>{t("foodiesaurus.currentSimple")}</Text>
				<Text>{t("foodiesaurus.currentOpen")}</Text>
				<Text>
					{t("foodiesaurus.currentAppBefore")}{" "}
					<ExternalLink href={APP}>{t("foodiesaurus.currentAppLink")}</ExternalLink>
					{t("foodiesaurus.currentAppAfter")}
				</Text>
				<ul className="foodiesaurus__techs">
					{toTechList(currentProject.text).map((tech) => (
						<li key={tech}>{tech}</li>
					))}
				</ul>
				<ProjectLinks
					name={currentName}
					links={[
						{
							href: "https://github.com/Mia-Salazar/foodiesaurus",
							text: "foodiesaurus.code",
							label: "foodiesaurus.codeLabel",
						},
						{
							href: "https://foodiesaurus.vercel.app/",
							text: "foodiesaurus.live",
							label: "foodiesaurus.liveLabel",
						},
						{
							href: APP,
							text: "foodiesaurus.app",
							label: "foodiesaurus.appLabel",
						},
					]}
				/>
			</section>
		</Layout>
	);
};

export default Foodiesaurus;
