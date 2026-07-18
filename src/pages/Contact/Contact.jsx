import React from "react";

import { useTranslation } from "react-i18next";



import { Form, Heading, Text, Layout } from "../../components";

import { SOCIAL_NETWORKS } from "../../constants/socialNetworks";

import usePageTitle from "../../utils/usePageTitle";

import "./Contact.scss";



export const Contact = () => {

    const { t } = useTranslation();

    usePageTitle("contact");

	return (
        <Layout styles="contact">
            <Heading text="nav.contact" />
            <Text>{t('contact.text')}</Text>
            <Form />
            <section className="contact__social" aria-labelledby="contact-social-heading">
                <Text id="contact-social-heading">{t('contact.socialIntro')}</Text>
                <ul className="contact__social-list">
                    {SOCIAL_NETWORKS.map((social) => (
                        <li key={social.icon} className="contact__social-item">
                            <a
                                className="contact__social-link"
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t(social.aria)}
                            >
                                <i aria-hidden="true" className={`fab contact__social-icon ${social.icon}`} />
                                <span className="contact__social-url">{social.link}</span>
                                <span className="sr-only"> ({t("alt.opensNewTab")})</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
	);
};

export default Contact;