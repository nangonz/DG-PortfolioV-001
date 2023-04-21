import git from "../../assets/images/icon-githubProyecto.png";
import demo from "../../assets/images/icon-demoProyecto.png";
import ecommerce from "../../assets/images/E-commerce.png";
import pokeapp from "../../assets/images/PokeApp.png";
import s from "./Projects.module.css";
import { motion } from "framer-motion";

export function Projects() {
    return (
        <section className={s.section}>
            <motion.div
                initial={{ y: 100 }}
                animate={{
                    y: 0,
                }}>
                <div className={s.container}>
                    <div className={s.card} data-aos="zoom-in-up"
                        data-aos-anchor-placement="center-bottom">
                        <div className={s.cardimg}>
                            <img src={ecommerce} alt="Ecommerce" />
                        </div>

                        <div className={s.cardtext}>
                            <h2>E-commerce Tecnoshop</h2>

                            <p>Diseñado y desarrollado junto a un equipo de trabajo, utilizando SCRUM como metodología ágil,
                                entre muchas funcionalidads es un e-commerce de tecnología que cuenta con autenticación,
                                autorizacion, carrito de compras, pasarela de pago y panel administrativo.</p>
                        </div>

                        <div className={s.btn}>
                            <a href="https://e-commerce-tecnoshop.vercel.app" target="_blank">
                                <button className="btn_demo">
                                    <img src={demo} alt="Demostración" />DEMO
                                </button>
                            </a>

                            <a href="https://github.com/nangonz/E-commerce-PF" target="_blank">
                                <button className="btn_repo">
                                    <img src={git} alt="Repositorio de github" />REPO
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className={s.card} data-aos="zoom-in-up"
                        data-aos-anchor-placement="center-bottom">
                        <div className={s.cardimg}>
                            <img src={pokeapp} alt="Proyecto: Portafolio" />
                        </div>

                        <div className={s.cardtext}>
                            <h2>Pokémon App</h2>
                            <p>SPA que consume datos de la API de pokémon y al mismo tiempo cuenta con Back-end API Rest
                                propio. Entre sus funcionalidades están búsqueda, filtrado, ordenamiento, paginado y
                                formularios dinámicos y controlados, sin usar ninguna librería de terceros. </p>
                        </div>

                        <div className={s.btn}>
                            <a href="https://poke-app-seven.vercel.app" target="_blank">
                                <button className="btn_demo">
                                    <img src={demo} alt="Demostración" />DEMO
                                </button>
                            </a>

                            <a href="https://github.com/nangonz/Pokemons-SPA" target="_blank">
                                <button className="btn_repo">
                                    <img src={git} alt="Repositorio de github" />REPO
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

        </section>
    )
}