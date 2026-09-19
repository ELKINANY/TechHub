import { ProductGrid } from "@/components/product/ProductGrid";
import type { Product } from "@/types/product";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products || products.length === 0) return null;
  
  return (
    <section className="pt-16 pb-8 border-t">
      <h2 className="text-2xl font-bold mb-8 tracking-tight">You Might Also Like</h2>
      <ProductGrid products={products} />
    </section>
  );
}
