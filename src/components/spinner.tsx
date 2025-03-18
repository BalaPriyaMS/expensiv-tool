import { cn } from "@/lib/utils";

const sizes = {
  sm: "h-4 w-4",
  default: "h-6 w-6",
  lg: "h-16 w-16",
  icon: "h-4 w-4",
};

export type SpinnerProps = {
  size?: keyof typeof sizes;
  className?: string;
};

export const Spinner = ({ size = "default", className = "" }: SpinnerProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        className={cn(sizes[size], className)}
      >
        <g>
          <rect
            width="2"
            height="5"
            x="11"
            y="1"
            fill="currentColor"
            opacity=".14"
          />
          <rect
            width="2"
            height="5"
            x="11"
            y="1"
            fill="currentColor"
            opacity=".29"
            transform="rotate(30 12 12)"
          />
          <rect
            width="2"
            height="5"
            x="11"
            y="1"
            fill="currentColor"
            opacity=".43"
            transform="rotate(60 12 12)"
          />
          <rect
            width="2"
            height="5"
            x="11"
            y="1"
            fill="currentColor"
            opacity=".57"
            transform="rotate(90 12 12)"
          />
          <rect
            width="2"
            height="5"
            x="11"
            y="1"
            fill="currentColor"
            opacity=".71"
            transform="rotate(120 12 12)"
          />
          <rect
            width="2"
            height="5"
            x="11"
            y="1"
            fill="currentColor"
            opacity=".86"
            transform="rotate(150 12 12)"
          />
          <rect
            width="2"
            height="5"
            x="11"
            y="1"
            fill="currentColor"
            transform="rotate(180 12 12)"
          />
          <animateTransform
            attributeName="transform"
            calcMode="discrete"
            dur="0.75s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
          />
        </g>
      </svg>

      <span className="sr-only">Loading</span>
    </>
  );
};
