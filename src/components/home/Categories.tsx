import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

export function Categories() {
  return (
    <section className="section-spacing container-custom">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="section-heading">Shop by Category</h2>
          <p className="section-subheading">
            Browse our wide selection of products across top categories
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.id}`}
            className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl bg-card p-6 shadow-sm border transition-all hover:shadow-md hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
            
            <img 
              src={category.image} 
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" 
            />
            
            <div className="relative z-20 flex size-14 items-center justify-center rounded-full bg-primary/10 text-3xl group-hover:scale-110 transition-transform duration-300">
              {category.icon}
            </div>
            
            <div className="relative z-20 text-center">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {category.productCount} Products
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
