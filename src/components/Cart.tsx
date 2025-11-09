import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

interface CartProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Cart = ({ open, onOpenChange }: CartProps) => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) {
      toast.error("Votre panier est vide");
      return;
    }

    const itemsList = items
      .map(item => `${item.quantity} plateau(x) d'œufs`)
      .join(", ");

    const message = `Bonjour 👋, je souhaite acheter ${itemsList}.
Montant total : ${totalPrice.toLocaleString()} FCFA.
Merci de me confirmer la commande 🙏`;

    const whatsappUrl = `https://wa.me/2290197480694?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Redirection vers WhatsApp...");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg bg-background">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2 font-heading text-2xl">
            <ShoppingBag className="h-6 w-6" />
            <span>Votre Panier</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full py-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground font-body">
                Votre panier est vide
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-accent font-body font-bold">
                        {item.price.toLocaleString()} FCFA
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-body font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="h-8 w-8 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <SheetFooter className="border-t border-border pt-6 mt-6">
                <div className="w-full space-y-4">
                  <div className="flex justify-between items-center text-xl font-heading font-bold">
                    <span>Total :</span>
                    <span className="text-accent">
                      {totalPrice.toLocaleString()} FCFA
                    </span>
                  </div>
                  <Button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-body font-semibold text-lg py-6"
                    size="lg"
                  >
                    <svg
                      className="mr-2 h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Payer via WhatsApp
                  </Button>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
