import React from "react"; 
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu"

const Home = () => {
    const options = {
        initial: {x: "-100%",  opacity: 0,},
        whileInview: {x: 0, opacity: 1,},
        whileHover:{x: 0, opacity: 1}
    }



    return (
        <>
            <section className="home">

                <div> 
                    <motion.h1 transition = {{...options}} > Burger Shop </motion.h1>
                    <motion.p
                     transiton = {{...options, delay: 0.2,}}
                    >
                        Give yourself a tasty burger.
                    </motion.p>
                </div>

                <motion.a
                    href="#menu" initial={{
                        y: "-100%",
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 0.7,
                    }}
                    transition={{
                        delay: 0.2,
                    }}
                     whileHover={{
                        scale: 1.2,
                        opacity: 1
                    }}
                >
                    Explore Menu
                </motion.a>
            </section>
            <Menu />
        
            <Founder />
        

        </>
    );
};
        
export default Home;