import React from "react";
import "./button.css";

// 스토리북의 argTypes를 컴포넌트에 작성하기 보단 스토리북의 영역에 작성할 것을 추천 !
// 스토리북을 통해서 UI 컴포넌트가 얼마나 다양하게 화면에 나타나는지 보는 것이기 때문에 ~
export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
