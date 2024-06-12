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
            <FormElement placeholder="placeholder.name" type="text" id="name" name="name" text="contact.name" value={values.name} required={true} functionality={inputChange("name")} />
            <FormElement placeholder="placeholder.email" type="email" id="email" name="email" text="contact.email" value={values.email} required={true} functionality={inputChange("email")} />
            <FormElement placeholder="placeholder.comment" id="comment" name="comment" text="contact.comment" value={values.comment} required={true} functionality={inputChange("comment")} />
			<Button text="contact.send" disabled={serverState.submitting || !values.email === "" || values.comment === ""} type="submit"/>
		</form>
	);
};

export default Form;