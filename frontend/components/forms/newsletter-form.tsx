"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, Loader2 } from "lucide-react";

import { Button } from "@/frontend/components/ui/button";
import { Input } from "@/frontend/components/ui/input";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
});

type FormValues = z.infer<typeof schema>;

export function NewsletterForm() {
  const [done, setDone] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setServerError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
      reset();
      setTimeout(() => setDone(false), 4000);
    } catch {
      setServerError("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          id="newsletter-email"
          type="email"
          placeholder="you@yourproperty.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        <Button
          type="submit"
          variant="gold"
          disabled={isSubmitting}
          className="shrink-0"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : done ? (
            <Check className="h-4 w-4" />
          ) : (
            <>
              Subscribe <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      {errors.email && (
        <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>
      )}
      {serverError && (
        <p className="mt-2 text-sm text-destructive">{serverError}</p>
      )}
      {done && (
        <p className="mt-2 text-sm text-primary">
          You’re in. Watch your inbox for hospitality growth playbooks.
        </p>
      )}
    </form>
  );
}
