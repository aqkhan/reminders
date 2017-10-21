// Interfacing with states

import { ADD_REMINDER, DEL_REMINDER } from "../constants";
import { bake_cookie, read_cookie } from 'sfcookies';

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
    // Read from cookie
    state = read_cookie('reminders');
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            // Set cookie
            bake_cookie('reminders', reminders);
            return reminders;
        case DEL_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie('reminders', reminders);
            return reminders;
        default:
            return state;
    }
};

export default reminders;