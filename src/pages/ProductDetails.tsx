import { useParams, Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { getProductById, getRelatedProducts } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, this would fetch from an API
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <div className="container-custom py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The product you are looking for doesn't exist or has been removed.
        </p>
        <Button asChild size="lg">
          <Link to="/products">Return to Products</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="container-custom py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-muted-foreground mb-8 flex-wrap gap-y-2">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="size-4 mx-2 shrink-0" />
        <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
        <ChevronRight className="size-4 mx-2 shrink-0" />
        <Link to={`/products?category=${product.category.id}`} className="hover:text-primary transition-colors whitespace-nowrap">
          {product.category.title}
        </Link>
        <ChevronRight className="size-4 mx-2 shrink-0" />
        <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-xs">{product.title}</span>
      </nav>

      {/* Main Content: Gallery + Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
        <div className="lg:sticky lg:top-24 h-fit">
          <ProductGallery images={product.images} title={product.title} />
        </div>
        <div>
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent mb-8">
            <TabsTrigger 
              value="description" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 text-base"
            >
              Description
            </TabsTrigger>
            <TabsTrigger 
              value="specifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 text-base"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger 
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 text-base flex items-center gap-2"
            >
              Reviews
              <span className="flex items-center justify-center rounded-full bg-muted text-muted-foreground text-xs font-semibold px-2 py-0.5">
                {product.ratingsQuantity}
              </span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="text-muted-foreground leading-relaxed max-w-4xl space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-4">Product Overview</h3>
            <p>{product.description}</p>
            <p>
              Designed with premium materials and attention to detail, this {product.title.toLowerCase()} offers unparalleled quality and performance. Whether you're upgrading your daily essentials or looking for the perfect gift, this product delivers exceptional value.
            </p>
          </TabsContent>
          
          <TabsContent value="specifications">
            <div className="max-w-3xl">
              <h3 className="text-xl font-bold text-foreground mb-6">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex flex-col py-3 border-b">
                  <span className="text-sm text-muted-foreground mb-1">Brand</span>
                  <span className="font-medium text-foreground">{product.brand.title}</span>
                </div>
                <div className="flex flex-col py-3 border-b">
                  <span className="text-sm text-muted-foreground mb-1">Category</span>
                  <span className="font-medium text-foreground">{product.category.title}</span>
                </div>
                <div className="flex flex-col py-3 border-b">
                  <span className="text-sm text-muted-foreground mb-1">Material</span>
                  <span className="font-medium text-foreground">{product.specifications.material}</span>
                </div>
                <div className="flex flex-col py-3 border-b">
                  <span className="text-sm text-muted-foreground mb-1">Recommended Usage</span>
                  <span className="font-medium text-foreground">{product.specifications.usage}</span>
                </div>
                <div className="flex flex-col py-3 border-b">
                  <span className="text-sm text-muted-foreground mb-1">Warranty</span>
                  <span className="font-medium text-foreground">{product.specifications.warranty}</span>
                </div>
                <div className="flex flex-col py-3 border-b">
                  <span className="text-sm text-muted-foreground mb-1">SKU</span>
                  <span className="font-medium text-foreground uppercase">{product.id}</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <div className="max-w-4xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold">{product.ratingsAverage}</div>
                  <div className="flex flex-col">
                    <div className="flex items-center text-amber-500 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`size-4 ${i < Math.floor(product.ratingsAverage) ? "fill-current" : "fill-transparent border-amber-500"}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">Based on {product.ratingsQuantity} reviews</span>
                  </div>
                </div>
                <Button variant="outline">Write a Review</Button>
              </div>
              
              <div className="space-y-8">
                {/* Dummy Review 1 */}
                <div className="border-b pb-8">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold">Alex Johnson</div>
                    <div className="text-sm text-muted-foreground">2 weeks ago</div>
                  </div>
                  <div className="flex items-center text-amber-500 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`size-3.5 ${i < 5 ? "fill-current" : ""}`} />
                    ))}
                  </div>
                  <h4 className="font-medium mb-2">Absolutely fantastic product!</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I've been using this for a couple of weeks now and it has completely exceeded my expectations. The build quality is superb and it looks even better in person than in the photos. Highly recommended!
                  </p>
                </div>
                
                {/* Dummy Review 2 */}
                <div className="border-b pb-8">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold">Sarah Williams</div>
                    <div className="text-sm text-muted-foreground">1 month ago</div>
                  </div>
                  <div className="flex items-center text-amber-500 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`size-3.5 ${i < 4 ? "fill-current" : "fill-transparent border-amber-500"}`} />
                    ))}
                  </div>
                  <h4 className="font-medium mb-2">Great value for the price</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Very happy with my purchase. It does exactly what it's supposed to do and looks great. Only giving 4 stars because the shipping took a bit longer than expected, but the product itself is excellent.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
