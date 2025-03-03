import type { NotificationI } from "$lib/interfaces/notification";
import { writable } from "svelte/store";

export const notification = writable<NotificationI[]>([]);
