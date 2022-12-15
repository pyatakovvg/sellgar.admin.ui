
import type { Event } from 'effector';
import { createEvent } from 'effector';


export const addUsersEvent: Event<IUser[]> = createEvent('add users');
export const deleteUserEvent: Event<IUser> = createEvent('delete user');
export const updateUserEvent: Event<IUser> = createEvent('update user');

export const processEvent: Event<boolean> = createEvent('in process');
