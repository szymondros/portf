import React, {useCallback, useContext} from 'react';
import HomeNav from "./HomeNav";
import {AuthContext} from "../Auth";
import app from "../base";
import {withRouter, Redirect} from "react-router-dom";
import * as yup from "yup";
import {ErrorMessage} from '@hookform/error-message';
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import "../scss/home/log-in.scss";

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
        async event => {
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
            <HomeNav/>
            <div className="sign__container">
                <h1>Zaloguj się</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="sign-email">
                        <label htmlFor="email">Adres e-mail</label>
                        <input {...register("email")} onChange={e => setValue("email", e.target.value)}/>
                        <div className="error-msg-wrapper">
                            <ErrorMessage as={<div className={"error-message"}/>} errors={errors} name={"email"}/>
                        </div>
                    </div>
                    <div className="sign-password">
                        <label htmlFor="password">Wprowadź hasło</label>
                        <input {...register("password")} onChange={e => setValue("email", e.target.value)}/>
                        <div className="error-msg-wrapper">
                            <ErrorMessage as={<div className={"error-message"}/>} errors={errors} name={"email"}/>
                        </div>
                    </div>
                    <button type="submit" className="submit-btn">Zaloguj</button>
                </form>
            </div>
        </>
    );
};

export default withRouter(LogIn);