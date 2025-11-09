import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const ProductCard = ({ id, name, price, image, description }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    toast.success("Produit ajouté au panier", {
      description: `${name} a été ajouté à votre panier`
    });
  };

  return (
    <Card className="overflow-hidden border-border/50 bg-card hover:shadow-2xl transition-all duration-500 group relative rounded-3xl">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative overflow-hidden aspect-square md:aspect-auto">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            Produit Frais
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col justify-between p-8 md:p-12">
          <div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 leading-tight">
              {name}
            </h3>
            <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="bg-secondary/50 rounded-2xl p-6 mb-8">
              <p className="text-sm text-muted-foreground font-body mb-2">Prix par plateau</p>
              <div className="flex items-baseline space-x-3">
                <span className="text-5xl font-heading font-bold text-primary">
                  {price.toLocaleString()}
                </span>
                <span className="text-2xl text-muted-foreground font-body">
                  FCFA
                </span>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleAddToCart}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold transition-all duration-300 h-14 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            <Plus className="mr-2 h-6 w-6" />
            Ajouter au panier
          </Button>
        </div>
      </div>
    </Card>
  );
};
