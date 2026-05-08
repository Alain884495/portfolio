import { toolsmodelModelisation, toolsmodelOrganisation } from "../datas/Datas";
import ToolsmodelCard from "./ToolsmodelCard";
import { motion } from "motion/react";
const Toolsmodel = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold m-8">
        OUTILS DE MODELISATION ET ORGANISATION
      </h1>
      <div className="grid grid-cols-2 gap-8 px-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Modélisation
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {toolsmodelModelisation.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <ToolsmodelCard {...tool} />
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Organisation
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {toolsmodelOrganisation.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: (toolsmodelModelisation.length + index) * 0.3,
                }}
              >
                <ToolsmodelCard {...tool} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolsmodel;
