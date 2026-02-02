import { X } from 'lucide-react';
import { useEffect } from 'react';

interface LegalPanelProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy' | 'legal' | 'cookies' | null;
}

export function LegalPanel({ isOpen, onClose, type }: LegalPanelProps) {
  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  const getTitle = () => {
    switch (type) {
      case 'terms':
        return 'FAST30™ —\nTerms Of Service';
      case 'privacy':
        return 'FAST30™ —\nPrivacy Policy';
      case 'legal':
        return 'FAST30™ —\nLegal Disclaimer';
      case 'cookies':
        return 'FAST30™ —\nCookie Policy';
      default:
        return '';
    }
  };

  const renderContent = () => {
    switch (type) {
      case 'terms':
        return (
          <>
            {/* Legal Section / 01 – Acceptance Of Terms */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Acceptance Of Terms
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                By accessing and using FAST30™, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Legal Section / 02 – Use License */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Use License
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6',
                marginBottom: '12px'
              }}>
                FAST30™ grants you a personal, non-transferable, non-exclusive license to use the website and services in accordance with the terms of this agreement. You may not:
              </p>
              <ul style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.8',
                paddingLeft: '20px',
                listStyleType: 'disc'
              }}>
                <li>Modify or copy the website materials</li>
                <li>Use the materials for commercial purposes</li>
                <li>Attempt to reverse engineer any software on the website</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </section>

            {/* Legal Section / 03 – User Accounts */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                User Accounts
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
            </section>

            {/* Legal Section / 04 – Health And Safety */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Health And Safety
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                FAST30™ provides fitness programs and information. It is not a substitute for professional medical advice. You should consult with a healthcare professional before beginning any fitness program. You assume all risks associated with the use of this website.
              </p>
            </section>

            {/* Legal Section / 05 – Limitation Of Liability */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Limitation Of Liability
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                In no event shall FAST30™ or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website, even if FAST30™ or an authorized representative has been notified of the possibility of such damage.
              </p>
            </section>

            {/* Legal Section / 06 – Modifications */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Modifications
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                FAST30™ may revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these terms of service.
              </p>
            </section>

            {/* Legal Section / 07 – Contact Information */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Contact Information
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                If you have any questions about these Terms of Service, please contact us at hello@fast30apps.com.
              </p>
            </section>
          </>
        );

      case 'privacy':
        return (
          <>
            {/* Legal Section / 01 – Information We Collect */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Information We Collect
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                FAST30™ collects information that you provide directly to us when you create an account, update your profile, or use our services. This may include your name, email address, physical measurements, fitness goals, and workout progress data.
              </p>
            </section>

            {/* Legal Section / 02 – How We Use Your Information */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                How We Use Your Information
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6',
                marginBottom: '12px'
              }}>
                We use the information we collect to provide, maintain, and improve our services, including to:
              </p>
              <ul style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.8',
                paddingLeft: '20px',
                listStyleType: 'disc'
              }}>
                <li>Personalize your workout experience</li>
                <li>Track your progress and achievements</li>
                <li>Send you notifications and reminders</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve our services</li>
              </ul>
            </section>

            {/* Legal Section / 03 – Data Storage And Security */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Data Storage And Security
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and encrypted both in transit and at rest.
              </p>
            </section>

            {/* Legal Section / 04 – Your Rights */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Your Rights
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                You have the right to access, update, or delete your personal information at any time. You can do this through your account settings or by contacting us directly at hello@fast30apps.com.
              </p>
            </section>

            {/* Legal Section / 05 – Third-Party Services */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Third-Party Services
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                FAST30™ may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices of these third parties.
              </p>
            </section>

            {/* Legal Section / 06 – Contact Us */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Contact Us
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                If you have any questions about this Privacy Policy, please contact us at hello@fast30apps.com.
              </p>
            </section>
          </>
        );

      case 'legal':
        return (
          <>
            {/* Legal Section / 01 – General Disclaimer */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                General Disclaimer
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                The information provided by FAST30™ is for general informational purposes only. All fitness programs and exercises are provided "as is" without warranty of any kind. Your use of FAST30™ is at your sole risk.
              </p>
            </section>

            {/* Legal Section / 02 – Medical Disclaimer */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Medical Disclaimer
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                FAST30™ is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider before beginning any fitness program, especially if you have any pre-existing medical conditions or injuries.
              </p>
            </section>

            {/* Legal Section / 03 – Limitation Of Liability */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Limitation Of Liability
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                FAST30™ and its creators shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to injuries, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from your use of the website or any fitness programs provided.
              </p>
            </section>

            {/* Legal Section / 04 – Assumption Of Risk */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Assumption Of Risk
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                By using FAST30™, you acknowledge that physical exercise involves inherent risks including but not limited to muscle strains, sprains, fractures, and in rare cases, more serious injuries. You voluntarily assume all risks associated with participation in any fitness program offered through this website.
              </p>
            </section>

            {/* Legal Section / 05 – Indemnification */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Indemnification
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                You agree to indemnify and hold harmless FAST30™, its creators, affiliates, and partners from any claims, damages, losses, liabilities, and expenses arising from your use of the website or participation in any fitness programs.
              </p>
            </section>

            {/* Legal Section / 06 – Governing Law */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Governing Law
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                This disclaimer shall be governed by and construed in accordance with applicable laws. Any disputes arising from this disclaimer shall be resolved in the appropriate jurisdiction.
              </p>
            </section>

            {/* Legal Section / 07 – Contact Information */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Contact Information
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                If you have any questions about this Legal Disclaimer, please contact us at hello@fast30apps.com.
              </p>
            </section>
          </>
        );

      case 'cookies':
        return (
          <>
            {/* Legal Section / 01 – What Are Cookies */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                What Are Cookies
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our website.
              </p>
            </section>

            {/* Legal Section / 02 – How We Use Cookies */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                How We Use Cookies
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6',
                marginBottom: '12px'
              }}>
                FAST30™ uses cookies for various purposes, including to:
              </p>
              <ul style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.8',
                paddingLeft: '20px',
                listStyleType: 'disc'
              }}>
                <li>Keep you signed in to your account</li>
                <li>Remember your preferences and settings</li>
                <li>Understand how you interact with our website</li>
                <li>Improve our website performance and functionality</li>
                <li>Provide personalized content and recommendations</li>
                <li>Analyze website traffic and usage patterns</li>
              </ul>
            </section>

            {/* Legal Section / 03 – Types Of Cookies We Use */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Types Of Cookies We Use
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6',
                marginBottom: '8px'
              }}>
                <strong style={{ color: '#FFFFFF' }}>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6',
                marginBottom: '8px'
              }}>
                <strong style={{ color: '#FFFFFF' }}>Performance Cookies:</strong> These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us optimize our website.
              </p>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6',
                marginBottom: '8px'
              }}>
                <strong style={{ color: '#FFFFFF' }}>Functional Cookies:</strong> These cookies allow the website to remember choices you make and provide enhanced features and personalized content.
              </p>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                <strong style={{ color: '#FFFFFF' }}>Analytics Cookies:</strong> We use analytics cookies to understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
            </section>

            {/* Legal Section / 04 – Managing Cookies */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Managing Cookies
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. Please note that if you disable cookies, some features of our website may not function properly.
              </p>
            </section>

            {/* Legal Section / 05 – Third-Party Cookies */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Third-Party Cookies
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                In addition to our own cookies, we may use various third-party cookies to report usage statistics, deliver advertisements, and provide enhanced functionality. These third parties have their own privacy policies governing their use of cookies.
              </p>
            </section>

            {/* Legal Section / 06 – Updates To This Policy */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Updates To This Policy
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.
              </p>
            </section>

            {/* Legal Section / 07 – Contact Us */}
            <section style={{ marginBottom: '32px' }}>
              {/* Section / Title */}
              <h2 style={{ 
                fontFamily: 'Monument Extended, sans-serif', 
                fontSize: '16px',
                color: '#F4EF1A',
                marginBottom: '12px'
              }}>
                Contact Us
              </h2>
              {/* Section / Body */}
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                If you have any questions about our use of cookies, please contact us at hello@fast30apps.com.
              </p>
            </section>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Overlay Panel / Legal — Background Dim */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 9998,
          animation: 'fadeIn 0.3s ease-in-out'
        }}
      />

      {/* Legal Panel / Container (Right-Side Slide-In) */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#1A1A1A',
          zIndex: 9999,
          overflowY: 'auto',
          animation: 'slideInRight 0.3s ease-out',
          boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Legal Panel / Header */}
        <div style={{ padding: '60px 48px 0', position: 'relative' }}>
          {/* Header / Close Button (X Icon) */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '32px',
              right: '32px',
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'opacity 0.2s',
              zIndex: 10
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <X size={24} />
          </button>

          {/* Header / Title */}
          <h1 style={{ 
            fontFamily: 'Monument Extended, sans-serif', 
            fontSize: '32px',
            marginBottom: '40px',
            lineHeight: '1.2',
            color: '#FFFFFF',
            whiteSpace: 'pre-line'
          }}>
            {getTitle()}
          </h1>
        </div>

        {/* Legal Panel / Content */}
        <div style={{ 
          padding: '0 48px 60px',
          color: '#FFFFFF'
        }}>
          {renderContent()}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
