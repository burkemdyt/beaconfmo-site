export function BeaconLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="256" cy="256" r="256" fill="#1a1917" />
      <circle cx="256" cy="256" r="240" stroke="#b8922a" strokeWidth="8" />
      <line x1="256" y1="80" x2="256" y2="420" stroke="#b8922a" strokeWidth="12" strokeLinecap="round" />
      <line x1="256" y1="100" x2="152" y2="320" stroke="#b8922a" strokeWidth="8" strokeLinecap="round" />
      <line x1="256" y1="100" x2="360" y2="320" stroke="#b8922a" strokeWidth="8" strokeLinecap="round" />
      <line x1="160" y1="300" x2="352" y2="300" stroke="#b8922a" strokeWidth="7" strokeLinecap="round" />
      <circle cx="256" cy="80" r="24" fill="#b8922a" />
    </svg>
  )
}
