import LanguageCard from "./LanguageCard";
import { motion } from "motion/react";
import { languagesFrontend, languagesBackend } from "../datas/Datas";

const Arsenals = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold m-8">Mes Arsenals</h1>
      <div className="grid grid-cols-2 gap-8 px-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">FrontEnd</h2>
          <div className="grid grid-cols-2 gap-4">
            {languagesFrontend.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <LanguageCard
                  name={lang.name}
                  icon={lang.icon}
                  level={lang.level}
                  years={lang.years}
                  description={lang.description}
                  color={lang.color}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">BackEnd</h2>
          <div className="grid grid-cols-2 gap-4">
            {languagesBackend.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: (languagesFrontend.length + index) * 0.3,
                }}
              >
                <LanguageCard
                  name={lang.name}
                  icon={lang.icon}
                  level={lang.level}
                  years={lang.years}
                  description={lang.description}
                  color={lang.color}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arsenals;
