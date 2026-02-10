import { X } from 'lucide-react';
import { useEffect } from 'react';

interface LegalPanelProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy' | 'legal' | 'cookies' | null;
}

export function LegalPanel({ isOpen, onClose, type }: LegalPanelProps) {
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

  const sectionTitleStyle: React.CSSProperties = {
    fontFamily: "'Monument Extended', sans-serif",
    fontSize: '16px',
    color: '#F4EF1A',
    marginBottom: '12px'
  };

  const bodyStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    color: '#CCCCCC',
    lineHeight: '1.6'
  };

  const bodyWithMarginStyle: React.CSSProperties = {
    ...bodyStyle,
    marginBottom: '12px'
  };

  const listStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    color: '#CCCCCC',
    lineHeight: '1.8',
    paddingLeft: '20px',
    listStyleType: 'disc'
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '32px'
  };

  const emailLink = (
    <a
      href="mailto:hello@fast30apps.com"
      style={{ color: '#F4EF1A', textDecoration: 'none' }}
    >
      hello@fast30apps.com
    </a>
  );

  const lastUpdated = (
    <p style={{ ...bodyStyle, marginTop: '40px', color: '#777777', fontSize: '12px' }}>
      Last updated: February 7, 2026
    </p>
  );

  const renderContent = () => {
    switch (type) {
      case 'terms':
        return (
          <>
            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Acceptance Of Terms</h2>
              <p style={bodyStyle}>
                By accessing and using the FAST30™ website, you agree to these Terms of Service. If you do not agree, do not use the website.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Use Of The Website</h2>
              <p style={bodyWithMarginStyle}>
                FAST30™ grants you a personal, non-exclusive, non-transferable, revocable license to access and use the website for personal, non-commercial purposes. You may not:
              </p>
              <ul style={listStyle}>
                <li>Copy, modify, or distribute website content except as permitted by law</li>
                <li>Use the website for unlawful purposes</li>
                <li>Attempt to interfere with the website's operation or security</li>
                <li>Reverse engineer any website code except where legally permitted</li>
              </ul>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Third-Party Links</h2>
              <p style={bodyStyle}>
                The website may include links to third-party sites. FAST30™ is not responsible for third-party content, policies, or practices.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Health And Safety</h2>
              <p style={bodyStyle}>
                FAST30™ provides general fitness and wellness information. It is not medical advice. Consult a qualified healthcare professional before starting any fitness or wellness program. You assume all risks related to your participation.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Disclaimer Of Warranties</h2>
              <p style={bodyStyle}>
                The website and its content are provided "as is" and "as available," without warranties of any kind, whether express or implied.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Limitation Of Liability</h2>
              <p style={bodyStyle}>
                To the fullest extent permitted by law, FAST30™ will not be liable for any indirect, incidental, special, consequential, or exemplary damages arising from your use of (or inability to use) the website.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Changes To These Terms</h2>
              <p style={bodyStyle}>
                We may update these Terms from time to time. Your continued use of the website means you accept the updated Terms.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Contact</h2>
              <p style={bodyStyle}>
                Questions: {emailLink}
              </p>
            </section>

            {lastUpdated}
          </>
        );

      case 'privacy':
        return (
          <>
            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Overview</h2>
              <p style={bodyStyle}>
                This Privacy Policy explains how FAST30™ handles information related to the website.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Information We Collect</h2>
              <ul style={listStyle}>
                <li style={{ marginBottom: '8px' }}><strong>Information you provide voluntarily:</strong> If you contact us (e.g., email), we receive the information you send (such as your name, email address, and message content).</li>
                <li><strong>Basic website data:</strong> Like most websites, our hosting/provider tools may automatically log limited technical data (e.g., device type, browser, approximate location, and pages visited). This is typically used for security and performance.</li>
              </ul>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>How We Use Information</h2>
              <p style={bodyWithMarginStyle}>
                We use information to:
              </p>
              <ul style={listStyle}>
                <li>Respond to inquiries and support requests</li>
                <li>Maintain, secure, and improve the website</li>
                <li>Understand website performance and usage in aggregate</li>
              </ul>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>What We Don't Do</h2>
              <ul style={listStyle}>
                <li>We do not require user accounts for the website</li>
                <li>We do not sell personal information</li>
                <li>We do not knowingly collect personal information from children without appropriate consent</li>
              </ul>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Sharing</h2>
              <p style={bodyStyle}>
                We may share information with service providers who help operate the website (e.g., hosting, security, analytics), only as needed and under appropriate protections.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Data Retention</h2>
              <p style={bodyStyle}>
                We retain contact messages and related correspondence only as long as needed to respond and for legitimate business purposes.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Your Choices</h2>
              <p style={bodyStyle}>
                You can contact us to request access, correction, or deletion of information you provided directly via email.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Contact</h2>
              <p style={bodyStyle}>
                Privacy questions: {emailLink}
              </p>
            </section>

            {lastUpdated}
          </>
        );

      case 'legal':
        return (
          <>
            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>General</h2>
              <p style={bodyStyle}>
                FAST30™ content is provided for informational and educational purposes only and is not medical advice.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Medical</h2>
              <p style={bodyStyle}>
                Always consult a physician or qualified healthcare provider before starting any fitness or wellness program. If you feel unwell, stop and seek medical guidance.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Assumption Of Risk</h2>
              <p style={bodyStyle}>
                Physical activity carries inherent risks. By using FAST30™ content, you voluntarily assume all risks associated with exercise and participation.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Limitation Of Liability</h2>
              <p style={bodyStyle}>
                To the fullest extent permitted by law, FAST30™ is not responsible for any injury, loss, or damages arising from your use of the website or reliance on its content.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Contact</h2>
              <p style={bodyStyle}>
                {emailLink}
              </p>
            </section>

            {lastUpdated}
          </>
        );

      case 'cookies':
        return (
          <>
            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>What Cookies Are</h2>
              <p style={bodyStyle}>
                Cookies are small text files stored on your device by your browser. They help websites function and can provide usage insights.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>How FAST30™ Uses Cookies</h2>
              <p style={bodyWithMarginStyle}>
                FAST30™ may use cookies and similar technologies for:
              </p>
              <ul style={listStyle}>
                <li>Essential functionality (e.g., basic site performance and security)</li>
                <li>Preferences (e.g., remembering cookie choices where applicable)</li>
                <li>Analytics (optional) to understand aggregated website usage and improve the site (if enabled)</li>
              </ul>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>No Ad Targeting</h2>
              <p style={bodyStyle}>
                FAST30™ does not use cookies for interest-based advertising or sell cookie-derived data.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Managing Cookies</h2>
              <p style={bodyStyle}>
                You can control cookies in your browser settings (block, delete, or limit cookies). If you disable cookies, parts of the website may not function as intended.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Updates</h2>
              <p style={bodyStyle}>
                We may update this Cookie Policy from time to time.
              </p>
            </section>

            <section style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Contact</h2>
              <p style={bodyStyle}>
                {emailLink}
              </p>
            </section>

            {lastUpdated}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 999,
          transition: 'opacity 0.3s ease'
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#111111',
          zIndex: 1000,
          overflowY: 'auto',
          padding: '40px',
          animation: 'slideIn 0.3s ease-out'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: '#CCCCCC',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          <X size={24} />
        </button>

        <h1 style={{
          fontFamily: "'Monument Extended', sans-serif",
          fontSize: '28px',
          color: '#FFFFFF',
          marginBottom: '40px',
          whiteSpace: 'pre-line',
          lineHeight: '1.3'
        }}>
          {getTitle()}
        </h1>

        {renderContent()}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}} />
    </>
  );
}