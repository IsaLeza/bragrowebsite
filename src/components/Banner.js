import React, { useEffect, useState } from 'react';


const Banner = () => {
  const calculateTimeLeft = () => {
    const deadline = new Date('Nov 30, 2024 11:59:59').getTime();
    const now = new Date().getTime();
    const timeLeft = deadline - now;

    if (timeLeft < 0) {
      return {
        expired: true
      };
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      expired: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pscreen-banner">
      <h1>Pregunta por nuestros paquetes</h1>
      <h1 style={{color:"FFF"}}>Por tiempo limitado</h1>
      <div id="countdown">
        {timeLeft.expired ? (
          "La oferta ha terminado"
        ) : (
          `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
        )}
      </div>
    </div>
  );
};

export default Banner;
