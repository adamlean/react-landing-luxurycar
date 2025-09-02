import { useState } from "react";
import "./CTA.css";

const CTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-text">
          <h2>Book your luxury car detailing today</h2>
          <p>
            Click the link bellow. Fill out the details and we’ll get back to you in less than 24 hours.
          </p>
          <a href="#" className="cta-btn">
            Get a quote now
          </a>
        </div>
        <div className="cta-image">
          <img src="/public/assets/img/video.png" alt="Luxury car" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
