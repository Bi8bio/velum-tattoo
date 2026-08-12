export default function RefundPolicyPage() {
  return (
    <div data-component="src/pages/RefundPolicyPage.tsx" className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
        <div className="space-y-2">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">Refund Policy</h1>
          <p className="font-body text-sm text-secondary-foreground">Effective Date: January 1, 2025</p>
        </div>

        <div className="prose prose-sm max-w-none text-secondary-foreground space-y-4">
          <p>At Velum Tattoo, we take pride in delivering exceptional custom tattoo work. This Refund Policy outlines our practices regarding deposits, payments, and refunds for all services provided.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8">Deposits</h2>
          <p>All appointments require a non-refundable deposit to secure your booking. The deposit amount will be communicated to you at the time of booking and will be applied toward the final cost of your tattoo. Deposits are non-refundable but may be transferred to a rescheduled appointment if you notify us at least 48 hours before your scheduled time.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8">Cancellations & Rescheduling</h2>
          <p>If you need to cancel or reschedule your appointment, please contact us at least 48 hours in advance. Cancellations made with less than 48 hours notice will result in forfeiture of your deposit. No-shows will forfeit the deposit and may be required to prepay in full for future appointments.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8">Tattoo Services</h2>
          <p>Due to the custom and permanent nature of tattoo work, all completed tattoo services are non-refundable. If you have any concerns about your tattoo, please contact us within 7 days of your appointment so we can evaluate the work and discuss any necessary touch-ups.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8">Merchandise & Gift Cards</h2>
          <p>Unused and unopened merchandise may be returned within 14 days of purchase with a valid receipt. Gift cards are non-refundable and cannot be redeemed for cash.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8">Contact</h2>
          <p>For any questions regarding this Refund Policy, please contact us at hello@velumtattoo.com or call 740-708-5008.</p>
        </div>
      </div>
    </div>
  );
}
