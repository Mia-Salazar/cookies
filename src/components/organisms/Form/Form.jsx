import React, { useState } from "react";
import axios from "axios";

import FormElement from "../../molecules/FormElement/FormElement";
import Button from "../../atoms/Button/Button";
import "./Form.scss";

export const Form = () => {
    const [values, setValues] = useState({ city: "", comment: "", country: "",  email:"", name: "", province: "", street: "",});
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
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

	};

	return (
		<form className="form" onSubmit={handleOnSubmit}>
            <FormElement type="text" id="field1" text="contact.name" value={values.name} functionality={inputChange("name")} />
            <FormElement type="email" id="field2" text="contact.email" value={values.email} functionality={inputChange("email")} />
            <FormElement  id="comment" text="contact.comment" value={values.comment} functionality={inputChange("comment")} />
			<Button text="contact.send" disabled={serverState.submitting || !values.email === "" || values.comment === ""} type="submit"/>
		</form>
	);
};

export default Form;