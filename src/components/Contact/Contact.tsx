import styles from "./Contact.module.css"
import {ChangeEvent, SyntheticEvent, useState} from "react";
import emailjs from "@emailjs/browser";
import {FiCheckCircle, FiXCircle} from "react-icons/fi";
import {useTranslation} from "react-i18next";

const Contact = () => {
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [nameError, setNameError] = useState<string>("");
    const [surnameError, setSurnameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [subjectError, setSubjectError] = useState<string>("");
    const [messageError, setMessageError] = useState<string>("");

    const [isSending, setIsSending] = useState<boolean>(false);
    const [emailSent, setEmailSent] = useState<boolean>();

    const { t } = useTranslation("contact");

    const formIsValid = () => {
        let fields = [name, surname, email, subject, message];
        let errors = [nameError, surnameError, emailError, subjectError, messageError];
        return (errors.every(element => element === "") && fields.every(field => field !== ""));
    }

    const changeField = (e: ChangeEvent<(HTMLInputElement | HTMLTextAreaElement)>, stateFunction: (state: string) => void, errorFunction: (error: string) => void) => {
        let name = t(e.target.name);
        stateFunction(e.target.value);
        if (e.target.value === "") {
            errorFunction(t("fieldError", {fieldName: name}));
        } else {
            errorFunction("");
        }
    }

    const submitForm = (event: SyntheticEvent) => {
        event.preventDefault();
        const params = {
            name: name + " " + surname,
            subject: subject,
            from_email: email,
            message: message,
        }
        setIsSending(true);
        emailjs.send("service_48dpmw2", "template_i2ywh58", params, "UqwU8RRV6d3zX77CS")
            .then(() => {
                setName("");
                setSurname("");
                setEmail("");
                setSubject("");
                setMessage("");
                setIsSending(false);
                setEmailSent(true);
                setTimeout(() => setEmailSent(undefined), 10000);
            })
            .catch(error => {
                setIsSending(false);
                setEmailSent(false);
                setTimeout(() => setEmailSent(undefined), 10000);
                console.log(error.text);
            })
    }

    const showConfirmation = () => {
        if (emailSent !== undefined) {
            if (emailSent) {
                return (
                    <>
                        <FiCheckCircle className={styles.successIcon} size={30}/>
                        <span>{t("success")}</span>
                    </>
                )
            } else {
                return (
                    <>
                        <FiXCircle className={styles.errorIcon} size={30}/>
                        <span>{t("error")}</span>
                    </>
                )
            }
        }
    }

    const clearForm = (event: SyntheticEvent) => {
        event.preventDefault();
        setName("");
        setSurname("");
        setEmail("");
        setSubject("");
        setMessage("");

        setNameError("");
        setSurnameError("");
        setEmailError("");
        setSubjectError("");
        setMessageError("");
    }

    return (
        <div id="contact" className={styles.container}>
            <div>
                <h1>{t("contact")}</h1>
                <h2>{t("subtitle")}</h2>
            </div>
            <form onSubmit={submitForm} className={styles.form}>
                <div className={styles.inputGroup}>
                    <input autoComplete="off" placeholder="Name" id="name" name="name" value={name}
                           onChange={(e) => changeField(e, setName, setNameError)}/>
                    <label htmlFor="name" className={styles.label}>{t("name")}</label>
                    <small className={styles.errorMessage}>{nameError}</small>
                </div>
                <div className={styles.inputGroup}>
                    <input autoComplete="off" placeholder="Surname" id="surname" name="surname" value={surname}
                           onChange={(e) => changeField(e, setSurname, setSurnameError)}/>
                    <label htmlFor="surname" className={styles.label}>{t("surname")}</label>
                    <small className={styles.errorMessage}>{surnameError}</small>
                </div>
                <div className={styles.inputGroup}>
                    <input autoComplete="off" placeholder="Email" id="email" name="email" value={email}
                           onChange={(e) => changeField(e, setEmail, setEmailError)} type="email"/>
                    <label htmlFor="email" className={styles.label}>{t("email")}</label>
                    <small className={styles.errorMessage}>{emailError}</small>
                </div>
                <div className={styles.inputGroup}>
                    <input autoComplete="off" placeholder="Subject" id="subject" name="subject" value={subject}
                           onChange={(e) => changeField(e, setSubject, setSubjectError)}/>
                    <label htmlFor="subject" className={styles.label}>{t("subject")}</label>
                    <small className={styles.errorMessage}>{subjectError}</small>
                </div>
                <div className={styles.inputGroup}>
                    <textarea placeholder="Message" id="message" name="message" value={message}
                              onChange={(e) => changeField(e, setMessage, setMessageError)}/>
                    <label htmlFor="message" className={styles.textareaLabel}>{t("message")}</label>
                    <small className={styles.errorMessage}>{messageError}</small>
                </div>
                <div className={styles.buttonRow}>
                    <div className={styles.buttonGroup}>
                        <button onClick={event => clearForm(event)} className={styles.buttonClear}>
                            {t("clear")}
                        </button>
                        <button disabled={!formIsValid() || isSending} type="submit" className={styles.button}>
                            {isSending && <span className={styles.loader}></span>}
                            {!isSending && t("send")}
                        </button>
                    </div>
                    <div className={styles.confirmationGroup}>
                        {showConfirmation()}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;
