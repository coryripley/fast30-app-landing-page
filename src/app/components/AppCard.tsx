import AppStoreLogo from '../../imports/Text-14-751';
import GooglePlayLogo from '../../imports/Text-14-835';
import { ReactNode } from 'react';

interface AppCardProps {
  logo: ReactNode;
  description: string;
  showAppleAvailable?: boolean; // Optional: shows Apple logo as available (white, no badge)
}

export function AppCard({ logo, description, showAppleAvailable = false }: AppCardProps) {
  return (
    <div className="app-card bg-black rounded-2xl p-6" style={{ height: '240px', display: 'flex', flexDirection: 'column', width: '284px' }}>
      {/* App Card / Header */}
      <div className="app-card-header" style={{ marginBottom: '20px', marginLeft: '15px', height: '63px', display: 'flex', alignItems: 'center' }}>
        {/* Header / Brand – FAST30 Logo Panel */}
        <div style={{ height: '100%', maxWidth: '200px' }}>
          {logo}
        </div>
      </div>
      
      {/* App Card / Body */}
      <div className="app-card-body" style={{ marginBottom: 'auto' }}>
        {/* Body / Description */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#959595' }}>
          {description}
        </p>
      </div>
      
      {/* App Card / Store Row (Horizontal) */}
      <div className="app-card-store-row" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '8px' }}>
        {/* Store / Apple */}
        <div className="app-card-store-apple" style={{ position: 'relative', width: '97px' }}>
          {/* Logo / Apple App Store */}
          <div style={{ opacity: showAppleAvailable ? 1 : 0.5 }}>
            <AppStoreLogo />
          </div>
          {/* Overlay / Coming Soon (Apple) */}
          {!showAppleAvailable && (
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#F4EF1A', 
              color: 'black', 
              padding: '2px 8px', 
              borderRadius: '4px', 
              fontSize: '8px', 
              fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              whiteSpace: 'nowrap'
            }}>
              COMING SOON
            </div>
          )}
        </div>
        
        {/* Store / Google */}
        <div className="app-card-store-google" style={{ position: 'relative', width: '99px', marginTop: '-1px' }}>
          {/* Logo / Google Play */}
          <div style={{ opacity: 0.5 }}>
            <GooglePlayLogo />
          </div>
          {/* Overlay / Coming Soon (Google) */}
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#F4EF1A', 
            color: 'black', 
            padding: '2px 8px', 
            borderRadius: '4px', 
            fontSize: '8px', 
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            COMING SOON
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .app-card {
            width: 100% !important;
          }
          .app-card-header {
            margin-left: 35px !important;
          }
          .app-card-body {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          .app-card-store-row {
            margin-top: 3px !important;
            gap: 17px !important;
          }
          .app-card-store-apple {
            width: 106.7px !important;
            transform: scale(1.1);
          }
          .app-card-store-google {
            width: 108.9px !important;
            transform: scale(1.1);
          }
        }
      `}} />
    </div>
  );
}