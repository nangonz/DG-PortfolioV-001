import { motion } from "framer-motion";
import s from "./About.module.css";
import { Profile } from "../../layout/Profile/Profile";

export function About() {
    return (
        <section className={s.section}>
            <motion.div
                initial={{ x: -200 }}
                transition={{ duration: 0.25 }}
                animate={{
                    x: 0,
                    ease: "easeInOut"
                }}>
                <div className={s.container}>
                    <p style={{ lineHeight: "1.5rem" }}>
                        Soy desarrollador web, puedo desempeñarme como Front-end engineer, Back-end engineer o Fullstack (seniority level junior advanced), actualmente utilizo el stack PERN para realizar proyectos que sean escalables y modularizables. Poseo conocimientos en tecnologías como HTML, CSS, Javascript, React, Node, express, postgresSQL y sequelize.
                    </p><br />
                    <p style={{ lineHeight: "1.5rem" }}>
                        Soy proactivo, tenaz y comprometido, me encantan los entornos de desarrollo cooperativos y de trabajo en equipo utilizando metodologías ágiles como scrum. Tengo background en Contabilidad y Administración y me apasiona la tecnología. Poseo un Sólido manejo del inglés tanto oral como escrito (C2 Proficient Marco Común Europeo de Referencia para las lenguas).
                    </p>
                </div>
            </motion.div>
            <Profile className={s.profile} />
        </section>
    )
}