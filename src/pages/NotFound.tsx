import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { COLORS } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-200 mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          We couldn't find the page you're looking for. The path may have been moved or doesn't exist.
        </p>
        <Link to="/">
          <Button style={{ backgroundColor: COLORS.primary }}>
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}