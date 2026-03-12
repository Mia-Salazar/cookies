import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import FormElement from "../../molecules/FormElement/FormElement";
import Button from "../../atoms/Button/Button";
import "./Form.scss";

export const Form = () => {
    const { t } = useTranslation();
    const [values, setValues] = useState({ city: "", comment: "", country: "",  email:"", name: "", province: "", street: "",});
    const [errors, setErrors] = useState({});
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null
	});

	const handleServerResponse = (ok, msg) => {
		setServerState({
			submitting: false,
			status: { ok, msg }
		});
		if (ok) {
            setValues({
				city: "",
                comment: "",
                country: "",
                email:"",
                name: "",
				province: "",
				street: "",
            })
		}
	};

	const validate = () => {
		const nextErrors = {};

		if (!values.name?.trim()) nextErrors.name = t("contact.required");

		if (!values.email?.trim()) {
			nextErrors.email = t("contact.required");
		} else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
			nextErrors.email = t("contact.invalidEmail");
		}

		if (!values.comment?.trim()) nextErrors.comment = t("contact.required");

		setErrors(nextErrors);

		const firstInvalidId = nextErrors.name ? "name" : nextErrors.email ? "email" : nextErrors.comment ? "comment" : null;
		if (firstInvalidId) {
			const el = document.getElementById(firstInvalidId);
			if (el && typeof el.focus === "function") el.focus();
		}

		return Object.keys(nextErrors).length === 0;
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		setServerState((prev) => ({ ...prev, status: null }));
		if (!validate()) return;

		const form = e.target;
		setServerState({ submitting: true });

        axios.post('https://formspree.io/f/mjvjpnrl', new FormData(form))
			.then(() => {
				handleServerResponse(true, "contact.success");
			})
			.catch(r => {
				handleServerResponse(false, r.response?.data?.error || "contact.error");
			});
	};

	const inputChange = (param) => (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
		setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));

	};

	const statusMessage = serverState.status
		? (serverState.status.ok ? t(serverState.status.msg) : (t(serverState.status.msg) !== serverState.status.msg ? t(serverState.status.msg) : serverState.status.msg))
		: null;

	return (
		<form className="form" onSubmit={handleOnSubmit} noValidate aria-describedby={statusMessage ? "form-status" : undefined}>
			{statusMessage && (
				<div
					id="form-status"
					role="status"
					aria-live="polite"
					className="form__status"
					aria-atomic="true"
				>
					{statusMessage}
				</div>
			)}
            <FormElement placeholder="placeholder.name" type="text" id="name" name="name" text="contact.name" value={values.name} required={true} functionality={inputChange("name")} errorMessage={errors.name} />
            <FormElement placeholder="placeholder.email" type="email" id="email" name="email" text="contact.email" value={values.email} required={true} functionality={inputChange("email")} errorMessage={errors.email} />
            <FormElement placeholder="placeholder.comment" id="comment" name="comment" text="contact.comment" value={values.comment} required={true} functionality={inputChange("comment")} errorMessage={errors.comment} />
			<Button text="contact.send" disabled={serverState.submitting || values.name === "" || values.email === "" || values.comment === ""} type="submit"/>
		</form>
	);
};

export default Form;