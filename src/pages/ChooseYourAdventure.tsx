import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Suggestion } from "../types/index";
import { getAllThemes, getSuggestionsByTheme } from "../utils/suggestionUtils";
import { ChevronLeft } from "lucide-react";

export default function ChooseYourAdventure() {
  const [allThemes, setAllThemes] = useState<string[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    setAllThemes(getAllThemes());
  }, []);

  const handleThemeSelect = (theme: string) => {
    setSelectedTheme(theme);
    const filtered = getSuggestionsByTheme(theme).sort((a, b) => {
      if (a.suggestion_level !== b.suggestion_level) {
        return a.suggestion_level - b.suggestion_level;
      }
      return a.suggestion_id.localeCompare(b.suggestion_id);
    });
    setSuggestions(filtered);
  };

  const handleBack = () => {
    setSelectedTheme(null);
    setSuggestions([]);
  };

  const levelLabels: Record<number, string> = {
    0: "Débutant",
    1: "Facile",
    2: "Intermédiaire",
    3: "Avancé",
    4: "Expert",
  };

  const levelColors: Record<number, string> = {
    0: "from-green-600 to-green-700",
    1: "from-blue-600 to-blue-700",
    2: "from-cyan-600 to-cyan-700",
    3: "from-orange-600 to-orange-700",
    4: "from-red-600 to-red-700",
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-brand-accent mb-12">
          Votre Aventure
        </h1>

        {!selectedTheme ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allThemes.map((theme) => (
              <button
                key={theme}
                onClick={() => handleThemeSelect(theme)}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-brand-accent to-brand-accent/70 p-8 text-left transition-all hover:shadow-xl hover:shadow-brand-accent/30 active:scale-95"
              >
                <div className="absolute inset-0 bg-brand-dark opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative">
                  <h2 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-dark">
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </h2>
                  <p className="text-brand-dark/70 text-sm group-hover:text-brand-dark/80">
                    Explorez les suggestions
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 text-brand-dark/50 group-hover:text-brand-dark transition-colors">
                  <ChevronLeft size={24} className="rotate-180" />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="animate-fadeIn">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-brand-accent hover:text-white transition-colors mb-8 font-semibold"
            >
              <ChevronLeft size={20} />
              Retour aux thèmes
            </button>

            <h2 className="text-3xl font-bold text-brand-accent mb-8">
              {selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)}
            </h2>

            {suggestions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  Aucune suggestion trouvée pour ce thème.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion.suggestion_id}
                    className="bg-brand-mid rounded-lg p-8 border-l-4 border-brand-accent hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-brand-accent mb-2">
                          {suggestion.suggestion_label}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span
                            className={`px-4 py-2 rounded-full font-semibold text-white bg-gradient-to-r ${
                              levelColors[suggestion.suggestion_level]
                            }`}
                          >
                            {levelLabels[suggestion.suggestion_level]}
                          </span>
                          {suggestion.suggestion_theme.map((theme) => (
                            <span
                              key={theme}
                              className="px-3 py-1 bg-brand-dark text-brand-accent rounded-full text-sm"
                            >
                              {theme}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="prose prose-invert max-w-none text-gray-300">
                      <ReactMarkdown>
                        {suggestion.suggestion_description}
                      </ReactMarkdown>
                    </div>
                    {suggestion.suggestion_for_session && (
                      <div className="mt-4 pt-4 border-t border-brand-accent/30">
                        <span className="text-sm text-brand-accent font-semibold">
                          Prêt pour une session
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
