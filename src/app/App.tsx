import Logo from '../imports/Text-4-180';
import PushUpsLogo from '../imports/Text-14-683';
import SitUpsLogo from '../imports/Text-14-1130';
import PullUpsLogo from '../imports/Text-14-1328';
import MeditationLogo from '../imports/Text-14-1406';
import SquatsLogo from '../imports/Text-14-1471';
import BurpeesLogo from '../imports/Text-14-1521';
import PlanksLogo from '../imports/Text-14-1572';
import ToeTouchesLogo from '../imports/Text-14-1636';
import JumpingRopeLogo from '../imports/Text-14-1688';
import FlexibilityLogo from '../imports/Text-14-1867';
import StepsLogo from '../imports/Text-14-1929';
import FullBodyFixLogo from '../imports/Text-14-1989';
import Body500Logo from '../imports/Text-14-2048';
import Daily50Logo from '../imports/Text-14-2106';
import SevenMinWorkoutLogo from '../imports/Text-14-2165';
import AppStoreLogo from '../imports/Text-14-751';
import GooglePlayLogo from '../imports/Text-14-835';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { AppCard } from './components/AppCard';
import { PlaceholderLogo } from './components/PlaceholderLogo';
import { LegalPanel } from './components/LegalPanel';
import { useState } from 'react';
import shannonProfileImg from '../assets/8d6bc8d3467dab4d7b21eb04d9ca035cb37d0467.png';
import craigProfileImg from '../assets/beec4ba6ac4eebd728b995c425b72de9b7d569ed.png';
import mediaDeviceHandHoldingPhone from '../assets/1d2efbdbd9ecd021efcdceb1a3fa35218864604a.png';
import headerBrandLogoPanel from '../assets/6e6517f788f6586e4e8cfba475aa1209d80e5549.png';
import orbitImage01PushUps from '../assets/2f2372360fa8e502ccbd3ce74b18ba9db81ef572.png';
import orbitImage02Meditation from '../assets/f4473e24816bc24a47165d8dda88ccbb9d3bb32a.png';
import orbitImage03SitUps from '../assets/3e8bfed6d9f7b065bb6bc7908687fb142383bf89.png';
import orbitImage04Burpees from '../assets/1ea25f473ed802a50d3a2ed68d8f50ebbd322855.png';
import orbitImage05Planks from '../assets/0a87bff42211bf20bd90beeb0681e37da594dfcc.png';
import orbitImage06Squats from '../assets/9a04fc991d57a12e9f7c4ae40fd368d3305e9fe4.png';
import orbitImage07PullUps from '../assets/90d994aac17188aa2f12214e1a9857d7a43e4ae6.png';
import orbitImage08WallSit from '../assets/5bf5eb35c358b5c4e53dc473b2e68b0fad036b50.png';
import cardMediaStatsPanelIllustration from '../assets/05a30363f67e2ab6cdfc16f1dd6ba51a3609736f.png';
import cardMedia30DayVolumeGraphIllustration from '../assets/f171907334a8837d0db72acd0f3d2654d5875d98.png';
import cardMediaScheduleListUI from '../assets/27d951e38a88e59423a4c3301258e5d413ebfb49.png';
import dualPhonesSingleImage from '../assets/2cbeeaf60a3cf2a5dd0db56d2864803416a69ea5.png';
import mediaPhoneScreen01 from '../assets/6ede07ebb4c683648f7d88247a2ba01697ca0686.png';
import mediaPhoneScreen02 from '../assets/950ddb592533a41add8cd0d4b843694ad700f8af.png';
import mediaPhoneScreen03 from '../assets/400abb481b76b7d01db33c33b49c2c4613906218.png';
import mediaPhoneScreen04 from '../assets/f3dca514d7471d8a858309531834faba342e3c24.png';
import phoneUIMetal from '../assets/f8a3e543ab55df6aea850091f3981d1ba2d8fe30.png';
// Dedicated To Progress section - importing images directly
import dedicatedImage01 from '../assets/5d0add175148321d5c198c9408392c4abc973299.png';
import dedicatedImage02 from '../assets/a1e67c5f897e8872a56eba14ce6f24ea5ac79ac1.png';
import dedicatedImage03 from '../assets/538b8df7fbe764dcea459218c961793ed26d8976.png';

