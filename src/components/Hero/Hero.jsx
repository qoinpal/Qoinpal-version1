import hero from "./hero.module.css";
import { Link } from "react-router-dom";
import Assent from "/src/components/Assent/Assent";
import useWindowResize from "../../hook/useWindowSize";
import { motion } from "framer-motion";
import useLoad from "../../hook/useLoad";

export default function Hero() {
  const { width } = useWindowResize();
  const mobile = width < 480;
  const { isLoaded } = useLoad();
  return (
    <section
      className={`${hero.hero}
     `}
    >
      <div className="global-content-wrapper">
        <div className={hero.text}>
          <motion.div

            className={hero.heading}

            initial={{ opacity: 0, x: `100vw` }}

            animate={isLoaded ? { opacity: 1, x: `0` } : {}}

            transtion={{ type: "spring", mass: 4, damping: 0.8, duration: 1 }}

          >
            <h1>
              <span className={hero.span1}>
                {" "}
                {!mobile && <Assent background="#FFA000" />} fiat-to-crypto{" "}
              </span>
              Payments made
              <span className={hero.span2}>
                {" "}
                borderless.
                {!mobile && <Assent background="white" />}
              </span>{" "}
            </h1>
          </div>

          <p
            className={hero.heading}
          
          >
            {" "}
            The most convenient way for merchants in Africa to easily accept
            mobile money, crypto, cash payments and third-party wallet services
            from their customers
          </p>

          <Link to="more">
            <button
              className={hero.button}
           
            >
              Learn More {">"}{" "}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
