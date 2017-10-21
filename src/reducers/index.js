// Interfacing with states

import { ADD_REMINDER, DEL_REMINDER } from "../constants";

const reminder = (action) => {
    let { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
};

const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id );
    console.log('After going through reducer', reminders);
};

const reminders = (state = [], action) => {
    let reminders = null;
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('Reminders as state: ', reminders);
            return reminders;
        case DEL_REMINDER:
            reminders = removeById(state, action.id);
            return reminders;
        default:
            return state;
    }
};

export default reminders;