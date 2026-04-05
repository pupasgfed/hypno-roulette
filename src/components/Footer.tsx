import { Facebook, Instagram, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-mid mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-brand-accent font-semibold mb-4">Liens</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.hypnosekinky.com/mentions-legales"
                  className="text-gray-400 hover:text-brand-accent transition-colors"
                >
                  Mentions Légales
                </a>
              </li>
              <li>
                <a
                  href="https://www.hypnosekinky.com/about/terms"
                  className="text-gray-400 hover:text-brand-accent transition-colors"
                >
                  Conditions et TGU
                </a>
              </li>
              <li>
                <a
                  href="https://www.hypnosekinky.com/questions-reponses"
                  className="text-gray-400 hover:text-brand-accent transition-colors"
                >
                  FAQ Hypnose
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-brand-accent font-semibold mb-4">Me suivre</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pupasgfed/"
                className="text-gray-400 hover:text-brand-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/pupasgfed"
                className="text-gray-400 hover:text-brand-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.hypnosekinky.com/newsletter"
                className="text-gray-400 hover:text-brand-accent transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-brand-accent font-semibold mb-4">
              Voir plus d'hypnose kinky
            </h3>
            <a
              href="https://www.hypnosekinky.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-accent transition-colors flex items-center gap-2"
            >
              Visiter le site
              <Heart size={16} />
            </a>
          </div>
        </div>
        <div className="border-t border-brand-mid pt-8 text-center text-gray-500 text-sm">
          <p>
            Roulette hypnosekinky © 2026 - @pupasgfed - tous le détails sur
            hypnosekinky.com
          </p>
        </div>
      </div>
    </footer>
  );
}
