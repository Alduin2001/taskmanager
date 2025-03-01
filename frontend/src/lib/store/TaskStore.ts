import type { TaskItem } from "$lib/interfaces/task";
import { writable } from "svelte/store";

export const tasks = writable<TaskItem[]>([]);
