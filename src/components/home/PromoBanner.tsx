import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <section className="section-spacing container-custom">
      <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground">
        {/* Background decorative elements */}
        <div className="absolute -left-24 -top-24 size-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -right-24 -bottom-24 size-96 rounded-full bg-black/10 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-8">
          <div className="max-w-xl space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Up to 30% Off Selected Premium Products
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Upgrade your setup with our limited-time offers on top-tier electronics and lifestyle accessories.
            </p>
          </div>
          
          <div className="shrink-0">
            <Button size="lg" variant="secondary" className="gap-2 px-8" asChild>
              <Link to="/products?discount=true">
                Shop the Sale
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
