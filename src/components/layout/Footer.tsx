import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 pt-16 pb-8 border-t">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand & Description */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              Tech Hub.
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your one-stop destination for premium electronics, fashion, and lifestyle products. We blend modern design with exceptional quality.
            </p>
            <div className="flex items-center gap-4 mt-2 text-sm font-medium">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Shop</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <Link to="/products" className="hover:text-primary transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/products?category=cat-1" className="hover:text-primary transition-colors">Electronics</Link>
              </li>
              <li>
                <Link to="/products?category=cat-2" className="hover:text-primary transition-colors">Clothing</Link>
              </li>
              <li>
                <Link to="/products?category=cat-6" className="hover:text-primary transition-colors">Home & Kitchen</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Track Order</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 mt-0.5 text-primary" />
                <span>123 Innovation Drive, Tech District<br />San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-primary" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-primary" />
                <span>support@techhub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Tech Hub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart className="size-3 text-destructive fill-destructive" /> by TechHub Team
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
