import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import LinkButton from "../LinkButton/LinkButton";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./ActivityLinks.scss";

const LANGUAGE_LABELS = {
	es: "Español",
	en: "English",
};

const isVideoUrl = (url = "") =>
	/youtube\.com|youtu\.be|vimeo\.com/i.test(url);

const splitHighlight = (text) => {
	const dotIndex = text.indexOf(".");
	if (dotIndex === -1) {
		return { title: text, description: "" };
	}
	return {
		title: text.slice(0, dotIndex + 1),
		description: text.slice(dotIndex + 1),
	};
};

export const ActivityLinks = ({
	text,
	speechLink = "",
	imageSrc = "",
	imageAlt = "",
	lang = "es",
}) => {
	const { t } = useTranslation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const imageButtonRef = useRef(null);

	const languageCode = lang === "en" ? "en" : "es";
	const { title, description } = splitHighlight(t(text));
	const hasActions = Boolean(speechLink || imageSrc);

	const content = (
		<>
			<span className="activity-wrapper__first-line">
				<span className="activity-highlight">{title}</span>
				<span className="activity-wrapper__language" lang={languageCode}>
					{LANGUAGE_LABELS[languageCode]}
				</span>
			</span>
			{description && (
				<span className="activity-wrapper__description">{description}</span>
			)}
		</>
	);

	const closeModal = () => {
		setIsModalOpen(false);
		imageButtonRef.current?.focus();
	};

	if (!hasActions) {
		return (
			<p className="activity-link activity-link--no-link" lang={languageCode}>
				{content}
			</p>
		);
	}

	return (
		<div className="activity-wrapper" lang={languageCode}>
			<p className="activity-wrapper__text">{content}</p>
			<div className="activity-wrapper__container">
				{speechLink && (
					<LinkButton
						isExternal
						styles="ghost small secondary"
						text={isVideoUrl(speechLink) ? "activities.speech" : "activities.event"}
						href={speechLink}
					/>
				)}
				{imageSrc && (
					<>
						<Button
							ref={imageButtonRef}
							styles="ghost small"
							text="activities.image"
							functionality={() => setIsModalOpen(true)}
							aria-haspopup="dialog"
							aria-expanded={isModalOpen}
						/>
						<Modal
							isOpen={isModalOpen}
							onClose={closeModal}
							imageSrc={imageSrc}
							imageAlt={imageAlt}
						/>
					</>
				)}
			</div>
		</div>
	);
};

ActivityLinks.propTypes = {
	text: PropTypes.string.isRequired,
	speechLink: PropTypes.string,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	lang: PropTypes.string,
};

export default ActivityLinks;
