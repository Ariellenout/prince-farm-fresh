import farmImage from "@/assets/farm-aerial.jpg";

export const About = () => {
  return (
    <section id="a-propos" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              À Propos de Nous
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                Située à <span className="font-semibold text-foreground">Kpataba, commune de Savalou</span> au Bénin, 
                la <span className="font-semibold text-primary">Ferme Agro Pastorale Le Prince</span> est 
                spécialisée dans l'élevage de poules pondeuses.
              </p>
              <p>
                Nous proposons des <span className="font-semibold text-accent">œufs de table frais</span> de 
                qualité supérieure, disponibles en gros et en détail pour répondre aux besoins 
                de tous nos clients.
              </p>
              <p>
                Notre engagement : vous offrir des produits naturels, frais et sains, 
                issus d'un élevage respectueux du bien-être animal.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={farmImage}
                alt="Ferme Agro Pastorale Le Prince"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
