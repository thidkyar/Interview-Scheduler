export function getAppointmentsForDay(state, day) {
    const filteredAppointments = [];
    state.days.forEach(stateDay => {
        if (stateDay.name === day) {
            stateDay.appointments.forEach(appointmentId => {
                filteredAppointments.push(state.appointments[appointmentId]);
            });
        }
    });
    return filteredAppointments;
}

export function getInterview(state, interview)  {
  let result = null;
  if (interview) {
    result = {
        student: interview.student,
        interviewer: state.interviewers[interview.interviewer]
      };
  }
  return result;
}
