import styles from "./DarkModeToggle.module.css";
import {useEffect, useState} from "react";

interface DarkModeToggleProps {
    toggled: boolean,
    onClick: (value: boolean) => void
}

const DarkModeToggle = ({toggled, onClick}: DarkModeToggleProps) => {
    const [isActive, toggle] = useState<boolean>(toggled);

    useEffect(() => {
        if (isActive) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isActive]);

    const callback = () => {
        toggle(!isActive);
        onClick(!isActive);
    }

    useEffect(() => {
        if(document.body.classList.contains("dark")){
            callback()
        }
    },[])

    return (
        <label className={styles.label}>
            <input className={styles.input} type="checkbox" defaultChecked={isActive} onClick={callback} />
            <span className={styles.span} />
        </label>
    )
}

export default DarkModeToggle;
