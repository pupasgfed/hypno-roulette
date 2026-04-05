import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Suggestion } from '../types/index';
import { getSimpleSuggestions, getRandomSuggestion, getAllThemes } from '../utils/suggestionUtils';
import { RotateCw } from 'lucide-react';

export default function SimpleRoulette() {
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null);
  const [shown, setShown] = useState<string[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [allThemes, setAllThemes] = useState<string[]>([]);
  const [hasClicked, setHasClicked] = useState(false);
  const [allowNsfw, setAllowNsfw] = useState(true);

  const levelLabels: Record<number, string> = {
    0: 'RELAXATION',
    1: 'CATALEPSIE-EMOTION',
    2: 'AMNESIE',
    3: 'HALLUCINATION',
    4: 'NSFW 🔥',
  };

  const levelColors: Record<number, string> = {
    0: 'bg-green-900 text-green-200',
    1: 'bg-blue-900 text-blue-200',
    2: 'bg-cyan-900 text-cyan-200',
    3: 'bg-purple-900 text-purple-200',
    4: 'bg-red-900 text-red-200',
  };

  useEffect(() => {
    setAllThemes(getAllThemes());
  }, []);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setHasClicked(true);

    setTimeout(() => {
      const excludeNsfw = !allowNsfw;
      const next = getRandomSuggestion(shown, selectedThemes, excludeNsfw);
      if (next) {
        setSuggestion(next);
        setShown([...shown, next.suggestion_id]);
      }
      setIsSpinning(false);
    }, 800);
  };

  const toggleTheme = (theme: string) => {
    setSelectedThemes(prev =>
      prev.includes(theme)
        ? prev.filter(t => t !== theme)
        : [...prev, theme]
    );
  };

  const buttonText = hasClicked ? 'Une de plus !' : 'Donnez-moi une idée';

  return (
    <div className="min-h-screen bg-brand-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-brand-accent mb-8">La Roulette d'Idées</h1>

        <div className="flex flex-col items-center gap-6 mb-12">
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className={`px-8 py-4 rounded-lg font-bold text-xl transition-all transform ${
              isSpinning ? 'scale-95 opacity-75' : 'hover:scale-105'
            } ${
              isSpinning
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                : 'bg-brand-accent text-brand-dark hover:shadow-lg hover:shadow-brand-accent/50'
            }`}
          >
            <div className="flex items-center gap-2">
              {isSpinning && <RotateCw size={24} className="animate-spin" />}
              {buttonText}
            </div>
          </button>

          <div className="flex items-center gap-3">
            <label htmlFor="nsfw-toggle" className="text-gray-200 font-semibold">NSFW</label>
            <button
              id="nsfw-toggle"
              onClick={() => setAllowNsfw(!allowNsfw)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                allowNsfw ? 'bg-brand-accent' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  allowNsfw ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-gray-400 text-sm">{allowNsfw ? 'ON' : 'OFF'}</span>
          </div>
        </div>

        {suggestion && (
          <div className="bg-brand-mid rounded-lg p-8 animate-fadeIn mb-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-brand-accent mb-4">{suggestion.suggestion_label}</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {suggestion.suggestion_theme.map(theme => (
                  <span
                    key={theme}
                    className="px-3 py-1 bg-brand-dark text-brand-accent rounded-full text-sm"
                  >
                    {theme}
                  </span>
                ))}
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColors[suggestion.suggestion_level]}`}
                >
                  {levelLabels[suggestion.suggestion_level]}
                </span>
              </div>
            </div>
            <div className="prose prose-invert max-w-none text-gray-200">
              <ReactMarkdown>{suggestion.suggestion_description}</ReactMarkdown>
            </div>
          </div>
        )}

        {suggestion && (
          <div className="bg-brand-mid rounded-lg p-6 animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Affinez votre recherche</h2>
            <div className="flex flex-wrap gap-3">
              {allThemes.map(theme => (
                <button
                  key={theme}
                  onClick={() => toggleTheme(theme)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedThemes.includes(theme)
                      ? 'bg-brand-accent text-brand-dark font-semibold'
                      : 'bg-brand-dark text-gray-300 border border-brand-accent hover:border-white'
                  }`}
                >
                  {theme}
                </button>
              ))}
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
