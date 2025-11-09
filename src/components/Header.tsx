import { ShoppingCart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  onCartClick: () => void;
}

export const Header = ({ onCartClick }: HeaderProps) => {
  const { totalItems } = useCart();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background z-50 border-b border-border/50 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('accueil')}>
            <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-heading font-bold text-foreground tracking-tight">
                Ferme Le Prince
              </h1>
              <p className="text-xs text-muted-foreground hidden md:block">Qualité & Fraîcheur</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('accueil')}
              className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-body"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('produits')}
              className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-body"
            >
              Produits
            </button>
            <button
              onClick={() => scrollToSection('a-propos')}
              className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-body"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-body"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative hover:bg-primary/10 hover:scale-105 transition-all duration-200 rounded-xl h-12 w-12"
            >
              <ShoppingCart className="h-5 w-5 text-foreground/70" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-xs font-bold shadow-sm">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
