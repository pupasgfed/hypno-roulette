import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-brand-dark border-b border-brand-mid">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div>
          <Link
            to="/"
            className="text-2xl font-bold text-brand-accent hover:opacity-80 transition-opacity"
          >
            Générateur d'Idées
          </Link>
        </div>
        <nav className="flex gap-6">
          <a
            href="https://www.hypnosekinky.com/allmylinks"
            className="text-gray-300 hover:text-brand-accent transition-colors"
          >
            Tous mes liens
          </a>
          <a
            href="https://hypnosekinky.com/rendez-vous"
            className="text-gray-300 hover:text-brand-accent transition-colors"
          >
            Réserver une session
          </a>
          <a
            href="https://www.hypnosekinky.com/pup-asgfed-moderateur-hypnosekinky/"
            className="text-gray-300 hover:text-brand-accent transition-colors"
          >
            À propos
          </a>
        </nav>
      </div>
    </header>
  );
}
