// Action Creation

import { ADD_REMINDER, DEL_REMINDER } from "../constants";

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text: text,
        dueDate: dueDate
    };
    return action;
};

export const deleteReminder = (id) => {
    const action = {
      type: DEL_REMINDER,
      id: id
    };
    return action;
};