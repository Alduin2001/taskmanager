import TaskAPI from "$lib/api/TaskAPI";
import type { createTaskDto, TaskItem, updateTaskDto } from "$lib/interfaces/task";
import { writable, get } from "svelte/store";
import { addNotification } from "./NotificationStore";
import { Variants } from "$lib/interfaces/notification";
import { add } from "date-fns";

export const tasks = writable<TaskItem[]>([]);
export const createTasks = writable<createTaskDto[]>([]);
export const isOpenRemove = writable<boolean>(false);
export const isOpenEdit = writable<boolean>(false);
export const selectedId = writable<number>(0);
export const editModal = writable<updateTaskDto>({name:"",description:""});
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
export const openRemoveModal = (id:number)=>{
    selectedId.set(id);
    isOpenRemove.set(true);
}
// Закрытие модального окна для подтверждения удаления
export const closeRemoveModal = ()=>{
    isOpenRemove.set(false);
}
// Открытие модального окна для редактирования
export const openEditModal = (id:number,data:updateTaskDto)=>{
    isOpenEdit.set(true);
    selectedId.set(id);
    editModal.set({name:data.name,description:data.description});
}
// Закрытие модального окна для редактирования
export const closeEditModal = ()=>{
    isOpenEdit.set(false);
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
export async function updateTask(id:number,data:updateTaskDto):Promise<any>{
    const response = await TaskAPI.update(id,data);
    if(response){
        tasks.update(state=>state.map(task=>task.id === id ? {...task,...data} : task));
    }
    return response;
}

// Обновление статуса задачи
export async function updateStatusTask(id:number,status:boolean):Promise<any>{
    const response = await TaskAPI.updateStatus(id,status);
    return response;
}
// Удаление задачи
export async function removeTask():Promise<any>{
    const response = await TaskAPI.remove(get(selectedId));
    if(response){
        tasks.update(state=>state.filter((el)=>el.id!=get(selectedId)));
    }
    response;
}
