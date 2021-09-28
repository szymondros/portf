import React, {useCallback, useContext} from 'react';
import {AuthContext} from "../Auth";
import app from "../base";
import {withRouter, Redirect} from "react-router-dom";
import * as yup from "yup";
import {ErrorMessage} from '@hookform/error-message';
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import "../scss/home/sign.scss";
import ClosePageIcon from "./ClosePageIcon";

const LogIn = ({history}) => {

    const validationSchema = yup.object().shape({
        email: yup.string()
            .required("To pole jest wymagane")
            .email("Adres e-mail jest nieprawidłowy"),
        password: yup.string()
            .required("To pole jest wymagane")
    });

    const {handleSubmit, register, formState: {errors}, setValue, getValues} = useForm({
        mode: "onBlur",
        resolver: yupResolver(validationSchema)
    });

    const handleLogin = useCallback(
        async () => {
            const email = getValues("email");
            const password = getValues("password");
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email, password);
                history.push("/dashboard");

            } catch (error) {
                alert(error);
            }
        }, [history]
    );

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/dashboard"/>;
    }

    return (
        <>
            <ClosePageIcon/>
            <div className="sign__container">
                <div className="sign__wrapper">
                    <h1>Zaloguj się</h1>
                    <p>Zaloguj się na swoje konto</p>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="sign-email">
                            <label htmlFor="email">Adres e-mail</label>
                            <input type="email"
                                   {...register("email")}
                                   onChange={e => setValue("email", e.target.value)}/>
                            <div className="error-msg-wrapper">
                                <ErrorMessage as={<div className={"error-message"}/>} errors={errors} name={"email"}/>
                            </div>
                        </div>
                        <div className="sign-password">
                            <label htmlFor="password">Wprowadź hasło</label>
                            <input type="password"
                                   {...register("password")}
                                   onChange={e => setValue("password", e.target.value)}/>
                            <div className="error-msg-wrapper">
                                <ErrorMessage as={<div className={"error-message"}/>} errors={errors}
                                              name={"password"}/>
                            </div>
                        </div>
                        <button type="submit" className="sign-in-btn">Zaloguj</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default withRouter(LogIn);