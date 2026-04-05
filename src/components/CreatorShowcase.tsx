import { ArrowRight } from "lucide-react";

export default function CreatorShowcase() {
  return (
    <section className="bg-brand-dark border-t border-brand-mid">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <img
              src="https://hypnosekinky.wordpress.com/wp-content/uploads/2025/02/photo-06-10-2024-20-21-43.jpg?w=769?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              alt="Creator"
              className="w-full h-full rounded-lg object-cover shadow-xl aspect-square"
            />
          </div>

          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-accent mb-6">
              À propos de Pup Asgfed
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Bienvenue dans mon monde d'hypnose kinky!
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Pour enrichir les ateliers et formations hypno-dom, j'ai créé ce
              générateur d'idées pour aider les hypnotiseurs, curieux et autres
              à trouver l'inspiration.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Avec des années d'expérience et beaucoup (trop) de vidéos de
              visualisés, j'ai compilé une collection de suggestions pour vous
              aider à offrir les meilleures sessions possibles à vos
              partenaires.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Mon objectif est de vous fournir des outils pratiques pour faire
              de l'hypnose kinky de qualité. Je souhaite faire des choses qui
              enrichissent votre pratique. J'espère que tu vivras plein de
              choses sympas !
            </p>
            <a
              href="https://www.hypnosekinky.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-accent/80 hover:from-brand-accent/90 hover:to-brand-accent text-brand-dark font-bold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-brand-accent/30"
            >
              Voir plus
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
