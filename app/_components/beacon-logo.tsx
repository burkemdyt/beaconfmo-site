export function BeaconLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 30"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="15" cy="15" r="14" stroke="#b8922a" strokeWidth="0.9" />
      <line x1="15" y1="4" x2="15" y2="26" stroke="#b8922a" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="15" y1="4" x2="9" y2="19" stroke="#b8922a" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
      <line x1="15" y1="4" x2="21" y2="19" stroke="#b8922a" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
      <line x1="9.5" y1="17" x2="20.5" y2="17" stroke="#b8922a" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <circle cx="15" cy="4" r="2.2" fill="#b8922a" />
    </svg>
  )
}
