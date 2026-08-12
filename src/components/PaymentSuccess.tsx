import { useEffect, useState } from 'react';

export default function PaymentSuccess() {
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPaid(params.has('session_id'));
  }, []);

  if (!paid) return null;

  return (
    <div
      data-component="src/components/PaymentSuccess.tsx"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    >
      <div className="w-full max-w-md rounded-2xl bg-card p-8 text-center shadow-2xl ring-1 ring-border/20">
        <h2 className="font-display text-2xl font-bold text-foreground">{`You're all set!`}</h2>
        <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">
          Thank you for your purchase — a receipt is on its way to your email. If you have any questions, reach us at hello@velumtattoo.com.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-bold font-body text-xs tracking-[0.25em] uppercase hover:bg-primary/85 transition-colors duration-300"
        >
          Back to Site
        </a>
      </div>
    </div>
  );
}
