import { apiClient } from "$lib/config/apiClient";
import type { createTaskDto,SearchTaskI,TasksI, updateTaskDto } from "$lib/interfaces/task";
import type { AxiosError, AxiosResponse } from "axios";

export default class TaskAPI{
    // Создание задач
    static async create(data:TasksI):Promise<any>{
        try {
            const response = await apiClient.post('/task',data);
            return response;
        } catch (error) {
            return error;
        }
    }
    // Отправка запроса на выборку всех моих задач
    static async getMy():Promise<any>{
        try {
            const response = await apiClient.get('/task/my_all');
            return response;
        } catch (error) {
            return error;
        }
    }
    // Отправка запроса на обновление задачи
    static async update(id:number,data:updateTaskDto){
        try {
            const response = await apiClient.patch(`/task/${id}`,data);
            return response;
        } catch (error) {
            return error;
        }
    }
    // Отправка запроса на обновление статуса задачи
    static async updateStatus(id:number,status:boolean){
        try {
            const response = await apiClient.patch(`/task/complete_task/${id}`,{is_completed:status});
            return response;
        } catch (error) {
            return error;
        }
    }
    // Поиск задач по параметрам
    static async search(data:SearchTaskI):Promise<any>{
        try {

            const response = await apiClient.get(`/task/filter_user_tasks`,{
                params:{
                    name:data.name,
                    startDate:data.startDate,
                    endDate:data.endDate
                }
            });
            return response;
        } catch (error) {
            return error;
        }
    }
    // Отправка запроса на удаление задачи
    static async remove(id:number):Promise<any>{
        try {
            const response = await apiClient.delete(`/task/${id}`);
            return response;
        } catch (error) {
            return error;
        }
    }

}