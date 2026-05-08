import { academicData } from "../datas/Datas";

const AcademicCareer = () => {
  return (
    <div className="py-16 px-8">
      <h1 className="text-center text-5xl font-bold mb-16">
        Parcours Académique
      </h1>

      {/* Timeline Container */}
      <div className="relative flex justify-between items-start">
        {/* Continuous Horizontal Line */}
        <div className="absolute top-[27px] left-[2px] right-[2px] h-[5px] bg-gray-800"></div>

        {academicData.map((item, index) => (
          <div
            key={item.year}
            className="flex flex-col items-center w-48 relative"
          >
            {/* Year - Oval positioned on the horizontal line */}
            <div className="border-2 border-gray-800 rounded-full px-6 py-3 bg-white relative z-10">
              <span className="text-xl font-bold text-gray-800">
                {item.year}
              </span>
            </div>

            {/* Vertical Line - connects oval to card */}
            <div className="w-[2px] h-10 bg-gray-800"></div>

            {/* Content Box */}
            <div className="w-full bg-white border-2 border-gray-800 rounded-lg p-4 shadow-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{item.institution}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicCareer;
