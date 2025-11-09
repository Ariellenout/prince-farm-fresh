import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ferme Le Prince
            </h3>
            <p className="font-body text-primary-foreground/90">
              Votre source de confiance pour des œufs frais et de qualité au Bénin.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-heading font-semibold mb-4">Contact</h4>
            <div className="space-y-3 font-body">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Kpataba, Savalou – Bénin</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+2290197480694" className="hover:text-accent transition-colors">
                  +229 01 97 48 06 94
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:dupingo@yahoo.fr" className="hover:text-accent transition-colors">
                  dupingo@yahoo.fr
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-heading font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-accent p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-accent p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center font-body text-sm">
          <p className="text-primary-foreground/80">
            © {new Date().getFullYear()} Ferme Agro Pastorale Le Prince. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
