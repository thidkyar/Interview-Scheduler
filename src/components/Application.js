import React from "react";

import "components/Application.scss";

export default function Application(props) {
    return (
        <main className="layout">
            <section className="sidebar">
                <img
                    className="sidebar--centered"
                    src="images/logo.png"
                    alt="Interview Scheduler"
                />
                <hr className="sidebar__separator sidebar--centered" />
                <nav className="sidebar__menu"></nav>
                <img
                    className="sidebar__lhl sidebar--centered"
                    src="images/calendar.png"
                    alt="Calendar"
                    style={{maxWidth: "48px", maxHeight: "48px"}}
                />
            </section>
            <section className="schedule">
                {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
            </section>
        </main>
    );
}
