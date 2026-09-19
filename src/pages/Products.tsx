import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductFilters } from "@/components/product/ProductFilters";
import { ProductToolbar } from "@/components/product/ProductToolbar";
import { products } from "@/data/products";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function Products() {
  // For the MVP, we just use the static products data
  const displayedProducts = products;

  return (
    <div className="container-custom py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="size-4 mx-2" />
        <span className="text-foreground font-medium">Products</span>
      </nav>

      {/* Page Header */}
      <div className="mb-8 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">All Products</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Explore our complete collection of premium products. Find exactly what you're looking for using our filters.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Desktop Filters Sidebar */}
        <aside className="hidden lg:block w-[280px] shrink-0 sticky top-36">
          <ProductFilters />
        </aside>

        {/* Main Content */}
        <div className="flex-1 w-full flex flex-col min-w-0">
          <ProductToolbar productCount={displayedProducts.length} />
          
          <div className="py-8">
            <ProductGrid products={displayedProducts} />
          </div>

          {/* Pagination */}
          <div className="py-8 border-t mt-auto">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="opacity-50 pointer-events-none" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
