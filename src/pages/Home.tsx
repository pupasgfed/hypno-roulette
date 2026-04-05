import { Link } from "react-router-dom";
import { Sparkles, Compass, Dices } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-accent mb-6">
            Générateur d'Idées
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mon outil pour créer une session complète avec chaque étape clé.
            <i> Y compris une partie kinky</i>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/roulette"
            className="group bg-brand-mid rounded-lg p-8 border border-brand-mid hover:border-brand-accent transition-all hover:shadow-xl hover:shadow-brand-accent/20 cursor-pointer"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-accent/70 rounded-lg mb-6 group-hover:scale-110 transition-transform">
              <Dices size={32} className="text-brand-dark" />
            </div>
            <h2 className="text-2xl font-bold text-brand-accent mb-3">
              La Roulette d'Idées
            </h2>
            <p className="text-gray-300 mb-4">
              Générateur rapide d'une seule suggestion. Tu peux aussi filtrer
              par thème pour obtenir des idées tirées au sort.
            </p>
            <div className="text-brand-accent group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Fais voir une idée
              <span>→</span>
            </div>
          </Link>

          <Link
            to="/session"
            className="group bg-brand-mid rounded-lg p-8 border border-brand-mid hover:border-brand-accent transition-all hover:shadow-xl hover:shadow-brand-accent/20 cursor-pointer"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-accent/70 rounded-lg mb-6 group-hover:scale-110 transition-transform">
              <Sparkles size={32} className="text-brand-dark" />
            </div>
            <h2 className="text-2xl font-bold text-brand-accent mb-3">
              Générer une Session Complète
            </h2>
            <p className="text-gray-300 mb-4">
              Générer des sessions complètes de 9 étapes avec une progression.
              En version SFW et NSFW pour les coquinous.
            </p>
            <div className="text-brand-accent group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Découvrir les idées
              <span>→</span>
            </div>
          </Link>

          <Link
            to="/adventure"
            className="group bg-brand-mid rounded-lg p-8 border border-brand-mid hover:border-brand-accent transition-all hover:shadow-xl hover:shadow-brand-accent/20 cursor-pointer"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-accent/70 rounded-lg mb-6 group-hover:scale-110 transition-transform">
              <Compass size={32} className="text-brand-dark" />
            </div>
            <h2 className="text-2xl font-bold text-brand-accent mb-3">
              Votre Aventure
            </h2>
            <p className="text-gray-300 mb-4">
              Explorer toutes les suggestions organisées par thème. Parfait pour
              découvrir de nouvelles idées en vous amusant.
            </p>
            <div className="text-brand-accent group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Découvrir
              <span>→</span>
            </div>
          </Link>
        </div>

        <div className="mt-20 bg-brand-mid rounded-lg p-12 border border-brand-mid/50">
          <h2 className="text-2xl font-bold text-brand-accent mb-4">
            Comment ça marche ?
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold">•</span>
              <span>
                J'ai fait une sélection avec les meilleures suggestions que j'ai
                pu retrouver dans le web depuis plusieurs années.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold">•</span>
              <span>
                Les niveaux de réceptivité vont de la simple relaxation aux
                hallucinations complètes, puis les suggestions 'plutôt kinky' et
                sexuelles ou érotiques
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold">•</span>
              <span>
                Tu peux aussi filtrer par thème pour trouver exactement ce dont
                tu as besoin
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold">•</span>
              <span>
                Générer des sessions complètes : intéressantes, diversifiées et
                progressives.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
