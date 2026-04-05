import { Facebook, Instagram, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-mid mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-brand-accent font-semibold mb-4">Liens</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-brand-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-brand-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-brand-accent font-semibold mb-4">Me suivre</h3>
            <div className="flex gap-4">
              <a href="#facebook" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#instagram" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#twitter" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#email" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-brand-accent font-semibold mb-4">Voir plus d'hypnose kinky</h3>
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
          <p>Générateur d'Idées © 2026 - @pupasgfed</p>
        </div>
      </div>
    </footer>
  );
}
