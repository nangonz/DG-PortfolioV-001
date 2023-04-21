import henry from "../../assets/images/soyhenry.jpg";
import fcc from "../../assets/images/FreeCodeCamp.png";
import unc from "../../assets/images/uncuyo.png";
import s from "./Education.module.css";
import { motion } from "framer-motion";


export function Education() {
    return (
        <section className={s.section}>
            <motion.div
                initial={{ y: 100 }}
                animate={{
                    y: 0,
                }}>
                <div className={s.container}>
                    <div className={s.card} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                        <img className={s.img} src={henry} alt="Logo - SoyHenry" />
                        <div className={s.text}>
                            <p>Full Stack Web Developer</p>
                            <p>2022</p>
                        </div>
                    </div>

                    <div className={s.card} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                        <img className={s.img} src={fcc}
                            alt="Logo - Plataforma5" />
                        <div className={s.text}>
                            <p>Full Stack Developer</p>
                            <p>2022</p>
                        </div>
                    </div>

                    <div className={s.card} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                        <img className={s.img} src={unc} alt="Logo - UNR" />
                        <div className={s.text}>
                            <p>Contador Público</p>
                            <p>2008-2012</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}