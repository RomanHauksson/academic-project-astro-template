import { Icon } from "@iconify/react";
import { useRef, useEffect, useState } from "react";

export function CopyCodeButton({ children }: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const preRef = useRef<HTMLPreElement | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Find the parent pre element
    if (buttonRef.current && !preRef.current) {
      preRef.current = buttonRef.current.closest("pre");
    }
  }, []);

  const handleClick = () => {
    if (preRef.current) {
      // Clone the pre element to work with
      const preClone = preRef.current.cloneNode(true) as HTMLPreElement;

      // Remove the copy button from the clone
      const buttonToRemove = preClone.querySelector("button");
      buttonToRemove?.remove();

      // Get the cleaned text content
      const content = preClone.textContent?.trim() || "";

      navigator.clipboard
        .writeText(content)
        .then(() => {
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 2000); // Reset after 2 seconds
        })
        .catch((err) => console.error("Failed to copy text:", err));
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="absolute top-3 right-3 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-hover:transition-none"
    >
      <Icon
        icon={showSuccess ? "ri:check-line" : "ri:file-copy-line"}
        width={24}
        height={24}
      />
    </button>
  );
}
