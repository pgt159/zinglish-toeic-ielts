import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost";
};
const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled,
  onClick = () => {
    console.log("Nothing to show");
  },
  type,
}: ButtonProps) => {
  const baseStyle =
    "flex inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 rounded-button cursor-pointer";
  const variants = {
    primary: "bg-primary text-foreground hover:bg-primary/90 text-[15px]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    ghost:
      "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground",
  };
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
