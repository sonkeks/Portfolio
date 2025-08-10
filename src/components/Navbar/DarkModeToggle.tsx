import styles from "./DarkModeToggle.module.css";
import {useContext} from "react";
import {DarkModeContext} from "./DarkModeContext";

const DarkModeToggle = () => {
    const { state, dispatch } = useContext(DarkModeContext);

    return (
        <label className={styles.label}>
            <input className={styles.input} type="checkbox" checked={state.isDark} onChange={() => dispatch({ type: 'TOGGLE'})} />
            <span className={styles.span} />
        </label>
    )
}

export default DarkModeToggle;
