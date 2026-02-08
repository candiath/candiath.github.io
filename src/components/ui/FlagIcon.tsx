interface FlagIconProps {
  code: 'ES' | 'US';
  className?: string;
  size?: number;
}

export const FlagIcon = ({ code, className = '', size = 20 }: FlagIconProps) => {
  const flags = {
    ES: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 24"
        width={size}
        height={(size * 24) / 36}
        className={className}
      >
        <rect width="36" height="24" fill="#c60b1e" />
        <rect y="6" width="36" height="12" fill="#ffc400" />
      </svg>
    ),
    US: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 24"
        width={size}
        height={(size * 24) / 36}
        className={className}
      >
        <rect width="36" height="24" fill="#fff" />
        <rect width="36" height="1.85" fill="#b22234" />
        <rect y="3.69" width="36" height="1.85" fill="#b22234" />
        <rect y="7.38" width="36" height="1.85" fill="#b22234" />
        <rect y="11.08" width="36" height="1.85" fill="#b22234" />
        <rect y="14.77" width="36" height="1.85" fill="#b22234" />
        <rect y="18.46" width="36" height="1.85" fill="#b22234" />
        <rect y="22.15" width="36" height="1.85" fill="#b22234" />
        <rect width="14.4" height="12.92" fill="#3c3b6e" />
        <g fill="#fff">
          <circle cx="2.4" cy="1.85" r="0.8" />
          <circle cx="4.8" cy="1.85" r="0.8" />
          <circle cx="7.2" cy="1.85" r="0.8" />
          <circle cx="9.6" cy="1.85" r="0.8" />
          <circle cx="12" cy="1.85" r="0.8" />
          <circle cx="3.6" cy="3.69" r="0.8" />
          <circle cx="6" cy="3.69" r="0.8" />
          <circle cx="8.4" cy="3.69" r="0.8" />
          <circle cx="10.8" cy="3.69" r="0.8" />
          <circle cx="2.4" cy="5.54" r="0.8" />
          <circle cx="4.8" cy="5.54" r="0.8" />
          <circle cx="7.2" cy="5.54" r="0.8" />
          <circle cx="9.6" cy="5.54" r="0.8" />
          <circle cx="12" cy="5.54" r="0.8" />
          <circle cx="3.6" cy="7.38" r="0.8" />
          <circle cx="6" cy="7.38" r="0.8" />
          <circle cx="8.4" cy="7.38" r="0.8" />
          <circle cx="10.8" cy="7.38" r="0.8" />
          <circle cx="2.4" cy="9.23" r="0.8" />
          <circle cx="4.8" cy="9.23" r="0.8" />
          <circle cx="7.2" cy="9.23" r="0.8" />
          <circle cx="9.6" cy="9.23" r="0.8" />
          <circle cx="12" cy="9.23" r="0.8" />
          <circle cx="3.6" cy="11.08" r="0.8" />
          <circle cx="6" cy="11.08" r="0.8" />
          <circle cx="8.4" cy="11.08" r="0.8" />
          <circle cx="10.8" cy="11.08" r="0.8" />
        </g>
      </svg>
    ),
  };

  return flags[code];
};
