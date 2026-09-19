import { useState } from "react";
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Product } from "@/types/product";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = product.priceAfterDiscount
    ? Math.round(((product.price - product.priceAfterDiscount) / product.price) * 100)
    : 0;

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      toast.success("Added to wishlist");
    } else {
      toast.info("Removed from wishlist");
    }
  };

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product.title} to cart!`);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">
            {product.brand.title}
          </span>
          {product.quantity > 0 && product.quantity < 10 && (
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">
              Only {product.quantity} left
            </Badge>
          )}
          {product.quantity === 0 && (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          {product.title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`size-4 ${i < Math.floor(product.ratingsAverage) ? "fill-current" : "fill-transparent border-amber-500"}`} 
              />
            ))}
          </div>
          <span className="font-medium">{product.ratingsAverage} Rating</span>
          <span className="text-muted-foreground">•</span>
          <a href="#reviews" className="text-muted-foreground hover:text-primary hover:underline">
            {product.ratingsQuantity} Reviews
          </a>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">{product.sold} Sold</span>
        </div>
      </div>

      <Separator />

      {/* Price */}
      <div className="flex items-end gap-4">
        {product.priceAfterDiscount ? (
          <>
            <span className="text-4xl font-bold text-foreground">
              ${product.priceAfterDiscount.toFixed(2)}
            </span>
            <span className="text-xl text-muted-foreground line-through mb-1">
              ${product.price.toFixed(2)}
            </span>
            <Badge variant="destructive" className="mb-2 text-sm px-2 py-1">
              {discount}% OFF
            </Badge>
          </>
        ) : (
          <span className="text-4xl font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
        )}
      </div>

      <p className="text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Color Selection */}
      {product.colors && product.colors.length > 0 && (
        <div className="space-y-4">
          <span className="font-medium">Color</span>
          <div className="flex items-center gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`size-10 rounded-full border-2 transition-all ${
                  selectedColor === color
                    ? "border-primary ring-2 ring-primary/20 ring-offset-2 ring-offset-background scale-110"
                    : "border-transparent shadow-sm hover:scale-105"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 items-center rounded-md border bg-background">
            <Button
              variant="ghost"
              size="icon"
              className="size-12 rounded-none"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1 || product.quantity === 0}
            >
              <Minus className="size-4" />
            </Button>
            <div className="flex w-12 items-center justify-center font-medium text-lg">
              {quantity}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="size-12 rounded-none"
              onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))}
              disabled={quantity >= product.quantity || product.quantity === 0}
            >
              <Plus className="size-4" />
            </Button>
          </div>
          
          <Button 
            size="lg" 
            className="flex-1 h-12 text-base gap-2"
            onClick={handleAddToCart}
            disabled={product.quantity === 0}
          >
            <ShoppingCart className="size-5" />
            Add to Cart
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className={`size-12 p-0 ${isWishlisted ? "text-destructive border-destructive/50 bg-destructive/5 hover:text-destructive hover:bg-destructive/10" : ""}`}
            onClick={handleWishlist}
          >
            <Heart className={`size-5 ${isWishlisted ? "fill-destructive text-destructive" : ""}`} />
            <span className="sr-only">Wishlist</span>
          </Button>
        </div>
        
        <Button 
          size="lg" 
          variant="secondary"
          className="w-full h-12 text-base font-semibold"
          disabled={product.quantity === 0}
        >
          Buy Now
        </Button>
      </div>
      
      {/* Features list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="flex size-8 items-center justify-center rounded-full bg-muted text-foreground">
            🚚
          </div>
          <span>Free shipping on orders over $50</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="flex size-8 items-center justify-center rounded-full bg-muted text-foreground">
            🛡️
          </div>
          <span>Secure checkout</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="flex size-8 items-center justify-center rounded-full bg-muted text-foreground">
            ↩️
          </div>
          <span>30 days free returns</span>
        </div>
      </div>
    </div>
  );
}
