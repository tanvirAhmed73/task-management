import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p>
                    By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do
                    not agree to these terms, please do not use our website.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. User Responsibilities</h2>
                <p>
                    Users are responsible for maintaining the confidentiality of their account and password and for
                    restricting access to their computer. You agree to accept responsibility for all activities that
                    occur under your account or password.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Privacy Policy</h2>
                <p>
                    Your use of our website is also governed by our Privacy Policy. Please review our{' '}
                    <a href="/privacy-policy" className="text-blue-500 hover:underline">
                        Privacy Policy
                    </a>{' '}
                    for more information.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Changes to Terms</h2>
                <p>
                    We reserve the right to modify these Terms and Conditions at any time. It is your responsibility
                    to check for updates to these terms periodically.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Contact Information</h2>
                <p>
                    If you have any questions or concerns about these Terms and Conditions, please contact us at{' '}
                    <a href="mailto:info@example.com" className="text-blue-500 hover:underline">
                        info@example.com
                    </a>
                    .
                </p>
            </section>
        </div>
    );
};

export default TermsAndConditions;
