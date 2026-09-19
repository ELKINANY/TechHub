import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function ProductFilters() {
  return (
    <div className="flex flex-col gap-8">
      {/* Categories Filter */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm uppercase tracking-wider">Categories</h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="cat-all" defaultChecked />
            <label htmlFor="cat-all" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              All Categories
            </label>
          </div>
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={category.id} />
              <label htmlFor={category.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1">
                {category.title}
              </label>
              <span className="text-xs text-muted-foreground">{category.productCount}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Brands Filter */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm uppercase tracking-wider">Brands</h3>
        <div className="flex flex-col gap-3">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox id={brand.id} />
              <label htmlFor={brand.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1">
                {brand.title}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range Filter */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm uppercase tracking-wider">Price Range</h3>
        <Slider
          defaultValue={[0, 1000]}
          max={2000}
          step={10}
          className="mt-6"
        />
        <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
          <span>$0</span>
          <span>$2,000+</span>
        </div>
      </div>

      <Separator />

      {/* Rating Filter */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm uppercase tracking-wider">Rating</h3>
        <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="rating-all" />
            <label htmlFor="rating-all" className="text-sm font-medium leading-none">All Ratings</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4" id="rating-4" />
            <label htmlFor="rating-4" className="text-sm font-medium leading-none">4 Stars & Up</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="rating-3" />
            <label htmlFor="rating-3" className="text-sm font-medium leading-none">3 Stars & Up</label>
          </div>
        </RadioGroup>
      </div>
      
      <Button variant="outline" className="w-full mt-2">
        Clear All Filters
      </Button>
    </div>
  );
}
