import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

export const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('produits');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
          Ferme Agro Pastorale<br />Le Prince
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 font-body font-light max-w-2xl mx-auto">
          Œufs frais de qualité, directement de notre ferme à votre table
        </p>
        <Button 
          size="lg" 
          onClick={scrollToProducts}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Commander maintenant
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-foreground"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
