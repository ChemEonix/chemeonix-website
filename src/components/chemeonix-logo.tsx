// File: src/components/chemeonix-logo.tsx

export const ChemEonixLogo = () => (
  <svg
    width="150"
    height="50"
    viewBox="0 0 250 100"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="Montserrat, sans-serif"
  >
    <g transform="translate(50, 50)">
      <g strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 0 -40 L 34.64 -20" stroke="#2D3748" />
        <path d="M 0 40 L 34.64 20" stroke="#2D3748" />
        <path d="M 34.64 -20 L 34.64 20" stroke="#4FD1C5" />
        <path d="M -34.64 20 L -34.64 -20" stroke="#4FD1C5" />
        <path d="M -34.64 20 L 0 40" stroke="#2D3748" />
        <path d="M -34.64 -20 L 0 -40" stroke="#2D3748" />
      </g>
      <g fill="#4FD1C5" stroke="#4FD1C5" strokeWidth="2">
        <path d="M 0 -12 L 3 -3 L 12 0 L 3 3 L 0 12 L -3 3 L -12 0 L -3 -3 Z" />
      </g>
    </g>
    <text x="105" y="58" fontSize="24" fontWeight="bold" fill="#2D3748">
      ChemEonix
    </text>
  </svg>
);
