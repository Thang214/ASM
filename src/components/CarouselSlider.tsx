import { CSSProperties } from "react";

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export function SampleNextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#d9d9d9",
        right: 0,
        zIndex: 2,
        width: "30px",
        height: "50px",
        textAlign: "center",
        lineHeight: "70px",
      }}
      onClick={onClick}
    ></div>
  );
}

export function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#d9d9d9",
        left: 0,
        zIndex: 2,
        width: "30px",
        height: "50px",
        textAlign: "center",
        lineHeight: "70px",
      }}
      onClick={onClick}
    />
  );
}
