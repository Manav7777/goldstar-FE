import React, { useRef, useState, useEffect } from "react";
import { Nav } from "react-bootstrap";

export default function CollapsibleMenu({ menu, isOpen, onToggle }:any) {
  const contentRef = useRef<any>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div>
      <div
        onClick={onToggle}
        className="d-flex justify-content-between align-items-center py-2 px-2 cursor-pointer"
      >
        <span>{menu.name}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      <div
        ref={contentRef}
        className="submenu-container ps-3 overflow-hidden"
        style={{
          maxHeight: height,
          transition: "max-height 0.3s ease",
        }}
      >
        {menu.subMenu.map((sub:any) => (
          <Nav.Link href={sub.url} key={sub.id} className="py-1">
            {sub.name}
          </Nav.Link>
        ))}
      </div>
    </div>
  );
}
