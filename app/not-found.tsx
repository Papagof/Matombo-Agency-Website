import Link from "next/link";
import { Button } from "@/frontend/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-serif text-7xl font-semibold text-gold">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold">
        This room isn’t on the floor plan
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you’re looking for has checked out. Let’s get you back to
        somewhere with a view.
      </p>
      <Button asChild variant="gold" className="mt-8">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
