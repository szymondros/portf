import React from 'react';
import "../scss/home/home-contact-us.scss";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {ErrorMessage} from "@hookform/error-message";
import {isMobile} from "react-device-detect";
import firebase from "firebase/compat";

const HomeContactUs = () => {

    const validationSchema = yup.object().shape({
        firstName: yup.string()
            .required("To pole jest wymagane")
            .min(3, "Imię musi składać się z minimum 3 liter")
            .matches(/^[a-z ,.'-]+$/i, "Imię musi składać się z samych liter"),
        email: yup.string()
            .required("To pole jest wymagane")
            .email("Adres e-mail jest nieprawidłowy"),
        textarea: yup.string()
            .required("To pole jest wymagane")
            .min(6, "Wiadomość musi składać się z minimum 6 znaków")
    });

    const {handleSubmit, register, formState: {errors}, getValues} = useForm({
        mode: "onBlur",
        resolver: yupResolver(validationSchema)
    });

    const db = firebase.firestore();

    const getCurrentTime = () => {
        new Date();
        let timeStamp = Date.now();
        return timeStamp;
    }

    const onSubmit = async () => {
        const time = getCurrentTime();
        const msgObj = {
            timestamp: time,
            name: getValues("firstName"),
            email: getValues("email"),
            text: getValues("textarea")
        }
        db.collection("home-messages").add(msgObj)
            .then(function () {
                console.log("udało się")
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    return (
        <section id="contact-form" className="home__contact-form home__page__wrapper">
            <div className="contact-form__container">
                {isMobile ? <></> : <img src="" alt="sd"/>}
                <div className="contact-form__form">
                    <h1>Skontaktuj się z nami</h1>
                    <hr/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-name">
                            <label htmlFor="firstName">Wpisz swoje imię</label>
                            <input placeholder="Krzysztof" {...register('firstName')} />
                            <div className="error-msg-wrapper">
                                <ErrorMessage as={<div className={"error-message"}/>} errors={errors}
                                              name={"firstName"}/>
                            </div>
                        </div>
                        <div className="form-email">
                            <label htmlFor="email">E-mail</label>
                            <input placeholder="abc@xyz.pl" {...register("email")} />
                            <div className="error-msg-wrapper">
                                <ErrorMessage as={<div className={"error-message"}/>} errors={errors} name={"email"}/>
                            </div>
                        </div>
                        <div className="form-textarea">
                            <label htmlFor="textarea">Wiadomość</label>
                            <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                      {...register("textarea")} />
                            <div className="error-msg-wrapper">
                                <ErrorMessage as={<div className={"error-message"}/>} errors={errors} name="textarea"/>
                            </div>
                        </div>
                        <button type="submit" className="submit-btn">Wyślij</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HomeContactUs;