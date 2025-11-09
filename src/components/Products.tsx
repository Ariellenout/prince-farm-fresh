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
    <section id="produits" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Nos Produits
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Des œufs de qualité supérieure, disponibles en gros et en détail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
