import html from "../../assets/images/icon-html.png";
import css from "../../assets/images/icon-css.png";
import javascript from "../../assets/images/icon-js.png";
import typescript from "../../assets/images/TypeScript.png";
import react from "../../assets/images/icon-react.png";
import bootstrap from "../../assets/images/icon-bootstrap.png";
import node from "../../assets/images/icon-nodeJS.png";
import postgres from "../../assets/images/icon-postgreSQL.png";
import sequelize from "../../assets/images/sequelize.png";
import mongo from "../../assets/images/mongoDB.png";
import jest from "../../assets/images/jest.png";
import git from "../../assets/images/icon-git.png";
import s from "./TechSkills.module.css";
import { motion } from "framer-motion";


export function TechSkills() {
    return (
        <section className={s.section}>
            <motion.div
                initial={{ y: 100 }}
                animate={{
                    y: 0,
                }}>
                <div className={s.container}>
                    <div className={s.cards}>
                        <img className={s.img} src={html} alt="Icono de HTML" />
                        <p>HTML 5</p>
                    </div>

                    <div className={s.cards}>
                        <img className={s.img} src={css} alt="Icono de CSS" />
                        <p>CSS</p>
                    </div>

                    <div className={s.cards}>
                        <img className={s.img} src={javascript} alt="Icono de JavaScript" />
                        <p>JavaScript</p>
                    </div>

                    <div className={s.cards}>
                        <img className={s.img} src={typescript} alt="Icono de TypeScript" />
                        <p>TypeScript</p>
                    </div>

                    <div className={s.cards}>
                        <img className={s.img} src={react} alt="Icono de React" />
                        <p>React</p>
                    </div>

                    <div className={s.cards}>
                        <img className={s.img} src={bootstrap} alt="Icono de Bootstrap" />
                        <p>Bootstrap</p>
                    </div>

                    <div className={s.cards}>
                        <img className={s.img} src={node} alt="Icono de NodeJS" />
                        <p>NodeJS</p>
                    </div>

                    <div className={s.cards}>
                        <img className={s.img} src={postgres} alt="Icono de PostgreSQL" />
                        <p>PostgreSQL</p>
                    </div>

                    <div className={s.cards}>
                        <img className={s.img} src={sequelize} alt="Icono de Sequelize" />
                        <p>Sequelize</p>
                    </div>

                    <div className={s.cards}>
                        <img className={s.img} src={mongo} alt="Icono de MongoDB" />
                        <p>MongoDB</p>
                    </div>

                    <div className={s.cards}>
                        <img className={s.img} src={jest} alt="Icono de Jest" />
                        <p>Jest</p>
                    </div>

                    <div className={s.cards}>
                        <img className={s.img} src={git} alt="Icono de Git" />
                        <p>Git</p>
                    </div>

                </div>
            </motion.div>
        </section>
    )
}