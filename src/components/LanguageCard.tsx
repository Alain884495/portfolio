import { Code2, Star } from "lucide-react";

interface LanguageCard {
  name: string;
  icon?: string;
  level: number; // 1-5
  years: number;
  description: string;
  color?: string;
}

export default function LanguageCard({
  name,
  icon,
  level,
  years,
  description,
  color = "bg-blue-500",
}: LanguageCard) {
  return (
    <div className="w-72 h-85 bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-800">
      {/* Header avec icône */}
      <div
        className={`${color} p-6 flex items-center justify-center border-b-2 border-gray-800`}
      >
        {icon ? (
          <img src={icon} alt={name} className="w-20 h-20 object-contain" />
        ) : (
          <Code2 size={80} className="text-white" />
        )}
      </div>

      {/* Info Section */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-xl text-gray-900">{name}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {years} {years > 1 ? "ans" : "an"}
          </span>
        </div>

        {/* Niveau de maîtrise */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Niveau de maîtrise</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={
                    star <= level
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>

          {/* Barre de progression */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className={`${color} h-full rounded-full transition-all duration-500`}
              style={{ width: `${(level / 5) * 100}%` }}
            />
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
