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

const SignUp = ({history}) => {

    const validationSchema = yup.object().shape({
        email: yup.string()
            .required("To pole jest wymagane")
            .email("Adres e-mail jest nieprawidłowy"),
        password: yup.string()
            .required("To pole jest wymagane")
            .min(6, "Hasło musi zawierać minimum 6 znaków"),
        repeatPassword: yup.string()
            .required("To pole jest wymagane")
            .oneOf([yup.ref('password'), null], "Hasła muszą być jednakowe"),
    });

    const {handleSubmit, register, formState: {errors}, setValue, getValues} = useForm({
        mode: "onBlur",
        resolver: yupResolver(validationSchema)
    });

    const handleSignUp = useCallback(
        async event => {
            const email = getValues("email");
            const password = getValues("password");
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email, password);
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
                    <h1>Zarejestruj się</h1>
                    <p>Dołącz do Nas i odkryj moc pomagania.</p>
                    <form onSubmit={handleSubmit(handleSignUp)}>
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
                        <div className="sign-repeat-password">
                            <label htmlFor="repeatPassword">Powtórz hasło</label>
                            <input type="password"
                                   {...register("repeatPassword")}
                                   onChange={e => setValue("repeatPassword", e.target.value)}/>
                            <div className="error-msg-wrapper">
                                <ErrorMessage as={<div className={"error-message"}/>} errors={errors}
                                              name={"repeatPassword"}/>
                            </div>
                        </div>
                        <button type="submit" className="sign-up-btn">Zarejestruj się</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default withRouter(SignUp);