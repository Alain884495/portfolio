import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import hero_image from "../assets/hero_image.jpg";
import photo_profil from "../assets/photo_profil.jpg";

const Herobanner = () => {
  return (
    <div className="w-full relative border-2 border-black overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={hero_image}
          alt="Hero Background"
          className="w-full h-full object-cover brightness-[0.3]"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-start justify-between gap-12 p-12">
        {/* Left side - Name and Title */}
        <div className="flex-1">
          <h1
            className="text-8xl mb-4 italic text-white"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            TSIMANDINY
            <br />
            ALAIN TOMY
          </h1>
          <p
            className="text-2xl italic text-white"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            Ingénieur en Télécommunication
            <br />
            et Réseaux & Dévéloppeur Web
          </p>
        </div>

        {/* Right side - Profile image and Contacts */}
        <div className="flex flex-col items-center gap-6">
          {/* Circular profile image */}
          <div className="w-60 h-60 rounded-full border-2 border-black overflow-hidden bg-white">
            <ImageWithFallback
              src={photo_profil}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contacts box */}
          <motion.div
            className="border-0 border-black bg-white/35 p-6 w-75"
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 1.3,
            }}
          >
            <h2
              className="text-2xl mb-4 text-center italic"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Mes contacts
            </h2>
            <ul className="space-y-2 text-sm">
              <li>📍 Adresse: Lazaret Sud Lot 195 ALE</li>
              <li>📞 Tel: +261 34 32 822 84</li>
              <li>✉️ Email: atsimandiny@gmail.com</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
