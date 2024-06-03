import { useState, useRef, useEffect } from "react";

const Popover = ({ children, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      {isOpen && (
        <div className="absolute bg-white border p-4 mt-2 rounded shadow-md">
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
