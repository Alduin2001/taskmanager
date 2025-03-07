import TaskAPI from "$lib/api/TaskAPI";
import type { createTaskDto, TaskItem } from "$lib/interfaces/task";
import { writable, get } from "svelte/store";
import { addNotification } from "./NotificationStore";
import { Variants } from "$lib/interfaces/notification";

export const tasks = writable<TaskItem[]>([]);
export const createTasks = writable<createTaskDto[]>([]);
export const isOpenRemove = writable<boolean>(false);

// Функции для локального управления
// Добавить локально в стейт
export const addToLocal = ()=>{
    createTasks.update(state=>([...state,{id:Date.now(),name:'',description:''}]));
}
// Удалить одно локально из стейта
export const removeFromLocal = (id:number)=>{
    createTasks.update(state=>state.filter(task=>task.id != id));
    addNotification({message:"Вы удалили задачу локально",variant:Variants.error});
}
// Обновить одно локально из стейта
export const updateLocal = (id:number,updateTask:createTaskDto)=>{
    createTasks.update(state=>state.map(task=>task.id === id ? {...task,...updateTask} : task));
}

// Открытие модального окна для подтверждения удаления
export const openRemoveModal = ()=>{
    isOpenRemove.set(true);
}
// Закрытие модального окна для подтверждения удаления
export const closeRemoveModal = ()=>{
    isOpenRemove.set(false);
}
// Удалить все локально
export const removeAll = ()=>{
    createTasks.set([]);
    addNotification({message:"Вы удалили все задачи локально",variant:Variants.error});
}

// Добавить задачу в БД
export async function createTask(){
    
    const response = await TaskAPI.create({tasks:get(createTasks)});
    addNotification({message:"Задачи успешно добавлены",variant:Variants.success});
    removeAll();
    console.log(response);
    return response;
}

// Получение задач из БД
export async function getMyTasks():Promise<any>{
    const response = await TaskAPI.getMy();
    tasks.set(response.data.tasks);
    console.log(response);
    return response;
}

// Обновление задачи
export async function updateTask(id:number,data:createTaskDto):Promise<any>{
    const response = await TaskAPI.update(id,data);
    return response;
}

// Обновление статуса задачи
export async function updateStatusTask(id:number,status:boolean):Promise<any>{
    const response = await TaskAPI.updateStatus(id,status);
    return response;
}
// Удаление задачи
export async function removeTask(id:number):Promise<any>{
    const response = await TaskAPI.remove(id);
    if(response){
        tasks.update(state=>state.filter((el)=>el.id!==id));
    }
    response;
}
