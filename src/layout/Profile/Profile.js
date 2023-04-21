import profile from "../../assets/profile.png";
import { motion } from "framer-motion";
import s from "./Profile.module.css";

export function Profile(){
    return (
            <div className={s.div}>
                <motion.div className={s.motion}
                    initial={{ scale: 1 }}
                    transition={{ duration: 2 }}
                    animate={{
                        scale: [1, 1.1, 1.1, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["50%", "40%", "30%", "40%", "50%"],
                        ease: "easeInOut",
                    }}>
                </motion.div>
                <img className={s.img} src={profile} alt="photo Damian Gonzalez" />
            </div>
    )
}
