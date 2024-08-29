// Placeholder to host a component
import React from 'react';

const Hours = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado

  let openHours = '';

  if (dayOfWeek === 0 || dayOfWeek === 6) { // sábado o domingo
    openHours = (
      <div>
        <p>Sábado y domingo</p>
        <p>9:00 AM - 8:00 PM</p>
      </div>
    );
  } else { // lunes a viernes
    openHours = (
      <div>
        <p>Lunes a viernes</p>
        <p>10:00 AM - 4:00 PM</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Horas de apertura</h2>
      {openHours}
    </div>
  );
};

export default Hours;