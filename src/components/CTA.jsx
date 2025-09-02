import { useState } from "react";
import "./Cta.css";

const Cta = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-text">
          <h2>Закажите детейлинг своего роскошного автомобиля уже сегодня</h2>
          <p>
            Перейдите по ссылке ниже. Заполните данные, и мы свяжемся с вами
            менее чем через 24 часа.
          </p>
          <a href="#" className="cta-btn">Получить расчёт прямо сейчас →</a>
        </div>
        <div className="cta-image">
          <img src="/assets/img/video.png" alt="Luxury car" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
