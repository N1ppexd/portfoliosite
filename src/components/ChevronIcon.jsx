export function ChevronIcon({ direction }) {
  const path = direction === 'left'
    ? 'm15.75 19.5l-7.5-7.5l7.5-7.5'
    : 'm8.25 4.5l7.5 7.5l-7.5 7.5'

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}
