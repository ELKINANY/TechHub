import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts(8);

  return (
    <section className="section-spacing container-custom bg-muted/20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="section-heading">Trending Now</h2>
          <p className="section-subheading">
            Our most popular products, handpicked just for you
          </p>
        </div>
        <Link 
          to="/products" 
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          View All Products
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <ProductGrid products={featuredProducts} />
    </section>
  );
}
