type StatusButtonProps = {
  isActive: boolean;
  onToggle: () => void;
};

export function StatusButton({ isActive, onToggle }: StatusButtonProps) {
  const strokeColor = isActive ? 'primary_200' : 'danger_300';
  const fillColor = isActive ? 'primary_200' : 'danger_300';

  return (
    <button
      className="w-5 h-5 rounded-full flex items-center justify-center"
      onClick={onToggle}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.33301 19.7917L16.6663 19.7917C20.6934 19.7917 23.958 16.5271 23.958 12.5C23.958 8.47294 20.6934
          5.20835 16.6663 5.20835H8.33301C4.30593 5.20835 1.04134 8.47294 1.04134 12.5C1.04134 16.5271 4.30593
          19.7917 8.33301 19.7917Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33301 9.375C6.60712 9.375 5.20801 10.7741 5.20801 12.5C5.20801 14.2259 6.60712 15.625 8.33301
          15.625C10.0589 15.625 11.458 14.2259 11.458 12.5C11.458 10.7741 10.0589 9.375 8.33301 9.375Z"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
