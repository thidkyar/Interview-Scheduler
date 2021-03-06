import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";

import DayList from "./DayList";
import Appointment from "components/Appointment/index";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";

export default function Application(props) {
    const [state, setState] = useState({
        day: "Monday",
        days: [],
        appointments: {},
        interviewers: {}
    });

    const setDay = day => setState({ ...state, day });
    const setDays = days => setState(prev => ({ ...prev, days }));

    useEffect(() => {
        Promise.all([
            Promise.resolve(axios.get("/api/days")),
            Promise.resolve(axios.get("/api/appointments")),
            Promise.resolve(axios.get("/api/interviewers"))
        ]).then(all => {
            const days = all[0].data;
            const appointments = all[1].data;
            const interviewers = all[2].data;
            setState(prev => ({
                ...prev,
                days,
                appointments,
                interviewers
            }));
        });
    }, []);

    const appointments = getAppointmentsForDay(state, state.day).map(
        appointment => {
            const interview = getInterview(state, appointment.interview);
            return (
                <Appointment
                    key={appointment.id}
                    id={appointment.id}
                    time={appointment.time}
                    interview={interview}
                />
            );
        }
    );
    return (
        <main className="layout">
            <section className="sidebar">
                <img
                    className="sidebar--centered"
                    src="images/logo.png"
                    alt="Interview Scheduler"
                />
                <hr className="sidebar__separator sidebar--centered" />
                <nav className="sidebar__menu">
                    <DayList
                        days={state.days}
                        day={state.day}
                        setDay={day => setDay(day)}
                    />
                </nav>
                <img
                    className="sidebar__lhl sidebar--centered"
                    src="images/calendar.png"
                    alt="Calendar"
                    style={{ maxWidth: "48px", maxHeight: "48px" }}
                />
            </section>
            <section className="schedule">
                {appointments}
            </section>
        </main>
    );
}