// FAST30 Landing Page - Updated v1.1
export default function App() {
  const [legalPanel, setLegalPanel] = useState<{ isOpen: boolean; type: 'terms' | 'privacy' | 'legal' | 'cookies' | null }>({
    isOpen: false,
    type: null
  });

  const openLegalPanel = (type: 'terms' | 'privacy' | 'legal' | 'cookies') => {
    setLegalPanel({ isOpen: true, type });
  };

  const closeLegalPanel = () => {
    setLegalPanel({ isOpen: false, type: null });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Animation Styles */}
      <style>{`
        body {
          background-color: #000000 !important;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes float3 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        
        @keyframes float4 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-22px);
          }
        }
        
        @keyframes float5 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }
        
        @keyframes float6 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-19px);
          }
        }
        
        @keyframes float7 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-21px);
          }
        }
        
        @keyframes float8 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-23px);
          }
        }
        
        @keyframes breathe {
          0%, 100% {
            transform: translateY(40px) translateX(-5px);
          }
          50% {
            transform: translateY(35px) translateX(-5px);
          }
        }
        
        .float-1 {
          animation: float 6s ease-in-out infinite;
        }
        
        .float-2 {
          animation: float2 5.5s ease-in-out infinite 0.5s;
        }
        
        .float-3 {
          animation: float3 6.5s ease-in-out infinite 1s;
        }
        
        .float-4 {
          animation: float4 5.8s ease-in-out infinite 1.5s;
        }
        
        .float-5 {
          animation: float5 6.2s ease-in-out infinite 0.8s;
        }
        
        .float-6 {
          animation: float6 6.3s ease-in-out infinite 1.2s;
        }
        
        .float-7 {
          animation: float7 6.7s ease-in-out infinite 0.3s;
        }
        
        .float-8 {
          animation: float8 7s ease-in-out infinite 0.7s;
        }
        
        .breathe-phone {
          animation: breathe 4s ease-in-out infinite;
        }

        /* Header / Navigation Mobile Stack */
        @media (max-width: 768px) {
          .nav-container {
            flex-direction: row !important; /* Keep horizontal on mobile */
            align-items: center !important;
            justify-content: space-between !important;
            gap: 12px;
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-top: 24px !important;
            padding-bottom: 20px !important;
            margin-top: 10px !important; /* Space above nav section */
            margin-bottom: 20px !important; /* Space before hero section - increased from 10px to 20px */
          }
          
          .nav-left {
            height: 42.5px !important; /* 85% of original mobile size */
            width: auto !important;
            aspect-ratio: 171.44 / 62.3; /* Maintain logo proportions */
          }
          
          .nav-right button {
            margin-right: 0 !important;
            font-size: 11px !important;
            padding: 8px 16px !important;
            transform: scale(0.8) !important; /* 80% of original size */
          }
        }

        /* Section 1 — Hero (Orbit Media) - Desktop Behavior */
        @media (min-width: 769px) {
          .hero-section {
            overflow: hidden !important;
          }
          
          .hero-container-spacing {
            margin-top: 54px !important; /* Reduced from 64px (mt-16) to 54px */
          }
        }
        
        /* Section 1 — Hero (Orbit Media) - Mobile Behavior */
        /* Rule: Orbit images are removed on mobile */
        @media (max-width: 768px) {
          .hero-orbit-left,
          .hero-orbit-right {
            display: none !important;
          }
          
          .hero-device-glow {
            width: 400px !important;
            height: 400px !important;
            transform: translate(-50%, -50%) translateY(-50px) !important;
          }
          
          .hero-section-container {
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
          
          .hero-header {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          
          .hero-section {
            overflow-x: clip !important;
            overflow-y: visible !important;
          }
        }
      `}</style>
      
      {/* Header / Navigation */}
      <header className="relative z-20">
        {/* Navigation / Container (Horizontal) */}
        <div className="nav-container flex items-center justify-between" style={{ paddingLeft: '132px', paddingRight: '60px', paddingTop: '44px', paddingBottom: '24px', marginTop: '0px' }}>
          {/* Navigation / Left */}
          <div className="nav-left" style={{ height: '63px' }}>
            {/* Navigation / Logo */}
            <Logo />
          </div>
          {/* Navigation / Right */}
          <div className="nav-right">
            {/* Navigation / Primary CTA */}
            <button 
              className="bg-[#F4EF1A] text-black px-5 py-2.5 rounded-lg hover:bg-[#e5e015] transition-colors" 
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', marginRight: '60px' }}
              onClick={() => {
                const element = document.getElementById('app-ecosystem');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Discover all FAST30™ Apps
            </button>
          </div>
        </div>
      </header>
      
      {/* Section 1 — Hero (Orbit Media) */}
      <section className="hero-section relative" style={{ paddingBottom: '0px' }}>
        {/* Hero / Container */}
        <div className="hero-section-container relative px-6 md:px-12 mt-0 hero-container-spacing">
          
          {/* Hero / Header (Stacked) */}
          <div className="hero-header" style={{ position: 'relative', zIndex: 20 }}>
            {/* Header / Eyebrow */}
            <div className="text-center mb-[26px] max-w-3xl mx-auto hero-eyebrow-container">
              <p className="eyebrow-text" style={{ 
                fontFamily: "'Monument Extended', sans-serif", 
                fontSize: '18px', 
                color: '#959595',
                fontWeight: 400,
                marginBottom: '-5px'
              }}>
                Fast, Focused Fitness & Wellness Programs
              </p>
              <style dangerouslySetInnerHTML={{__html: `
                @media (max-width: 768px) {
                  .eyebrow-text { font-size: 14px !important; }
                  .hero-eyebrow-container { max-width: 100% !important; margin-bottom: 21px !important; }
                  .eyebrow-container { margin-bottom: 21px !important; }
                }
              `}} />
            </div>

            {/* Header / Title */}
            <div className="text-center mb-[34px] max-w-3xl mx-auto hero-title-container">
              <h1 className="hero-title" style={{ 
                fontFamily: "'Monument Extended', sans-serif", 
                fontSize: '56px', 
                lineHeight: '1.2', 
                fontWeight: 400, 
                letterSpacing: '0.01em',
                color: '#FFFFFF'
              }}>
                Reach Your Goals In 30 Days!
              </h1>
              <style dangerouslySetInnerHTML={{__html: `
                @media (max-width: 768px) {
                  .hero-title { font-size: 26px !important; }
                  .hero-title-container { max-width: 100% !important; }
                }
              `}} />
            </div>

            {/* Header / Subtext */}
            <div className="text-center max-w-2xl mx-auto mb-[34px] hero-subtext-container">
              <p className="hero-subtext" style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '18px', 
                lineHeight: '28px',
                color: '#959595',
                fontWeight: 400,
                marginTop: '-20px'
              }}>
                A collection of science-backed 30-day fitness & wellness premium apps designed for real, measurable results. One fee. No subscriptions.
              </p>
              <style dangerouslySetInnerHTML={{__html: `
                @media (max-width: 768px) {
                  .hero-subtext { font-size: 14px !important; line-height: 22px !important; }
                  .hero-subtext-container { max-width: 100% !important; }
                }
              `}} />
            </div>
          </div>

          {/* Hero / Media Block */}
          <div className="relative md:mb-0 mb-[-150px]" style={{ width: '100%', margin: '0 auto' }}>
            
            {/* Orbit Images Reference Container */}
            <div className="relative" style={{ maxWidth: '672px', margin: '0 auto', marginBottom: '34px' }}>
              
              {/* Hero / Orbit Column / Left */}
              {/* (top → bottom): 01 Push-Ups, 02 Meditation, 03 Sit-Ups, 04 Burpees */}
              <div className="hero-orbit-left">
                {/* Orbit / Image / 01 – Push-Ups */}
                <div className="absolute float-1" style={{ 
                  width: '220px', 
                  height: '220px', 
                  left: '-250px', 
                  top: '-30px',
                  zIndex: 10
                }}>
                  <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={orbitImage01PushUps} 
                  alt="Push-Ups" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Orbit / Image / 02 – Meditation */}
            <div className="absolute float-2" style={{ 
              width: '220px', 
              height: '220px', 
              left: '-100px', 
              top: '190px',
              zIndex: 10
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={orbitImage02Meditation} 
                  alt="Meditation" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Orbit / Image / 03 – Sit-Ups */}
            <div className="absolute float-3" style={{ 
              width: '220px', 
              height: '220px', 
              left: '-220px', 
              top: '430px',
              zIndex: 10
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={orbitImage03SitUps} 
                  alt="Sit-Ups" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Orbit / Image / 04 – Burpees */}
            <div className="absolute float-4" style={{ 
              width: '220px', 
              height: '220px', 
              left: '-105px', 
              top: '680px',
              zIndex: 10
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={orbitImage04Burpees} 
                  alt="Burpees" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>
            </div>
            </div>
            {/* End Hero / Orbit Column / Left */}

            {/* Hero / Orbit Column / Right */}
            {/* (top → bottom): 05 Planks, 06 Squats, 07 Pull-Ups, 08 Wall Sit */}
            <div className="hero-orbit-right">
              {/* Orbit / Image / 05 – Planks */}
              <div className="absolute float-5" style={{ 
              width: '220px', 
              height: '220px', 
              right: '-250px', 
              top: '-30px',
              zIndex: 10
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={orbitImage05Planks} 
                  alt="Planks" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>
            </div>

              {/* Orbit / Image / 06 – Squats */}
              <div className="absolute float-6" style={{ 
              width: '220px', 
              height: '220px', 
              right: '-85px', 
              top: '190px',
              zIndex: 10
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={orbitImage06Squats} 
                  alt="Squats" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>
            </div>

              {/* Orbit / Image / 07 – Pull-Ups */}
              <div className="absolute float-7" style={{ 
              width: '220px', 
              height: '220px', 
              right: '-220px', 
              top: '430px',
              zIndex: 10
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={orbitImage07PullUps} 
                  alt="Pull-Ups" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>
            </div>

              {/* Orbit / Image / 08 – Wall Sit */}
              <div className="absolute float-8" style={{ 
              width: '220px', 
              height: '220px', 
              right: '-155px', 
              top: '680px',
              zIndex: 10
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={orbitImage08WallSit} 
                  alt="Wall Sit" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>
              </div>
              </div>
              {/* End Hero / Orbit Column / Right */}
              
            </div>
            {/* End Orbit Images Reference Container */}

            {/* Hero / Device */}
            <div className="hero-device-wrapper">
              <style dangerouslySetInnerHTML={{__html: `
                .hero-device-wrapper { 
                  position: relative; 
                  margin: 0 auto; 
                }.hero-device {
  position: relative;
}

.hero-device-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 960px;
  height: 960px;
  transform: translate(-50%, -50%) translateX(-250px);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.08) 40%,
    rgba(255, 255, 255, 0) 70%
  );
  pointer-events: none;
  z-index: 0;
}

                @media (min-width: 769px) {
                  .hero-device-wrapper {
                    width: 100%; 
                    max-width: 672px;
                    height: 960px;
                    overflow: visible;
                  }
                }
                @media (max-width: 768px) {
                  .hero-device-wrapper { 
                    width: 100vw !important;
                    max-width: 100vw !important;
                    height: auto !important; 
                    overflow: visible !important;
                    margin: 0 !important;
                    padding: 0 !important;
                  }
                }
              `}} />
              <div className="hero-device" style={{ position: 'relative', margin: '0 auto', zIndex: 5, transformOrigin: 'top center' }}>
                <style dangerouslySetInnerHTML={{__html: `
                  .hero-device { 
                    width: 100%;
                    height: auto;
                  }
                  @media (min-width: 769px) {
                    .hero-device {
                      transform: translateY(-140px);
                      width: 1200px;
                      height: 960px;
                    }
                  }
                  @media (max-width: 768px) {
                    .hero-device { 
                      display: none !important;
                    }
                  }
                `}} />
                {/* Device Glow / Background Gradient */}
                <div className="hero-device-glow" />

                  <style>{`
                    @media (max-width: 768px) {
                      .hero-device-glow {
                        position: absolute !important;
                        top: calc(35vh - 90px - 35vh + 12.5px) !important;
                        left: 50% !important;
                        transform: translateX(-50%) !important;
                        width: calc(85vw + 40px) !important;
                        height: calc(70vh - 25px) !important;
                        background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0) 70%) !important;
                        z-index: 0 !important;
                      }
                    }
                  `}</style>
                {/* Media / Device / Hand Holding Phone */}
                {/* Device Screen / Welcome Back – Progress Dashboard */}
                <div className="flex justify-center items-center hero-phone-wrapper" style={{ zIndex: 10 }}>
                  <div
                    id="hero-phone-final"
                    className="heroPhone"
                    style={{
                      backgroundImage: `url(${mediaDeviceHandHoldingPhone})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                    aria-label="FAST30 App Dashboard"
                  />
                  <style>{`
                    .heroPhone {
                      width: 1320px;
                      height: 1056px;
                    }
                    @media (min-width: 769px) {
                      .hero-phone-wrapper {
                        margin-top: 0;
                        position: relative;
                        display: flex;
                        justify-content: center;
                        overflow: visible;
                      }
                      .heroPhone {
                        margin-left: -480px;
                        margin-top: -70px;
                      }
                    }
                    @media (max-width: 768px) {
                      .hero-phone-wrapper {
                        position: relative;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                      }
                      .heroPhone {
                        width: 90vw;
                        height: 80vh;
                        position: relative;
                      }
                    }
                  `}</style>
                </div>
              </div>
            </div>

            {/* Simple Mobile Phone - hidden on desktop */}
            <div className="mobile-phone-simple" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              {/* Mobile Glow */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: '100%',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0) 70%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
              <img 
                src={mediaDeviceHandHoldingPhone}
                alt="FAST30 App"
                style={{
                  width: '194vw',
                  maxWidth: 'none',
                  height: 'auto',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1,
                  marginLeft: 'calc(15vw - 10px)',
                  marginTop: '-40px',
                }}
              />
              <style>{`
                .mobile-phone-simple {
                  display: none !important;
                }
                @media (max-width: 768px) {
                  .mobile-phone-simple {
                    display: flex !important;
                    width: 100%;
                    padding: 10px 0;
                    overflow: hidden;
                  }
                }
              `}</style>
            </div>

          </div>
          {/* End Hero / Media Block */}

        </div>
        {/* End Hero / Container */}
      </section>
      {/* End Section 1 — Hero (Orbit Media) */}

      {/* Section 2 — Feature Overview (3-Up Cards) */}
      <section className="section-card-feature-overview pt-[20px] md:pt-[80px] pb-[60px]">
        {/* Section Card / Feature Overview */}
        <div className="feature-overview-container max-w-7xl mx-auto">
          {/* Feature Overview / Container */}
          <div className="rounded-3xl p-[30px] md:p-[60px]" style={{ backgroundColor: '#1a1a1a' }}>
            
            {/* Feature Overview / Header (Horizontal → Stacked on Mobile) */}
            <div className="feature-overview-header grid grid-cols-1 lg:grid-cols-3 gap-[22px] md:gap-8 mb-[35px] md:mb-12">
              {/* Header / Title (Left) - Spans 2 columns */}
              <div className="header-title lg:col-span-2 mx-[15px] md:mx-0 md:ml-[45px]">
                <h2 className="text-[28px] md:text-[38px]" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  lineHeight: '1.2', 
                  fontWeight: 400
                }}>
                  Everything You Need. Nothing You Don't.
                </h2>
              </div>
              
              {/* Header / Subtext (Right) */}
              <div className="header-subtext flex items-start lg:items-center mx-[15px] md:mx-0">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '1.7', color: '#959595' }}>
                  <span style={{ color: '#F4EF1A', fontWeight: 600 }}>Function over features.</span> FAST30™ apps combine thoughtful structure, intuitive design, and science-backed training into focused daily programs.
                </p>
              </div>
            </div>

            {/* Feature Overview / Columns Row (3 Columns) */}
            <div className="feature-overview-columns-row grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Feature Column / 01 – A Tested 30-Day Fitness Framework */}
              <div className="feature-column-01">
                {/* Feature Card / 01 */}
                <div className="feature-card-01 bg-black rounded-2xl p-6 pb-8 md:min-h-[416px]">
                  {/* Card / Title */}
                  <h3 className="card-title ml-5" style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 700, lineHeight: '1.3', color: '#959595', marginTop: '20px', marginBottom: '34px' }}>
                    A Tested 30-Day<br />
                    Fitness Framework
                  </h3>
                  {/* Card / Media – Stats Panel Illustration */}
                  <div className="card-media overflow-hidden">
                    <img src={cardMediaStatsPanelIllustration} alt="Stats Panel - Total Pushups, Calories, Current Streak" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </div>
                {/* Supporting Copy / 01 – Framework Paragraph */}
                <p className="supporting-copy-01 px-10 mt-6 mb-[22px] md:mb-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.6', color: '#959595' }}>
                  FAST30™ programs intentionally increase progress for every routine at a gradual pace, ensuring consistency, momentum, and confidence safely.
                </p>
              </div>

              {/* Feature Column / 02 – Science-Backed Routines */}
              <div className="feature-column-02">
                {/* Feature Card / 02 */}
                <div className="feature-card-02 bg-black rounded-2xl p-6 pb-8 md:min-h-[416px]">
                  {/* Card / Title */}
                  <h3 className="card-title ml-5" style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 700, lineHeight: '1.3', color: '#959595', marginTop: '20px', marginBottom: '34px' }}>
                    Science-Backed<br />
                    Progressive Routines
                  </h3>
                  {/* Card / Media – 30-Day Volume Graph Illustration */}
                  <div className="card-media overflow-hidden">
                    <img src={cardMedia30DayVolumeGraphIllustration} alt="30-Day Volume Graph - Day 1 to Day 30 workout/rest progression" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </div>
                {/* Supporting Copy / 02 – Progression Paragraph */}
                <p className="supporting-copy-02 px-10 mt-6 mb-[22px] md:mb-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.6', color: '#959595' }}>
                  Structured sets steadily increase volume over 30 days, allowing your body to adapt safely while building measurable strength and endurance.
                </p>
              </div>

              {/* Feature Column / 03 – Designed to Keep You Moving Forward */}
              <div className="feature-column-03">
                {/* Feature Card / 03 */}
                <div className="feature-card-03 bg-black rounded-2xl p-6 pb-8 flex flex-col md:min-h-[416px]">
                  {/* Card / Title */}
                  <h3 className="card-title ml-5" style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 700, lineHeight: '1.3', color: '#959595', marginTop: '20px', marginBottom: '34px' }}>
                    Designed to Keep<br />
                    You Moving Forward
                  </h3>
                  {/* Card / Body Text + Media */}
                  <div className="flex-1 flex flex-col justify-end">
                    {/* Card / Body Text - Live Text Above Schedule List */}
                    <p className="card-body-text ml-2" style={{ fontFamily: "'Monument Extended', sans-serif", fontSize: '16px', fontWeight: 400, color: '#FFFFFF' }}>
                      Goal: 100 Push-Ups
                    </p>
                    {/* Card / Media – Schedule List UI */}
                    <div className="card-media overflow-hidden">
                      <img src={cardMediaScheduleListUI} alt="Schedule list showing today's and upcoming workout sessions" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  </div>
                </div>
                {/* Supporting Copy / 03 – Motivation Paragraph */}
                <p className="supporting-copy-03 px-10 mt-6 mb-[22px] md:mb-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.6', color: '#959595' }}>
                  Real-time stats and achievements make progress visible and motivating. You'll see where you started, how far you've come, and what comes next.
                </p>
              </div>

            </div>
            {/* End Feature Overview / Columns Row */}

          </div>
        </div>
      </section>
      {/* End Section 2 — Feature Overview (3-Up Cards) */}

      {/* Section 3 — Feature Pillars (Focused. Science-Backed. Dual-Phone) */}
      <section style={{ paddingBottom: '60px' }}>
        {/* Section Card / Feature Pillars */}
        <div className="max-w-7xl mx-auto">
          {/* Feature Pillars / Container */}
          <div className="pillar-section-container rounded-3xl p-[30px] md:p-[60px]" style={{ backgroundColor: '#1a1a1a', position: 'relative', overflow: 'hidden' }}>
            
            {/* Feature Pillars / Header (Stacked) */}
            <div className="text-center pillar-header-block" style={{ marginBottom: '15px' }}>
              
              {/* Header / Eyebrow */}
              <div className="text-center mb-[26px] pillar-eyebrow-container">
                <p className="pillar-eyebrow-text" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  fontSize: '18px', 
                  color: '#959595',
                  fontWeight: 400,
                  marginBottom: '-5px'
                }}>
                  World-Class. Crafted Experience.
                </p>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .pillar-eyebrow-text { font-size: 14px !important; }
                    .pillar-eyebrow-container { max-width: 100% !important; margin-bottom: 21px !important; margin-top: 10px !important; }
                  }
                `}} />
              </div>
              
              {/* Header / Title */}
              <div className="text-center mb-[34px] pillar-title-container">
                <h1 className="pillar-title" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  fontSize: '56px', 
                  lineHeight: '1.2', 
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#FFFFFF'
                }}>
                  Focused. Science-Backed.
                </h1>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .pillar-title { font-size: 26px !important; }
                    .pillar-title-container { max-width: 100% !important; }
                  }
                `}} />
              </div>
              
              {/* Header / Subtext */}
              <div className="text-center max-w-3xl mx-auto mb-[34px] pillar-subtext-container">
                <p className="pillar-subtext" style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '18px', 
                  lineHeight: '28px',
                  color: '#959595',
                  fontWeight: 400,
                  marginTop: '-20px'
                }}>
                  Every decision — from training structure to interface design — is intentionally crafted to keep you consistent, motivated, and moving forward for 30 focused days and beyond.
                </p>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .pillar-subtext { font-size: 14px !important; line-height: 22px !important; }
                    .pillar-subtext-container { max-width: 100% !important; margin-bottom: 24px !important; }
                    .pillar-header-block { margin-top: 20px !important; }
                  }
                  @media (max-width: 1023px) {
                    .pillar-header-block { margin-bottom: 5px !important; }
                  }
                  @media (min-width: 1024px) {
                    .pillar-header-block { margin-bottom: 5px !important; }
                  }
                `}} />
              </div>
            </div>

            {/* Feature Pillars / Content Block (Three-Column Layout) */}
            <div className="pillar-content-grid grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Feature Pillars / Left Column */}
              <div className="pillar-left-column lg:col-span-3 space-y-6 flex flex-col items-end">
                
                {/* Pillar Card / 01 – Progressive Training */}
                <div className="pillar-card-01 bg-black rounded-2xl p-6" style={{ width: '284px', height: '152px' }}>
                  {/* Card / Title */}
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#F4EF1A', marginBottom: '8px', lineHeight: '22px' }}>
                    Progressive Training
                  </h3>
                  {/* Card / Body */}
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '22px', color: '#959595' }}>
                    The FAST30™ system blends structure, design, and science into focused 30-day fitness training.
                  </p>
                </div>
                
                {/* Pillar Card / 02 – Daily Scheduling */}
                <div className="bg-black rounded-2xl p-6" style={{ width: '284px', height: '152px' }}>
                  {/* Card / Title */}
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#F4EF1A', marginBottom: '8px', lineHeight: '22px' }}>
                    Daily Scheduling
                  </h3>
                  {/* Card / Body */}
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '22px', color: '#959595' }}>
                    Clear monthly, weekly, and daily workouts eliminate decision fatigue and keep training predictable.
                  </p>
                </div>

                {/* Pillar Card / 03 – Smart Pacing */}
                <div className="bg-black rounded-2xl p-6" style={{ width: '284px', height: '152px' }}>
                  {/* Card / Title */}
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#F4EF1A', marginBottom: '8px', lineHeight: '22px' }}>
                    Smart Pacing
                  </h3>
                  {/* Card / Body */}
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '22px', color: '#959595' }}>
                    Built-in warm-ups, rest timing, and rep progressions ensure workouts stay challenging but achievable.
                  </p>
                </div>
              </div>

              {/* Feature Pillars / Center Device Composition */}
              <div className="pillar-center-device lg:col-span-6 flex items-center justify-center relative">
                
                {/* Device Glow / Background Gradient */}
                <div 
                  className="absolute pillarsGlow" 
                  style={{ 
                    top: '15%',
                    left: '15%',
                    width: '70%',
                    height: '70%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 60%, rgba(255, 255, 255, 0) 85%)',
                    pointerEvents: 'none',
                    zIndex: 0
                  }}
                />
                
                {/* Media / Dual Phones – Single Image */}
                <div 
                  className="pillarsPhone" 
                  style={{ 
                    width: '550px', 
                    height: '630px',
                    display: 'block', 
                    position: 'relative', 
                    zIndex: 10,
                    margin: 0,
                    padding: 0,
                    backgroundImage: `url(${dualPhonesSingleImage})`,
                    backgroundSize: '130%',
                    backgroundPosition: 'center calc(50% + 60px)',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .pillarsPhone { 
                      width: 100% !important; 
                      height: 300px !important;
                      background-size: 170% !important;
                      background-position: center center !important;
                    }
                  }
                `}} />
              </div>

              {/* Feature Pillars / Right Column */}
              <div className="pillar-right-column lg:col-span-3 space-y-6 flex flex-col items-start">
                
                {/* Pillar Card / 04 – Real-Time Tracking */}
                <div className="bg-black rounded-2xl p-6" style={{ width: '284px', height: '152px' }}>
                  {/* Card / Title */}
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#F4EF1A', marginBottom: '8px', lineHeight: '22px' }}>
                    Real-Time Tracking
                  </h3>
                  {/* Card / Body */}
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '22px', color: '#959595' }}>
                    Routine stats, repetition totals, and session progress keep effort visible and motivation high.
                  </p>
                </div>

                {/* Pillar Card / 05 – Achievement Rewards */}
                <div className="bg-black rounded-2xl p-6" style={{ width: '284px', height: '152px' }}>
                  {/* Card / Title */}
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#F4EF1A', marginBottom: '8px', lineHeight: '22px' }}>
                    Achievement Rewards
                  </h3>
                  {/* Card / Body */}
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '22px', color: '#959595' }}>
                    Unlock and document weekly milestones that celebrate progress and reward commitment.
                  </p>
                </div>

                {/* Pillar Card / 06 – Notification Motivation */}
                <div className="bg-black rounded-2xl p-6" style={{ width: '284px', height: '152px' }}>
                  {/* Card / Title */}
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#F4EF1A', marginBottom: '8px', lineHeight: '22px' }}>
                    Notification Motivation
                  </h3>
                  {/* Card / Body */}
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '22px', color: '#959595' }}>
                    Set your own reminders and receive built-in daily motivation aligned with your health goals.
                  </p>
                </div>
              </div>
              
            </div>
            
            {/* Mobile Responsive Styles for Pillar Section */}
            <style dangerouslySetInnerHTML={{__html: `
              @media (max-width: 768px) {
                /* Mobile Stack Order - phone BEFORE all cards */
                .pillar-content-grid {
                  display: flex !important;
                  flex-direction: column !important;
                }
                
                /* Center device/phone comes FIRST (order: 0) - Match hero phone size */
                .pillar-center-device {
                  order: 0 !important;
                  margin-bottom: 20px !important;
                  height: auto !important;
                  width: 100% !important;
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                }
                
                /* Left column cards come SECOND (order: 1) - cards 01-03 */
                .pillar-left-column {
                  order: 1 !important;
                  width: 100% !important;
                  align-items: center !important;
                  gap: 0 !important;
                  margin-bottom: 0 !important;
                }
                
                /* Right column cards come THIRD (order: 2) - cards 04-06 */
                .pillar-right-column {
                  order: 2 !important;
                  width: 100% !important;
                  align-items: center !important;
                  gap: 0 !important;
                }
                
                /* All pillar cards full width with consistent spacing */
                .pillar-left-column > div,
                .pillar-right-column > div {
                  width: 100% !important;
                  max-width: 100% !important;
                  margin-bottom: 16px !important;
                }
                
                /* Adjust phone container for mobile - match hero sizing */
                .pillarsPhone {
                  width: 100% !important;
                  max-width: 100% !important;
                  height: 400px !important;
                  background-size: 130% !important;
                  background-position: center calc(50% + 20px) !important;
                  background-repeat: no-repeat !important;
                  margin: 0 auto !important;
                  position: relative !important;
                  display: block !important;
                }
              }
            `}} />
          </div>
        </div>
      </section>
      {/* End Section 3 — Feature Pillars (Focused. Science-Backed. Dual-Phone) */}

      {/* Section 4 — Reviews / Testimonials */}
      <section style={{ paddingBottom: '60px' }}>
        {/* Section Card / Reviews */}
        <div className="max-w-7xl mx-auto">
          {/* Reviews / Container */}
          <div className="reviews-container rounded-3xl p-[30px] md:p-[60px]" style={{ backgroundColor: '#1a1a1a' }}>
            {/* Two-Column Layout: Left = Section Header, Right = Testimonial Cards (2-Up Horizontal) */}
            <div className="reviews-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Reviews / Header (Left Column) */}
              <div className="reviews-header lg:col-span-1">
                {/* Header / Title */}
                <h1 className="reviews-title" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  fontSize: '38px', 
                  lineHeight: '1.2', 
                  fontWeight: 400,
                  marginLeft: '-2px',
                  width: 'calc(100% + 50px)',
                  marginTop: '20px'
                }}>
                  Customer Reviews and Feedback from Real Users
                </h1>
              </div>
              
              {/* Reviews / Testimonials Row (Right Column – Horizontal, 2 Cards) */}
              <div className="testimonials-row lg:col-span-2 flex" style={{ marginLeft: '65px', gap: '12px' }}>
                {/* Testimonial Card / 01 – Shannon S. */}
                <div className="testimonial-card-01 bg-black rounded-2xl p-6" style={{ width: '336px', height: '244px', paddingLeft: '34px', paddingTop: '34px' }}>
                  {/* Testimonial / Header Row (Horizontal) */}
                  <div className="testimonial-header-row flex items-center gap-3 mb-4">
                    {/* Profile / Image – Shannon S. */}
                    <div className="profile-image" style={{ 
                      width: '55px', 
                      height: '55px', 
                      borderRadius: '50%',
                      overflow: 'hidden',
                      flexShrink: 0
                    }}>
                      <img 
                        src={shannonProfileImg} 
                        alt="Shannon S." 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }} 
                      />
                    </div>
                    
                    {/* Profile / Name + Label */}
                    <div className="profile-name-label">
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: '#F4EF1A' }}>
                        Shannon S. <span style={{ color: '#959595', fontWeight: 400 }}>– early user</span>
                      </p>
                      {/* Testimonial / Rating Row (Aligned Left with Profile) */}
                      <div className="testimonial-rating-row flex gap-1 mt-1">
                        {/* Rating / Stars – 5-Star Graphic */}
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: '#959595', fontSize: '14px' }}>☆</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial / Body */}
                  <p className="testimonial-body italic" style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '16px', 
                    lineHeight: '1.6', 
                    color: '#959595'
                  }}>
                    "This beautiful app looks and feels better than most top-tier subscription apps — at a fraction of the price."
                  </p>
                </div>

                {/* Testimonial Card / 02 – Craig M. */}
                <div className="testimonial-card-02 bg-black rounded-2xl p-6" style={{ width: '336px', height: '244px', marginLeft: '10px', paddingLeft: '34px', paddingTop: '34px' }}>
                  {/* Testimonial / Header Row (Horizontal) */}
                  <div className="testimonial-header-row flex items-center gap-3 mb-4">
                    {/* Profile / Image – Craig M. */}
                    <div className="profile-image" style={{ 
                      width: '50px', 
                      height: '50px', 
                      borderRadius: '50%',
                      overflow: 'hidden',
                      flexShrink: 0,
                      marginTop: '5px'
                    }}>
                      <img 
                        src={craigProfileImg} 
                        alt="Craig M." 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }} 
                      />
                    </div>
                    
                    {/* Profile / Name + Label */}
                    <div className="profile-name-label">
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: '#F4EF1A' }}>
                        Craig M. <span style={{ color: '#959595', fontWeight: 400 }}>– beta tester</span>
                      </p>
                      {/* Testimonial / Rating Row (Aligned Left with Profile) */}
                      <div className="testimonial-rating-row flex gap-1 mt-1">
                        {/* Rating / Stars – 5-Star Graphic */}
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: '#959595', fontSize: '14px' }}>☆</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial / Body */}
                  <p className="testimonial-body italic" style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '16px', 
                    lineHeight: '1.6', 
                    color: '#959595'
                  }}>
                    "A true game-changer. I've been looking for a workout app that's simple, focused, and free from distractions or gimmicks."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mobile Responsive Styles for Reviews Section */}
            <style dangerouslySetInnerHTML={{__html: `
              @media (max-width: 768px) {
                /* Reviews grid mobile layout */
                .reviews-grid {
                  display: flex !important;
                  flex-direction: column !important;
                  gap: 24px !important;
                }
                
                /* Header full-width at top */
                .reviews-header {
                  width: 100% !important;
                  margin-bottom: 0 !important;
                }
                
                /* Title adjustments for mobile - match "Everything You Need" spacing */
                .reviews-title {
                  font-size: 26px !important;
                  width: 100% !important;
                  margin-left: 15px !important;
                  margin-right: 15px !important;
                  margin-top: 10px !important;
                }
                
                /* Testimonials row stacks vertically */
                .testimonials-row {
                  flex-direction: column !important;
                  margin-left: 0 !important;
                  margin-bottom: 20px !important;
                  gap: 16px !important;
                  width: 100% !important;
                }
                
                /* Testimonial cards full-width */
                .testimonial-card-01,
                .testimonial-card-02 {
                  width: 100% !important;
                  height: auto !important;
                  margin-left: 0 !important;
                  padding: 24px !important;
                }
                
                /* Testimonial body responsive font size */
                .testimonial-body {
                  font-size: 14px !important;
                  line-height: 22px !important;
                  font-style: italic !important;
                }
              }
            `}} />
          </div>
        </div>
      </section>
      {/* End Section 4 — Reviews / Testimonials */}

      {/* Section 5 — UX Walkthrough (Simplicity Through Intention) */}
      <section id="ux-walkthrough" style={{ paddingBottom: '60px' }}>
        {/* Section Card / UX Walkthrough */}
        <div className="max-w-7xl mx-auto">
          {/* UX Walkthrough / Container */}
          <div className="rounded-3xl p-[30px] md:p-[60px]" style={{ backgroundColor: '#1a1a1a' }}>
            
            {/* UX Walkthrough / Header (Stacked) */}
            <div className="text-center ux-walkthrough-header-block" style={{ marginBottom: '15px' }}>
              
              {/* Header / Eyebrow */}
              <div className="text-center mb-[26px] ux-walkthrough-eyebrow-container">
                <p className="ux-walkthrough-eyebrow-text" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  fontSize: '18px', 
                  color: '#959595',
                  fontWeight: 400,
                  marginBottom: '-5px'
                }}>
                  Intuitive Structure. Thoughtful Simplicity.
                </p>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .ux-walkthrough-eyebrow-text { font-size: 14px !important; }
                    .ux-walkthrough-eyebrow-container { max-width: 100% !important; margin-bottom: 21px !important; margin-top: 10px !important; }
                  }
                `}} />
              </div>
              
              {/* Header / Title */}
              <div className="text-center mb-[34px] ux-walkthrough-title-container">
                <h1 className="ux-walkthrough-title" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  fontSize: '56px', 
                  lineHeight: '1.2', 
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#FFFFFF'
                }}>
                  Straightforward. By Design.
                </h1>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .ux-walkthrough-title { font-size: 26px !important; }
                    .ux-walkthrough-title-container { max-width: 100% !important; }
                  }
                `}} />
              </div>
              
              {/* Header / Subtext */}
              <div className="text-center max-w-3xl mx-auto mb-[34px] ux-walkthrough-subtext-container">
                <p className="ux-walkthrough-subtext" style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '18px', 
                  lineHeight: '28px',
                  color: '#959595',
                  fontWeight: 400,
                  marginTop: '-20px'
                }}>
                  FAST30™ apps are intentionally minimal, fast, and intuitive. No bloated features. Just clear structure, thoughtful design, and measurable progress.
                </p>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .ux-walkthrough-subtext { font-size: 14px !important; line-height: 22px !important; }
                    .ux-walkthrough-subtext-container { max-width: 100% !important; margin-bottom: 24px !important; }
                    .ux-walkthrough-header-block { margin-top: 20px !important; }
                  }
                  @media (max-width: 1023px) {
                    .ux-walkthrough-header-block { margin-bottom: 5px !important; }
                  }
                  @media (min-width: 1024px) {
                    .ux-walkthrough-header-block { margin-bottom: 5px !important; }
                  }
                `}} />
              </div>
            </div>

            {/* UX Walkthrough / Content Block */}
            <div style={{ position: 'relative' }}>
              {/* UX Walkthrough / Phone Row (Horizontal – 4 Columns) */}
              <div className="ux-phone-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', position: 'relative', zIndex: 1 }}>
                {[
                  { src: mediaPhoneScreen01, alt: 'Dashboard Screen', text: 'Centralized, at-a-glance overview of data that tracks progress and provides program insights.' },
                  { src: mediaPhoneScreen02, alt: 'Workout Screen', text: 'Scientifically designed programs that pair routines with built-in warm-ups and rest timers.' },
                  { src: mediaPhoneScreen03, alt: 'Goals Screen', text: 'Personalized progress tracking, achievement badges, and goal setting to keep motivation high.' },
                  { src: mediaPhoneScreen04, alt: 'Completion Screen', text: 'Self-managed health and wellness planning built for long-term consistency.' },
                ].map((phone, i) => (
                  <div key={i} className="ux-phone-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', aspectRatio: '9/19.5', overflow: 'hidden', position: 'relative', marginBottom: '16px' }}>
                      <img 
                        src={phone.src} 
                        alt={phone.alt}
                        style={{ 
                          position: 'absolute',
                          top: 'calc(50% - 30px)',
                          left: '50%',
                          transform: 'translate(-50%, -50%) scale(3.84)',
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          transformOrigin: 'center center'
                        }}
                      />
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#959595', textAlign: 'left', paddingLeft: '10px', paddingRight: '10px', marginTop: '0px' }}>
                      {phone.text}
                    </p>
                  </div>
                ))}
              </div>
              <style dangerouslySetInnerHTML={{__html: `
                @media (max-width: 768px) {
                  .ux-phone-grid {
                    grid-template-columns: repeat(2, 1fr) !important;
                    gap: 16px !important;
                  }
                  .ux-phone-col p {
                    margin-bottom: 20px !important;
                    font-size: 13px !important;
                  }
                }
                @media (max-width: 480px) {
                  .ux-phone-grid {
                    grid-template-columns: 1fr !important;
                    max-width: 300px !important;
                    margin: 0 auto !important;
                  }
                  .ux-phone-col p {
                    margin-bottom: 30px !important;
                  }
                }
              `}} />
            </div>
          </div>
        </div>
      </section>
      {/* End Section 5 — UX Walkthrough (Simplicity Through Intention) */}

      {/* Section 6 — Dedicated To Progress */}
      <section style={{ paddingBottom: '60px' }}>
        {/* Section Card / Dedicated To Progress */}
        <div className="max-w-7xl mx-auto">
          {/* Dedicated To Progress / Container */}
          <div className="rounded-3xl p-[30px] md:p-[60px]" style={{ backgroundColor: '#1a1a1a' }}>
            
            {/* Dedicated To Progress / Header (Stacked) */}
            <div className="text-center dedicated-to-progress-header-block" style={{ marginBottom: '40px' }}>
              
              {/* Header / Eyebrow */}
              <div className="text-center mb-[26px] dedicated-to-progress-eyebrow-container">
                <p className="dedicated-to-progress-eyebrow-text" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  fontSize: '18px', 
                  color: '#959595',
                  fontWeight: 400,
                  marginBottom: '-5px'
                }}>
                  Personal Accountability. Purposeful Living.
                </p>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .dedicated-to-progress-eyebrow-text { font-size: 14px !important; }
                    .dedicated-to-progress-eyebrow-container { max-width: 100% !important; margin-bottom: 21px !important; margin-top: 10px !important; }
                  }
                `}} />
              </div>
              
              {/* Header / Title */}
              <div className="text-center mb-[34px] dedicated-to-progress-title-container">
                <h1 className="dedicated-to-progress-title" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  fontSize: '56px', 
                  lineHeight: '1.2', 
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#FFFFFF'
                }}>
                  Dedicated. To Progress.
                </h1>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .dedicated-to-progress-title { font-size: 26px !important; }
                    .dedicated-to-progress-title-container { max-width: 100% !important; }
                  }
                `}} />
              </div>
              
              {/* Header / Subtext */}
              <div className="text-center max-w-3xl mx-auto mb-[34px] dedicated-to-progress-subtext-container">
                <p className="dedicated-to-progress-subtext" style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '18px', 
                  lineHeight: '28px',
                  color: '#959595',
                  fontWeight: 400,
                  marginTop: '-20px'
                }}>
                  FAST30™ apps fit seamlessly into your life, whether you're starting a personal fitness & wellness journey, building on an existing routine, or creating a partner challenge.
                </p>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .dedicated-to-progress-subtext { font-size: 14px !important; line-height: 22px !important; }
                    .dedicated-to-progress-subtext-container { max-width: 100% !important; margin-bottom: 24px !important; }
                    .dedicated-to-progress-header-block { margin-top: 20px !important; }
                  }
                `}} />
              </div>
            </div>

            {/* Dedicated To Progress / Three Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 dedicated-to-progress-grid">
              
              {/* Column 01 / Kick Start */}
              <div className="dedicated-to-progress-column-01">
                <div className="bg-black rounded-2xl overflow-hidden">
                  {/* Column Image */}
                  <div className="dedicated-to-progress-image-container-01" style={{ 
                    width: '100%', 
                    aspectRatio: '16/9',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={dedicatedImage01} 
                      alt="Woman doing crunches"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        transform: 'scale(1.2) translateY(-10px)',
                        transformOrigin: 'center center'
                      }}
                    />
                  </div>
                  
                  {/* Column Content */}
                  <div className="p-8 dedicated-to-progress-content-01">
                    <h3 className="dedicated-to-progress-column-title-01" style={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '22px', 
                      fontWeight: 700,
                      lineHeight: '1.3',
                      color: '#F4EF1A',
                      marginBottom: '16px'
                    }}>
                      Kick Start Your Fitness!
                    </h3>
                    <p className="dedicated-to-progress-column-text-01" style={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '16px', 
                      lineHeight: '1.6',
                      color: '#959595'
                    }}>
                      If you've been waiting for a nudge to start your fitness program to reach your goals, this is your cue. Let's go!
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 02 / Bust Through */}
              <div className="dedicated-to-progress-column-02">
                <div className="bg-black rounded-2xl overflow-hidden">
                  {/* Column Image */}
                  <div className="dedicated-to-progress-image-container-02" style={{ 
                    width: '100%', 
                    aspectRatio: '16/9',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={dedicatedImage02} 
                      alt="Man doing pushups"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        transform: 'scale(1.30) translateY(-5px)',
                        transformOrigin: 'center center'
                      }}
                    />
                  </div>
                  
                  {/* Column Content */}
                  <div className="p-8 dedicated-to-progress-content-02">
                    <h3 className="dedicated-to-progress-column-title-02" style={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '22px', 
                      fontWeight: 700,
                      lineHeight: '1.3',
                      color: '#F4EF1A',
                      marginBottom: '16px'
                    }}>
                      Bust Through a Plateau!
                    </h3>
                    <p className="dedicated-to-progress-column-text-02" style={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '16px', 
                      lineHeight: '1.6',
                      color: '#959595'
                    }}>
                      Easily add a FAST30™ challenge to your existing fitness routine with one tap. The perfect starter or finisher!
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 03 / Challenge a Partner */}
              <div className="dedicated-to-progress-column-03">
                <div className="bg-black rounded-2xl overflow-hidden">
                  {/* Column Image */}
                  <div className="dedicated-to-progress-image-container-03" style={{ 
                    width: '100%', 
                    aspectRatio: '16/9',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={dedicatedImage03} 
                      alt="Two people doing planks together"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        transform: 'scale(1.40) translateY(-30px)',
                        transformOrigin: 'center center'
                      }}
                    />
                  </div>
                  
                  {/* Column Content */}
                  <div className="p-8 dedicated-to-progress-content-03">
                    <h3 className="dedicated-to-progress-column-title-03" style={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '22px', 
                      fontWeight: 700,
                      lineHeight: '1.3',
                      color: '#F4EF1A',
                      marginBottom: '16px'
                    }}>
                      Challenge a Partner!
                    </h3>
                    <p className="dedicated-to-progress-column-text-03" style={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '16px', 
                      lineHeight: '1.6',
                      color: '#959595'
                    }}>
                      People who train together stay motivated. FAST30™ is for couples, workout buddies, or business partners.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <style dangerouslySetInnerHTML={{__html: `
              @media (max-width: 768px) {
                .dedicated-to-progress-grid { gap: 20px !important; }
                .dedicated-to-progress-column-title-01,
                .dedicated-to-progress-column-title-02,
                .dedicated-to-progress-column-title-03 { font-size: 18px !important; }
                .dedicated-to-progress-column-text-01,
                .dedicated-to-progress-column-text-02,
                .dedicated-to-progress-column-text-03 { font-size: 14px !important; line-height: 22px !important; }
              }
            `}} />
          </div>
        </div>
      </section>
      {/* End Section 6 — Dedicated To Progress */}

      {/* Section 7 — Program Library (App Grid) */}
      <section id="app-ecosystem" style={{ paddingBottom: '60px' }}>
        {/* Section Card / Program Library */}
        <div className="max-w-7xl mx-auto">
          {/* Program Library / Container */}
          <div className="rounded-3xl p-[30px] md:p-[60px]" style={{ backgroundColor: '#1a1a1a' }}>
            
            {/* Program Library / Header */}
            <div className="text-center program-library-header-block" style={{ marginBottom: '15px' }}>
              {/* Header / Eyebrow */}
              <div className="text-center mb-[26px] program-library-eyebrow-container">
                <p className="program-library-eyebrow-text" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  fontSize: '18px', 
                  color: '#959595',
                  fontWeight: 400,
                  marginBottom: '-5px'
                }}>
                  The Complete FAST30™ Fitness & Wellness App Ecosystem
                </p>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .program-library-eyebrow-text { font-size: 14px !important; }
                    .program-library-eyebrow-container { max-width: 100% !important; margin-bottom: 21px !important; margin-top: 10px !important; }
                  }
                `}} />
              </div>
              
              {/* Header / Title */}
              <div className="text-center mb-[34px] program-library-title-container">
                <h1 className="program-library-title" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  fontSize: '56px', 
                  lineHeight: '1.2', 
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#FFFFFF'
                }}>
                  Your Results. Starts Here.
                </h1>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .program-library-title { font-size: 26px !important; }
                    .program-library-title-container { max-width: 100% !important; }
                  }
                `}} />
              </div>
              
              {/* Header / Subtext */}
              <div className="text-center max-w-3xl mx-auto mb-[34px] program-library-subtext-container">
                <p className="program-library-subtext" style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '18px', 
                  lineHeight: '28px',
                  color: '#959595',
                  fontWeight: 400,
                  marginTop: '-20px'
                }}>
                  FAST30™ programs focus on one clear objective and a structured 30-day or longer progression system designed to move you steadily toward your health goals.
                </p>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .program-library-subtext { font-size: 14px !important; line-height: 22px !important; }
                    .program-library-subtext-container { max-width: 100% !important; margin-bottom: 24px !important; }
                    .program-library-header-block { margin-top: 20px !important; }
                  }
                  @media (max-width: 1023px) {
                    .program-library-header-block { margin-bottom: 5px !important; }
                  }
                  @media (min-width: 1024px) {
                    .program-library-header-block { margin-bottom: 5px !important; }
                  }
                `}} />
              </div>
            </div>

            {/* Program Library / Grid (Desktop: 4 columns × 4 rows) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Program Row / 01 */}
              {/* App Card / 01 – FAST30 100 Push-Ups */}
              <AppCard 
                logo={<PushUpsLogo />}
                description="Increase push-up capacity through progressively higher daily repetition targets."
                showAppleAvailable={true}
              />

              {/* App Card / 02 – FAST30 200 Sit-Ups */}
              <AppCard 
                logo={<SitUpsLogo />}
                description="Strengthen core endurance through steadily rising sit-up repetition volume."
              />

              {/* App Card / 03 – FAST30 50 Pull-Ups */}
              <AppCard 
                logo={<PullUpsLogo />}
                description="Develop pull-up strength through controlled progressive repetition and grip."
              />

              {/* App Card / 04 – FAST30 Meditation */}
              <AppCard 
                logo={<MeditationLogo />}
                description="Practice guided mindfulness sessions fostering calm focus and mental consistency."
              />

              {/* Program Row / 02 */}
              {/* App Card / 05 – FAST30 200 Squats */}
              <AppCard 
                logo={<SquatsLogo />}
                description="Enhance lower-body strength through controlled progressive squat repetition volume."
              />

              {/* App Card / 06 – FAST30 100 Burpees */}
              <AppCard 
                logo={<BurpeesLogo />}
                description="Boost full-body conditioning through rising burpee repetition and endurance."
              />

              {/* App Card / 07 – FAST30 5min Planks */}
              <AppCard 
                logo={<PlanksLogo />}
                description="Stabilize core strength through progressive plank holds and posture control."
              />

              {/* App Card / 08 – FAST30 3min Wall Sit */}
              <AppCard 
                logo={
                  <img 
                    src={headerBrandLogoPanel} 
                    alt="3MIN WALL SIT" 
                    style={{ 
                      height: '100%',
                      width: 'auto',
                      objectFit: 'contain'
                    }} 
                  />
                }
                description="Train lower-body endurance through progressively longer wall-sit holds."
              />

              {/* Program Row / 03 */}
              {/* App Card / 09 – FAST30 Toe Touches */}
              <AppCard 
                logo={<ToeTouchesLogo />}
                description="Expand core flexibility through controlled toe-touch movement and repetition."
              />

              {/* App Card / 10 – FAST30 Jumping Rope */}
              <AppCard 
                logo={<JumpingRopeLogo />}
                description="Advance cardio coordination through rhythmic jump-rope intervals and endurance."
              />

              {/* App Card / 11 – FAST30 Flexibility */}
              <AppCard 
                logo={<FlexibilityLogo />}
                description="Promote mobility and flexibility through guided stretching and controlled movement."
              />

              {/* App Card / 12 – FAST30 20,000 Steps */}
              <AppCard 
                logo={<StepsLogo />}
                description="Support daily movement through structured walking targets and consistency."
              />

              {/* Program Row / 04 */}
              {/* App Card / 13 – FAST30 Full Body Fix */}
              <AppCard 
                logo={<FullBodyFixLogo />}
                description="A complete restore for full-body balance through integrated strength mobility and recovery."
              />

              {/* App Card / 14 – FAST30 The Body 500 */}
              <AppCard 
                logo={<Body500Logo />}
                description="An advanced full-body endurance through high-volume training and muscular control."
              />

              {/* App Card / 15 – FAST30 The Daily 50 */}
              <AppCard 
                logo={<Daily50Logo />}
                description="A balanced daily fitness circuit through daily multi-exercise strength and stability."
              />

              {/* App Card / 16 – FAST30 7min Workout */}
              <AppCard 
                logo={<SevenMinWorkoutLogo />}
                description="A high-intensity, efficient full-body training circuit for fast high-intensity exercise."
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Section 7 — Program Library (App Grid) */}

      {/* Section 8 — Pricing Philosophy (One Fee, No Subscription) */}
      <section style={{ paddingBottom: '60px' }}>
        {/* Section Card / Pricing Model */}
        <div className="max-w-7xl mx-auto">
          {/* Pricing Model / Container */}
          <div className="rounded-3xl p-[30px] md:p-[60px]" style={{ backgroundColor: '#1a1a1a' }}>
            
            {/* Pricing Model / Header (Stacked) */}
            <div className="text-center pricing-model-header-block" style={{ marginBottom: '15px' }}>
              {/* Header / Eyebrow */}
              <div className="text-center mb-[26px] pricing-model-eyebrow-container">
                <p className="pricing-model-eyebrow-text" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  fontSize: '18px', 
                  color: '#959595',
                  fontWeight: 400,
                  marginBottom: '-5px'
                }}>
                  Simple Pricing. No Commitments.
                </p>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .pricing-model-eyebrow-text { font-size: 14px !important; }
                    .pricing-model-eyebrow-container { max-width: 100% !important; margin-bottom: 21px !important; margin-top: 10px !important; }
                  }
                `}} />
              </div>
              
              {/* Header / Title */}
              <div className="text-center mb-[34px] pricing-model-title-container">
                <h1 className="pricing-model-title" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  fontSize: '56px', 
                  lineHeight: '1.2', 
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#FFFFFF'
                }}>
                  One Fee. No Subscription.
                </h1>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .pricing-model-title { font-size: 26px !important; }
                    .pricing-model-title-container { max-width: 100% !important; }
                  }
                `}} />
              </div>
              
              {/* Header / Subtext */}
              <div className="text-center max-w-3xl mx-auto mb-[34px] pricing-model-subtext-container">
                <p className="pricing-model-subtext" style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '18px', 
                  lineHeight: '28px',
                  color: '#959595',
                  fontWeight: 400,
                  marginTop: '-20px'
                }}>
                  All FAST30™ fitness & wellness apps are purchased once and include full access to the complete 30-day program. Additional programs and bundles are always optional.
                </p>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .pricing-model-subtext { font-size: 14px !important; line-height: 22px !important; }
                    .pricing-model-subtext-container { max-width: 100% !important; margin-bottom: 24px !important; }
                    .pricing-model-header-block { margin-bottom: 5px !important; }
                  }
                `}} />
              </div>
            </div>

            {/* Pricing Model / Benefit Row (Horizontal – 3 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Benefit Card / 01 – One-Time Purchase */}
              <div className="benefit-card bg-black rounded-2xl p-8">
                {/* Card / Title */}
                <h3 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '22px', 
                  fontWeight: 700, 
                  color: '#F4EF1A', 
                  marginBottom: '16px',
                  lineHeight: '1.3'
                }}>
                  One-Time Purchase
                </h3>
                {/* Card / Body */}
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '16px', 
                  lineHeight: '1.6', 
                  color: '#959595'
                }}>
                  FAST30™ apps are a pay-once experience that gives you ownership of the complete 30-day program.
                </p>
              </div>

              {/* Benefit Card / 02 – No Subscriptions */}
              <div className="benefit-card bg-black rounded-2xl p-8">
                {/* Card / Title */}
                <h3 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '22px', 
                  fontWeight: 700, 
                  color: '#F4EF1A', 
                  marginBottom: '16px',
                  lineHeight: '1.3'
                }}>
                  No Subscriptions
                </h3>
                {/* Card / Body */}
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '16px', 
                  lineHeight: '1.6', 
                  color: '#959595'
                }}>
                  No fees to remove ads. No upgrade costs. No hidden content behind paywalls. One fee, full access.
                </p>
              </div>

              {/* Benefit Card / 03 – Progress At Your Pace */}
              <div className="benefit-card bg-black rounded-2xl p-8">
                {/* Card / Title */}
                <h3 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '22px', 
                  fontWeight: 700, 
                  color: '#F4EF1A', 
                  marginBottom: '16px',
                  lineHeight: '1.3'
                }}>
                  Progress At Your Pace
                </h3>
                {/* Card / Body */}
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '16px', 
                  lineHeight: '1.6', 
                  color: '#959595'
                }}>
                  Our 30-day apps follow a start-stop progress routine that can be paused and and resumed whenever you are ready!
                </p>
              </div>
              <style dangerouslySetInnerHTML={{__html: `
                @media (max-width: 768px) {
                  .benefit-card {
                    width: 100% !important;
                  }
                }
              `}} />
            </div>
          </div>
        </div>
      </section>
      {/* End Section 8 — Pricing Philosophy (One Fee, No Subscription) */}

      {/* Section 9 — Final CTA (Pick a Goal, Start Your 30 Days) */}
      <section style={{ paddingBottom: '0' }}>
        {/* Section / Final CTA */}
        <div className="max-w-7xl mx-auto">
          {/* Final CTA / Container */}
          <div className="final-cta-container relative overflow-hidden rounded-3xl" style={{ minHeight: '700px' }}>
            {/* Final CTA / Background Platform */}
            <div className="absolute inset-0">
              {/* Media / Phone UI Metal (single phone on perforated background) */}
              <img 
                src={phoneUIMetal} 
                alt="Background" 
                className="final-cta-background-image"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }} 
              />
            </div>
            
            {/* Final CTA / Highlight Card (Yellow Block) */}
            <div className="relative z-10 flex items-center final-cta-content" style={{ minHeight: '700px', padding: '60px' }}>
              {/* Card / Background – Yellow Panel */}
              <div className="bg-[#F4EF1A] text-black rounded-3xl final-cta-highlight-card" style={{ width: '50%', padding: '50px' }}>
                {/* Card / Title */}
                <h1 className="final-cta-title" style={{ 
                  fontFamily: "'Monument Extended', sans-serif", 
                  fontSize: '56px', 
                  lineHeight: '1.2', 
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  marginBottom: '24px'
                }}>
                  Pick A Goal.<br />
                  Start Your<br />
                  30 Days!
                </h1>
                {/* Card / Body */}
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '16px', 
                  lineHeight: '1.6', 
                  marginBottom: '0',
                  color: '#000000'
                }}>
                  <span style={{ display: 'block', marginBottom: '12px' }}>
                    FAST30™ fitness & wellness apps are built for people who value focus, discipline, and intentional progress.
                  </span>
                  <span style={{ display: 'block', marginBottom: '12px' }}>
                    Begin with one program, add others when you're ready, or bundle select apps to push past your goals.
                  </span>
                  <span style={{ display: 'block' }}>
                    Start now, and in 30 days, you'll be thanking yourself.
                  </span>
                </p>
              </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
              @media (max-width: 768px) {
                .final-cta-container {
                  min-height: auto !important;
                }
                .final-cta-content {
                  min-height: auto !important;
                  padding: 30px !important;
                  flex-direction: column;
                  align-items: center;
                  justify-content: flex-start;
                }
                .final-cta-highlight-card {
                  width: calc(100% - 40px) !important;
                  max-width: 500px !important;
                  aspect-ratio: auto !important;
                  padding: 40px !important;
                  margin: 0 auto 30px auto;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .final-cta-title {
                  font-size: 26px !important;
                }
                .final-cta-background-image {
                  object-fit: contain !important;
                }
              }
            `}} />
          </div>
        </div>
      </section>
      {/* End Section 9 — Final CTA (Pick a Goal, Start Your 30 Days) */}

      {/* Section 10 — Footer + Legal Slide-In Panel */}
      <footer className="relative w-full" style={{ marginTop: '60px' }}>
        {/* Section / Footer */}
        <div className="max-w-7xl mx-auto">
          {/* Footer / Container */}
          <div className="footer-container rounded-t-3xl flex items-center justify-center" style={{ 
            backgroundColor: '#1A1A1A',
            paddingTop: '60px',
            paddingLeft: '60px',
            paddingRight: '60px',
            paddingBottom: '60px',
            minHeight: '132px'
          }}>
            {/* Footer / Content Row (Single Line) */}
            <div className="footer-content-row" style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '12px', 
              color: '#959595',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textAlign: 'center'
            }}>
              {/* Footer / Copyright */}
              <span className="footer-copyright">© 2026 FAST30™ APPS. All rights reserved.</span>
              
              <span className="footer-divider">|</span>
              
              {/* Footer / Legal Links Group */}
              <span className="legal-links-group" style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                {/* Link / Terms of Service */}
                <button 
                  onClick={() => openLegalPanel('terms')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    color: '#959595',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    padding: 0,
                    textDecoration: 'underline'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#F4EF1A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#959595'}
                >
                  Terms of Service
                </button>
                
                <span className="footer-divider">|</span>
                
                {/* Link / Privacy Policy */}
                <button 
                  onClick={() => openLegalPanel('privacy')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    color: '#959595',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    padding: 0,
                    textDecoration: 'underline'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#F4EF1A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#959595'}
                >
                  Privacy Policy
                </button>
                
                <span className="footer-divider">|</span>
                
                {/* Link / Legal Disclaimer */}
                <button 
                  onClick={() => openLegalPanel('legal')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    color: '#959595',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    padding: 0,
                    textDecoration: 'underline'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#F4EF1A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#959595'}
                >
                  Legal Disclaimer
                </button>
                
                <span className="footer-divider">|</span>
                
                {/* Link / Cookies */}
                <button 
                  onClick={() => openLegalPanel('cookies')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    color: '#959595',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    padding: 0,
                    textDecoration: 'underline'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#F4EF1A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#959595'}
                >
                  Cookies
                </button>
                
                <span className="footer-divider">|</span>
                
                {/* Footer / Contact */}
                <span className="footer-contact">Contact us at <span style={{ color: '#F4EF1A' }}>hello@fast30apps.com</span></span>
              </span>
            </div>

            {/* Mobile Responsive Styles */}
            <style dangerouslySetInnerHTML={{__html: `
              @media (max-width: 768px) {
                .footer-container {
                  padding-left: 40px !important;
                  padding-right: 40px !important;
                }
                .footer-content-row {
                  flex-direction: row !important;
                  flex-wrap: wrap !important;
                  gap: 8px !important;
                  line-height: 1.6 !important;
                  justify-content: center !important;
                }
                .footer-divider {
                  display: inline !important;
                }
                .legal-links-group {
                  display: inline-flex !important;
                  flex-wrap: wrap !important;
                  gap: 8px !important;
                  justify-content: center !important;
                }
              }
            `}} />
          </div>
        </div>
      </footer>
      {/* End Section 10 — Footer + Legal Slide-In Panel */}

      {/* Overlay Panel / Legal */}
      <LegalPanel 
        isOpen={legalPanel.isOpen} 
        onClose={closeLegalPanel} 
        type={legalPanel.type} 
      />
    </div>
  );
}