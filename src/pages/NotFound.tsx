import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="rounded-full bg-primary/10 p-6 mb-8">
        <h1 className="text-6xl font-extrabold text-primary">404</h1>
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-4">Page Not Found</h2>
      <p className="text-lg text-muted-foreground max-w-md mb-8">
        Oops! The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
      </p>
      <Button asChild size="lg" className="gap-2">
        <Link to="/">
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}
