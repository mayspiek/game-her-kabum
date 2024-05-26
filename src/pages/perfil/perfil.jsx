import React, { useState } from 'react';
import NavBar from '../../components/navbar/NavBar';
import './style.css';

export function Perfil() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const events = [
    { date: '01/05/2024', title: 'Campeonato de Fifa', description: 'Junte-se a nós para um emocionante campeonato de FIFA na plataforma Game.Her!' },
    { date: '15/07/2024', title: 'Mulheres no Game', description: 'Hackathon de criação de soluções para mulheres no game e na tecnologia.' },
    { date: '20/05/2024', title: 'Workshop de Game', description: 'Aprenda mais sobre o incrível mundo dos jogos.' },
  ];

  // Função para obter os dias do mês
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Função para obter o primeiro dia da semana do mês
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  // Função para gerar o calendário
  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const calendarDays = [];

    // Preencher os dias vazios antes do primeiro dia do mês
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null);
    }

    // Preencher os dias do mês
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }

    // Preencher os dias vazios após o último dia do mês
    while (calendarDays.length % 7 !== 0) {
      calendarDays.push(null);
    }

    return calendarDays;
  };

  // Função para mudar o mês
  const handleMonthChange = (increment) => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth + increment;
      if (newMonth < 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      } else if (newMonth > 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      }
      return newMonth;
    });
  };

  // Função para selecionar um dia
  const handleDaySelect = (day) => {
    setSelectedDate(day);
  };

  const calendarDays = generateCalendar();

  return (
    <div className="perfil-container">
      <NavBar />
      <div className="perfil-section-container">
        <div className="perfil-section">
          <h2>Perfil</h2>
          <h3>Calendário de eventos</h3>
          <div className="calendar-container">
            <div className="calendar-header">
              <div className="month-selector">
                <span>{['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'][currentMonth]} {currentYear}</span>
                <button onClick={() => handleMonthChange(-1)}><i className="fas fa-angle-left"></i></button>
                <button onClick={() => handleMonthChange(1)}><i className="fas fa-angle-right"></i></button>
              </div>
              <div className="weekdays">
                <span>SEG</span>
                <span>TER</span>
                <span>QUA</span>
                <span>QUI</span>
                <span>SEX</span>
                <span>SÁB</span>
                <span>DOM</span>
              </div>
            </div>
            <div className="calendar-grid">
              {calendarDays.map((day, index) => (
                <div key={index} className={`calendar-cell ${day === selectedDate ? 'selected' : ''}`} onClick={() => handleDaySelect(day)}>
                  {day !== null ? day : ''}
                  {/* Adicionar um conteúdo específico para cada dia*/}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="favorites-section">
          <h2>Favoritos</h2>
          <ul className="favorites-list">
            {events.map((event) => {
              const [day, month, year] = event.date.split('/').map(Number);
              const eventDate = new Date(year, month - 1, day);

              return (
                <li key={event.date} className={`favorite-item ${selectedDate === eventDate ? 'selected' : ''}`} onClick={() => handleDaySelect(eventDate)}>
                  <div className="event-date">
                    {eventDate.getDate()}
                    {' '}
                    {['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'][eventDate.getMonth()]}
                  </div>
                  <div className="event-info">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                  <i className="fas fa-heart"></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>

  );
}
