import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.priceAfterDiscount
    ? Math.round(((product.price - product.priceAfterDiscount) / product.price) * 100)
    : 0;

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      toast.success("Added to wishlist");
    } else {
      toast.info("Removed from wishlist");
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group relative flex flex-col rounded-2xl bg-card border shadow-sm transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {discount > 0 && (
          <Badge variant="destructive" className="px-2 py-0.5 font-semibold">
            {discount}% OFF
          </Badge>
        )}
        {product.quantity < 10 && product.quantity > 0 && (
          <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400">
            Low Stock
          </Badge>
        )}
        {product.quantity === 0 && (
          <Badge variant="secondary" className="bg-muted text-muted-foreground">
            Out of Stock
          </Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleWishlist}
        className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground shadow-sm transition-colors hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart className={`size-4 ${isWishlisted ? "fill-destructive text-destructive" : ""}`} />
      </button>

      {/* Image Gallery */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-muted/20">
        <img
          src={product.images[0]}
          alt={product.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isHovered && product.images.length > 1 ? "opacity-0" : "opacity-100"
          }`}
        />
        {product.images.length > 1 && (
          <img
            src={product.images[1]}
            alt={`${product.title} alternate view`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1 text-xs font-medium text-muted-foreground">
          {product.brand.title}
        </div>
        
        <h3 className="line-clamp-2 font-medium leading-tight text-foreground group-hover:text-primary transition-colors flex-1 mb-2">
          {product.title}
        </h3>
        
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center text-amber-500">
            <Star className="size-3.5 fill-current" />
            <span className="ml-1 text-xs font-semibold">{product.ratingsAverage}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.ratingsQuantity})
          </span>
        </div>
        
        <div className="flex items-end justify-between mt-auto pt-2 border-t border-border/50">
          <div className="flex flex-col">
            {product.priceAfterDiscount ? (
              <>
                <span className="text-xs text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-lg font-bold text-foreground">
                  ${product.priceAfterDiscount.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full shadow-sm"
            onClick={handleAddToCart}
            disabled={product.quantity === 0}
            aria-label="Add to cart"
          >
            <ShoppingCart className="size-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
}
