import { LayoutGrid, List, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ProductFilters } from "./ProductFilters";

interface ProductToolbarProps {
  productCount: number;
}

export function ProductToolbar({ productCount }: ProductToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center py-4 border-y bg-background z-10 sticky top-16">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        {/* Mobile Filters */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden shrink-0">
              <SlidersHorizontal className="size-4" />
              <span className="sr-only">Filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:w-[350px] overflow-y-auto pt-10">
            <SheetTitle className="mb-6">Filters</SheetTitle>
            <ProductFilters />
          </SheetContent>
        </Sheet>
        
        <div className="relative w-full sm:w-[250px] lg:w-[300px]">
          <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-9 w-full bg-muted/50"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 justify-between sm:justify-end w-full sm:w-auto">
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          Showing <span className="font-medium text-foreground">{productCount}</span> results
        </span>
        
        <div className="flex items-center gap-2">
          <Select defaultValue="featured">
            <SelectTrigger className="w-[140px] sm:w-[180px] bg-muted/50">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
              <SelectItem value="newest">Newest Arrivals</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="hidden sm:flex border rounded-md">
            <Button variant="ghost" size="icon" className="rounded-none rounded-l-md bg-muted">
              <LayoutGrid className="size-4" />
              <span className="sr-only">Grid View</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-none rounded-r-md">
              <List className="size-4" />
              <span className="sr-only">List View</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
