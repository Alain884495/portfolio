const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">Tsimandiny Alain Tomy</h3>
          <p className="text-slate-400 text-sm">
            Ingénieur en Télécommunication et Réseaux & Développeur Web
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-slate-400 text-sm">📍 Lazaret Sud Lot 195 ALE</p>
          <p className="text-slate-400 text-sm">📞 +261 34 32 822 84</p>
          <p className="text-slate-400 text-sm">✉️ atsimandiny@gmail.com</p>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-6 pt-6 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Tsimandiny Alain Tomy. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
