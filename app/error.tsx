"use client";

import { useEffect } from "react";
import { Button } from "@/frontend/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold">
        Something went sideways
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold">
        We hit an unexpected snag
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Our team has been notified. Try again, or head back to the homepage.
      </p>
      <div className="mt-8 flex gap-3">
        <Button onClick={reset} variant="gold">
          Try again
        </Button>
        <Button asChild variant="outline">
          <a href="/">Back to home</a>
        </Button>
      </div>
    </div>
  );
}
