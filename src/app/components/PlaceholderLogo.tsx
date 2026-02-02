interface PlaceholderLogoProps {
  appName: string;
}

export function PlaceholderLogo({ appName }: PlaceholderLogoProps) {
  return (
    <div className="bg-[#F4EF1A] text-black px-3 py-2 rounded-md inline-block" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div style={{ fontWeight: 700, fontSize: '14px', lineHeight: '1', letterSpacing: '0.02em' }}>FAST30</div>
      <div style={{ fontSize: '10px', lineHeight: '1.2', letterSpacing: '0.05em', marginTop: '2px' }}>{appName}</div>
    </div>
  );
}
