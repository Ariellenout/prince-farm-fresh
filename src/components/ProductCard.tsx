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
    <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground font-body mb-4">
          {description}
        </p>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-heading font-bold text-accent">
            {price.toLocaleString()}
          </span>
          <span className="text-lg text-muted-foreground font-body">
            FCFA
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold transition-all duration-300"
          size="lg"
        >
          <Plus className="mr-2 h-5 w-5" />
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  );
};
