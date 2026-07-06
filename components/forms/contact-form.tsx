"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

import { industryOptions, budgetOptions } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  business: z.string().min(2, "Tell us your property or business name"),
  industry: z.enum(industryOptions, {
    errorMap: () => ({ message: "Select an industry" }),
  }),
  budget: z.enum(budgetOptions, {
    errorMap: () => ({ message: "Select a budget range" }),
  }),
  message: z.string().min(10, "A little more detail helps us prepare"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setServerError(
        "Something went wrong sending your message. Please email us directly."
      );
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h3 className="mt-4 font-serif text-2xl font-semibold">
          Thank you — we’re on it.
        </h3>
        <p className="mt-3 max-w-sm text-muted-foreground">
          We’ve received your details and will come back within one business
          day with where your next 20% of revenue is hiding.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" error={errors.name?.message}>
          <Input
            id="name"
            placeholder="Amara Ndlovu"
            autoComplete="name"
            {...register("name")}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            placeholder="you@yourproperty.com"
            autoComplete="email"
            {...register("email")}
          />
        </Field>
      </div>

      <Field
        label="Property / business name"
        htmlFor="business"
        error={errors.business?.message}
      >
        <Input
          id="business"
          placeholder="The Cedar House"
          autoComplete="organization"
          {...register("business")}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Industry" htmlFor="industry" error={errors.industry?.message}>
          <Controller
            control={control}
            name="industry"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  {industryOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>
        <Field
          label="Monthly budget"
          htmlFor="budget"
          error={errors.budget?.message}
        >
          <Controller
            control={control}
            name="budget"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="budget">
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>
      </div>

      <Field
        label="What are you trying to grow?"
        htmlFor="message"
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          placeholder="We’re a 24-room boutique hotel losing too much to the OTAs and want to grow direct bookings…"
          {...register("message")}
        />
      </Field>

      {serverError && (
        <p className="text-sm text-destructive">{serverError}</p>
      )}

      <Button
        type="submit"
        size="lg"
        variant="gold"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Book a Strategy Call"
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to be contacted about your enquiry. No spam,
        ever.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
