import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const usePageTitle = (titleKey) => {
	const { t } = useTranslation();

	useEffect(() => {
		const pageTitle = t(`pageTitle.${titleKey}`);
		document.title = `${pageTitle} | Mia Salazar`;

		return () => {
			document.title = t("pageTitle.default");
		};
	}, [t, titleKey]);
};

export default usePageTitle;
