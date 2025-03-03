import { Variants, type NotificationI } from "$lib/interfaces/notification";
import { writable } from "svelte/store";

export const notification = writable<NotificationI[]>([]);

export function addNotification(data:NotificationI){
    notification.update(state=>[...state,data]);
}
