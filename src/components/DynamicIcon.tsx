// src/components/DynamicIcon.tsx
import React from "react";

type Props = {
  iconName: string;
  alt?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl"; // Optional size prop
};

const DynamicIcon: React.FC<Props> = ({
  iconName,
  alt,
  className = "",
  size,
}) => {
  // Import all icon files in assets/tech-icons eagerly as URLs
  const iconMap = import.meta.glob("../assets/tech-icons/*.{svg,png}", {
    eager: true,
    as: "url",
  });

  // Normalize icon name and find matching path
  const lowerName = iconName.toLowerCase();
  const iconPath = Object.keys(iconMap).find((path) =>
    path.toLowerCase().includes(lowerName)
  );

  if (!iconPath) return null;

  const src = iconMap[iconPath] as string;

  // Size classes based on prop
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
  };

  const finalClassName = size ? `${sizeClasses[size]} ${className}` : className;

  return <img src={src} alt={alt || iconName} className={finalClassName} />;
};

export default DynamicIcon;
