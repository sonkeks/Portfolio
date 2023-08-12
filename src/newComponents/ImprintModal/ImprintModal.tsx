import styles from "./ImprintModal.module.css";
import {FiXSquare} from "react-icons/fi";
import {forwardRef, useImperativeHandle, useState} from "react";

export type ModalHandle = {
    open: () => void;
};

const ImprintModal = forwardRef<ModalHandle>((props,ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open() {
            setIsOpen(true);
        },
    }));

    const cancelModal = () => {
        setIsOpen(false);
    }

    return (
        <div className={isOpen ? styles.backdrop : styles.hidden} onClick={cancelModal}>
            <div className={styles.container} onClick={e => {
                e.stopPropagation()
            }}>
                <div className={styles.close} onClick={cancelModal}>
                    <FiXSquare size={33}/>
                </div>
                <h3>Imprint & Responsible for Content</h3>
                <div>Sönke Schaarschmidt</div>
                <div>Meyerbeerstraße 123</div>
                <div>Berlin, Germany, 13088</div>
                <div>soenke.schaarschmidt@gmx.de</div>
                <h3>Disclaimer</h3>
                <p>The information contained on this website is for general purposes only. While I strive to keep the
                    information up to date and accurate, I make no representations or warranties of any kind, express or
                    implied, about the completeness, accuracy, reliability, suitability, or availability with respect to
                    the website or the information, products, services, or related graphics contained on the website for
                    any purpose. Any reliance you place on such information is therefore strictly at your own risk. In
                    no event will I be liable for any loss or damage including without limitation, indirect or
                    consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits
                    arising out of or in connection with the use of this website. Through this website, you can link to
                    other websites that are not under my control. I have no control over the nature, content, and
                    availability of those sites. The inclusion of any links does not necessarily imply a recommendation
                    or endorse the views expressed within them.</p>
                <h3>Copyright</h3>
                <p>Unless otherwise stated, I, Sönke Schaarschmidt, am the legal copyright holder of all content
                    (including text, images, and graphics) on this website and it may not be used, reprinted, or
                    published without my written consent.</p>
                <h3>Photo Credits</h3>
                <p>The images used on this website are either owned by me, obtained with the necessary licenses, or used
                    under the Creative Commons license. If you believe that any image used on this website infringes
                    upon your copyright, please contact me immediately and I will remove it.</p>
                <h3>Website Design</h3>
                <p>This website was designed and developed by Sönke Schaarschmidt.</p>
                <h3>Last Updated</h3>
                <p>This Imprint was last updated on 12.08.2023</p>
                <div className={styles.flex}>
                    <button onClick={cancelModal} className={styles.button}>Close</button>
                </div>
            </div>
        </div>
    )
})

export default ImprintModal;
