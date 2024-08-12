import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-[#0c1f4a] min-h-screen text-white">
      {/* Hero Section */}
      <div className="w-full flex justify-center bg-cover bg-center" style={{ height: '400px' }}>
        <div
          className="flex items-center justify-center w-full"
          style={{
            backgroundImage: 'url("/images/background/Slider.jpg")',
          }}
        >
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg font-medium">
              By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your personal information as described herein.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full px-4 py-12">
        <div className="bg-[#070b18] p-8 rounded-md" style={{ marginLeft: '0' }}>
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-sm mb-6">
            Ventures Federal Trading Commission (V-FTC) is committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information when you use our services.
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
            <h3 className="font-semibold">Personal Information</h3>
            <p className="text-sm">
              Registration Information: When you create an account, we collect personal information such as your name, email address, phone number, and other contact details.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Verification Information</h3>
            <p className="text-sm">
              To comply with regulatory requirements, we may collect additional information such as your government-issued identification, date of birth, and social security number.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Financial Information</h3>
            <p className="text-sm">
              Payment Information: We collect payment information such as bank account details, credit card numbers, and transaction history to process your investments and withdrawals.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Usage Information</h3>
            <p className="text-sm">
              Device Information: We collect information about the device you use to access our services, including IP address, browser type, and operating system.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Log Data</h3>
            <p className="text-sm">
              Our servers automatically record information when you access our services, including the pages you visit, the time and date of your visit, and the time spent on those pages.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">How We Use Your Information</h2>
            <h3 className="font-semibold">To Provide and Improve Our Services</h3>
            <p className="text-sm">
              We use your personal and financial information to facilitate your investments, process transactions, and provide customer support. We analyze usage data to improve the functionality and performance of our platform.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">To Comply with Legal Obligations</h3>
            <p className="text-sm">
              We use your information to comply with applicable laws, regulations, and industry standards, including anti-money laundering (AML) and know-your-customer (KYC) requirements.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">For Marketing and Communication</h3>
            <p className="text-sm">
              With your consent, we may use your contact information to send you promotional materials, newsletters, and other communications related to our services.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Sharing Your Information</h2>
            <h3 className="font-semibold">With Third-Party Service Providers</h3>
            <p className="text-sm">
              We may share your information with third-party service providers who assist us in operating our platform, processing transactions, and providing customer support. These providers are required to protect your information and use it only for the purposes specified by V-FTC.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">With Regulatory and Legal Authorities</h3>
            <p className="text-sm">
              We may disclose your information to regulatory and law enforcement authorities if required by law or if we believe it is necessary to protect our rights, property, or the safety of our users.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">With Your Consent</h2>
            <p className="text-sm">
              We will share your personal information with third parties when we have your explicit consent to do so.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Data Security</h2>
            <h3 className="font-semibold">Security Measures</h3>
            <p className="text-sm">
              We implement robust security measures, including encryption, firewalls, and secure socket layer (SSL) technology, to protect your personal and financial information from unauthorized access, disclosure, or misuse.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Access Controls</h2>
            <p className="text-sm">
              Access to your personal information is restricted to authorized personnel who need it to perform their job functions.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Data Retention</h2>
            <p className="text-sm">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Your Rights and Choices</h2>
            <h3 className="font-semibold">Access and Correction</h3>
            <p className="text-sm">
              You have the right to access and correct your personal information. You can update your information through your account settings or by contacting our customer support team.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Deletion</h2>
            <p className="text-sm">
              You have the right to request the deletion of your personal information, subject to certain legal and regulatory requirements.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Marketing Preferences</h2>
            <p className="text-sm">
              You can opt-out of receiving marketing communications from us by following the unsubscribe instructions included in our emails or by updating your preferences in your account settings.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Changes to This Privacy Policy</h2>
            <p className="text-sm">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our platform and, where appropriate, by sending you a notification.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-sm">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at the contact information given below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
