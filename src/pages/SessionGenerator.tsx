import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { SessionItem } from "../types/index";
import { generateSession } from "../utils/suggestionUtils";
import { RefreshCw, Zap } from "lucide-react";

export default function SessionGenerator() {
  const [session, setSession] = useState<SessionItem[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [allowNsfw, setAllowNsfw] = useState(true);

  const handleGenerate = () => {
    if (isGenerating) return;
    setIsGenerating(true);

    setTimeout(() => {
      const excludeNsfw = !allowNsfw;
      const generatedSession = generateSession(null, excludeNsfw);
      setSession(generatedSession);
      setHasGenerated(true);
      setIsGenerating(false);
    }, 600);
  };

  const levelColors: Record<number, string> = {
    0: "bg-green-900 text-green-200",
    1: "bg-blue-900 text-blue-200",
    2: "bg-cyan-900 text-cyan-200",
    3: "bg-purple-900 text-purple-200",
    4: "bg-red-900 text-red-200",
  };

  const levelLabels: Record<number, string> = {
    0: "RELAXATION",
    1: "CATALEPSIE-EMOTION",
    2: "AMNESIE",
    3: "HALLUCINATION",
    4: "NSFW 🔥",
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-brand-accent mb-12">
          Générer une Session Complète
        </h1>

        <div className="flex flex-col items-center gap-6 mb-12">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`px-8 py-4 rounded-lg font-bold text-xl transition-all transform flex items-center gap-2 ${
              isGenerating ? "scale-95 opacity-75" : "hover:scale-105"
            } ${
              isGenerating
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-brand-accent text-brand-dark hover:shadow-lg hover:shadow-brand-accent/50"
            }`}
          >
            {isGenerating && <RefreshCw size={24} className="animate-spin" />}
            Générer une Session
          </button>

          <div className="flex items-center gap-3">
            <label
              htmlFor="nsfw-toggle"
              className="text-gray-200 font-semibold"
            >
              NSFW
            </label>
            <button
              id="nsfw-toggle"
              onClick={() => setAllowNsfw(!allowNsfw)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                allowNsfw ? "bg-brand-accent" : "bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  allowNsfw ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-gray-400 text-sm">
              {allowNsfw ? "ON" : "OFF"}
            </span>
          </div>
        </div>

        {hasGenerated && session.length > 0 && (
          <div className="animate-fadeIn space-y-8">
            <div className="bg-brand-mid rounded-lg p-8">
              <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-2">
                <Zap size={28} />
                Aperçu de la Session
              </h2>
              <div className="space-y-3">
                {session.map((item) => (
                  <div
                    key={item.suggestion_id}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`px-3 py-1 rounded-full font-semibold text-sm flex-shrink-0 ${levelColors[item.suggestion_level]}`}
                    >
                      {levelLabels[item.suggestion_level]}
                    </div>
                    <span className="text-gray-200">
                      {item.suggestion_label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-mid rounded-lg p-8">
              <h2 className="text-2xl font-bold text-brand-accent mb-6">
                Guide Détaillé
              </h2>
              <div className="space-y-8">
                {session.map((item, index) => (
                  <div
                    key={item.suggestion_id}
                    className="border-l-4 border-brand-accent pl-6"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`px-4 py-2 rounded-lg font-bold flex-shrink-0 ${levelColors[item.suggestion_level]}`}
                      >
                        Étape {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brand-accent">
                          {item.suggestion_label}
                        </h3>
                        <div
                          className={`text-sm font-semibold mt-1 ${levelColors[item.suggestion_level]}`}
                        >
                          {levelLabels[item.suggestion_level]}
                        </div>
                      </div>
                    </div>
                    <div className="prose prose-invert max-w-none text-gray-200">
                      <ReactMarkdown>
                        {item.suggestion_description}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleGenerate}
                className="px-8 py-3 bg-brand-accent text-brand-dark rounded-lg font-semibold hover:shadow-lg hover:shadow-brand-accent/50 transition-all"
              >
                Générer une Autre Session
              </button>
            </div>
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
