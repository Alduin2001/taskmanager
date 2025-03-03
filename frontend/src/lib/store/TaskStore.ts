import TaskAPI from "$lib/api/TaskAPI";
import type { createTaskDto, TaskItem } from "$lib/interfaces/task";
import { writable, get } from "svelte/store";

export const tasks = writable<TaskItem[]>([]);
export const createTasks = writable<createTaskDto[]>([]);

// Функции для локального управления
export const addToLocal = ()=>{
    createTasks.update(state=>([...state,{id:Date.now(),name:'',description:''}]));
}
export const removeFromLocal = (id:number)=>{
    createTasks.update(state=>state.filter(task=>task.id != id))
}
export const updateLocal = (id:number,updateTask:createTaskDto)=>{
    createTasks.update(state=>state.map(task=>task.id === id ? {...task,...updateTask} : task));
}
export const removeAll = ()=>{
    createTasks.set([]);
}

export async function createTask(){
    
    const response = await TaskAPI.create({tasks:get(createTasks)});
    console.log(response);
    return response;
}

export async function getTasks():Promise<any>{
    const response = await TaskAPI.get();
    return response;
}

export async function updateTask(id:number,data:createTaskDto):Promise<any>{
    const response = await TaskAPI.update(id,data);
    return response;
}

export async function removeTask(id:number):Promise<any>{
    const response = await TaskAPI.remove(id);
    response;
}
