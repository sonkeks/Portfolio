import styles from "./Contact.module.css"
import {SyntheticEvent, useState} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const submitForm = (event: SyntheticEvent) => {
        event.preventDefault();
        const params = {
            name: name + " " + surname,
            subject: subject,
            from_email: email,
            message: message,
        }
        emailjs.send("service_48dpmw2", "template_i2ywh58", params, "UqwU8RRV6d3zX77CS")
            .then((result) => {
                console.log(result.text);
            })
            .catch(error => {
                console.log(error.text);
            })
    }

    const clearForm = (event: SyntheticEvent) => {
        event.preventDefault();
        setName("");
        setSurname("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <div id="contact" className={styles.container}>
            <h1>Contact</h1>
            <h2>Let's get in Touch</h2>
            <form onSubmit={submitForm} className={styles.form}>
                <div className={styles.inputGroup}>
                    <input autoComplete="off" placeholder="Name" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="name" className={styles.label}>Name</label>
                </div>
                <div className={styles.inputGroup}>
                    <input autoComplete="off" placeholder="Surname" id="surname" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                    <label htmlFor="surname" className={styles.label}>Surname</label>
                </div>
                <div className={styles.inputGroup}>
                    <input autoComplete="off" placeholder="Email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
                    <label htmlFor="email" className={styles.label}>Email address</label>
                </div>
                <div className={styles.inputGroup}>
                    <input autoComplete="off" placeholder="Subject" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    <label htmlFor="subject" className={styles.label}>Subject</label>
                </div>
                <div className={styles.inputGroup}>
                    <textarea placeholder="Message" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <label htmlFor="message" className={styles.textareaLabel}>Message</label>
                </div>
                <div className={styles.buttonRow}>
                    <button onClick={event => clearForm(event)} className={styles.buttonClear}>
                        Clear
                    </button>
                    <button type="submit" className={styles.button}>
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;
