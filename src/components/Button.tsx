import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled} style={{ padding: "8px 16px", cursor: disabled ? "not-allowed" : "pointer" }}>
      {label}
    </button>
  );
};

export default Button;
