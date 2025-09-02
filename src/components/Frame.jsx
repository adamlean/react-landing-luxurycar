import { useState } from "react";
import "./Frame.css";

const Frame = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="frame">
      <div className="frame-wrapper">
        <img src="/assets/img/frame_1.png" alt="frame image" />
      </div>
    </section>
  );
};

export default Frame;