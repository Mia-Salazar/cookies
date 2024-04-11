import React, { useState } from "react";
import axios from "axios";

import "./Form.scss";

import FormElement from "../../molecules/FormElement/FormElement";
import Button from "../../atoms/Button/Button";

export const Form = () => {
    const [values, setValues] = useState({name: "", email:"", street: "", city: "", country: "", comment: ""});
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
                name: "",
                email:"",
                street: "",
                city: "",
                country: "",
                comment: "",

            })
		}
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		const form = e.target;
		setServerState({ submitting: true });

        axios.post('https://formspree.io/f/mjvjpnrl', new FormData(form))
			.then(() => {
                //this
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
            <FormElement type="text" id="name" text="Nombre" value={values.name} functionality={inputChange("name")} />
            <FormElement type="email" id="email" text="Email" value={values.email} functionality={inputChange("email")} />
            <FormElement type="text" id="street" text="Calle" value={values.street} functionality={inputChange("street")} />
            <FormElement type="text" id="city" text="Ciudad" value={values.city} functionality={inputChange("city")} />
            <FormElement type="text" id="country" text="País" value={values.country} functionality={inputChange("country")} />
            <FormElement  id="comment" text="Mensaje" value={values.comment} functionality={inputChange("comment")} />
			<Button text="Enviar" disabled={serverState.submitting || !values.email === "" || values.comment === ""} type="submit"/>
		</form>
	);
};

export default Form;