import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Cart } from "@/components/Cart";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header onCartClick={() => setCartOpen(true)} />
        <main>
          <Hero />
          <Products />
          <About />
          <Footer />
        </main>
        <Cart open={cartOpen} onOpenChange={setCartOpen} />
      </div>
    </CartProvider>
  );
};

export default Index;
