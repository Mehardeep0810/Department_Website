import { useState } from "react";
import "../styles/Events.css";

/* =======================
   EventCard Component
   ======================= */
function EventCard({ event, onRegister }) {
  return (
    <div className="event-card">
      <div
        className="event-image"
        style={{ backgroundImage: `url(${event.image})` }}
      ></div>

      <div className="event-content">
        <p className="event-date">{event.date}</p>
        <h3>{event.title}</h3>
        <p className="event-desc">{event.description}</p>

        {/* Conditional Rendering */}
        <button
          className={`register-btn ${
            event.registered ? "registered" : "not-registered"
          }`}
          onClick={onRegister}
          disabled={event.registered}
        >
          {event.registered ? "Registered" : "Register"}
        </button>
      </div>
    </div>
  );
}

/* =======================
   Events Page
   ======================= */
function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Web Development Workshop",
      date: "January 5, 2026",
      description: "Learn HTML, CSS, JavaScript and React basics.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      registered: false
    },
    {
      id: 2,
      title: "AI & ML Seminar",
      date: "January 8, 2026",
      description: "Introduction to Artificial Intelligence concepts.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
      registered: false
    },
    {
      id: 3,
      title: "Cyber Security Talk",
      date: "January 12, 2026",
      description: "Learn about cyber attacks and security measures.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
      registered: false
    },
    {
      id: 4,
      title: "Hackathon 2026",
      date: "January 20, 2026",
      description: "24-hour coding competition for students.",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
      registered: false
    }
  ]);

  // Event Handling with Confirmation
  const handleRegister = (index) => {
    const confirmRegister = window.confirm(
      "Do you want to register for this event?"
    );

    if (confirmRegister) {
      const updatedEvents = [...events];
      updatedEvents[index].registered = true;
      setEvents(updatedEvents);
    }
  };

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <h1>Department Events & Activities</h1>
        <p>
          Stay updated with the latest workshops, seminars, hackathons and
          technical events organized by the department.
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <h2 className="section-title">Upcoming Events</h2>

        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              onRegister={() => handleRegister(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events;