import { ProductCard } from "./ProductCard";
import eggsImage from "@/assets/eggs-basket.jpg";

const products = [
  {
    id: "eggs-tray",
    name: "Plateau d'œufs de table",
    price: 2200,
    image: eggsImage,
    description: "Œufs frais de nos poules élevées en plein air, riches en nutriments"
  }
];

export const Products = () => {
  return (
    <section id="produits" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary font-body">Produit Vedette</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
            Notre Spécialité
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Des œufs de qualité supérieure, fraîchement récoltés chaque jour. Disponibles en gros et en détail pour répondre à tous vos besoins.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {products.map((product) => (
            <div key={product.id} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-3xl" />
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
