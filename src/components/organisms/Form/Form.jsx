import React, { useEffect, useState } from "react";
import axios from "axios";

// import { emailValidator, textValidator } from "../../../utils/functionalities/validators";
// import { Button } from "../../atoms/Button/Button";
// import { FeedbackText } from "../../atoms/FeedbackText/FeedbackText";
// import { InputGroup } from "../../molecules/InputGroup/InputGroup";
import "./Form.scss";
import Input from "../../atoms/Input/Input";
import FormElement from "../../molecules/FormElement/FormElement";
import Button from "../../atoms/Button/Button";

export const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [textarea, setTextarea] = useState("");
	const [inputValidation, setInputValidation] = useState({
		name: null,
		email: null,
		textarea: null
	});
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
			setEmail("");
			setTextarea("");
			setName("");
		}
	};
	const handleOnSubmit = e => {
		e.preventDefault();
		const form = e.target;
		setServerState({ submitting: true });

        axios.post('https://formspree.io/f/mjvjpnrl', new FormData(form))
			.then(() => {
				handleServerResponse(true, "contact.success");
			})
			.catch(r => {
				handleServerResponse(false, r.response.data.error);
			});
	};
	const inputChange = (param) => (e) => {
		const inputValue = e.target.value;
		if (param === "email") {
			setEmail(inputValue);
		}
		if (param === "textarea") {
			setTextarea(inputValue);
		}
		if (param === "name") {
			setName(inputValue);
		}
	};
	useEffect(() => {
		// setInputValidation({
		// 	email: emailValidator(email),
		// 	name: textValidator(name),
		// 	textarea: textValidator(textarea)
		// });
	}, [email, name, textarea]);
	return (
		<form className="form" onSubmit={handleOnSubmit}>
            <FormElement type="text" id="name" text="Nombre" value={name} functionality={inputChange("name")} />
            <FormElement type="email" id="name" text="Email" value={name} functionality={inputChange("name")} />
            <FormElement type="text" id="name" text="Calle" value={name} functionality={inputChange("name")} />
            <FormElement type="text" id="name" text="Ciudad" value={name} functionality={inputChange("name")} />
            <FormElement type="text" id="name" text="País" value={name} functionality={inputChange("name")} />
            <FormElement  id="name" text="Mensaje" value={name} functionality={inputChange("name")} />
			<Button text="Enviar" disabled={serverState.submitting || email === undefined || textarea === undefined} type="submit"/>
		</form>
	);
};

export default Form;