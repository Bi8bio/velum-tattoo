export default function PrivacyPolicyPage() {
  return (
    <div data-component="src/pages/PrivacyPolicyPage.tsx" className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
        <div className="space-y-2">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">Privacy Policy</h1>
          <p className="font-body text-sm text-secondary-foreground">Effective Date: January 1, 2025</p>
        </div>

        <div className="prose prose-sm max-w-none text-secondary-foreground space-y-4">
          <p>Velum Tattoo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address when you book an appointment or contact us.</li>
            <li><strong>Payment Information:</strong> Billing details processed securely through our third-party payment processor (Stripe). We do not store full credit card numbers.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, collected through cookies and analytics tools.</li>
          </ul>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Schedule and manage your tattoo appointments.</li>
            <li>Process payments and send transaction confirmations.</li>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Send appointment reminders and studio updates (with your consent).</li>
            <li>Improve our website and services.</li>
          </ul>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8">Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers (such as payment processors and scheduling platforms) solely to deliver our services. These providers are contractually bound to protect your data.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8">Data Security</h2>
          <p>We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8">Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at hello@velumtattoo.com.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8">Contact</h2>
          <p>For any questions about this Privacy Policy, please contact us at hello@velumtattoo.com or call 740-708-5008.</p>
        </div>
      </div>
    </div>
  );
}
