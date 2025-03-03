import { apiClient } from "$lib/config/apiClient";
import type { createTaskDto,TasksI } from "$lib/interfaces/task";

export default class TaskAPI{
    static async create(data:TasksI):Promise<any>{
        try {
            const response = await apiClient.post('/task',data);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async get():Promise<any>{
        try {
            const response = await apiClient.get('/task');
            return response;
        } catch (error) {
            return error;
        }
    }
    static async update(id:number,data:createTaskDto){
        try {
            const response = await apiClient.patch(`/task/${id}`,data);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async remove(id:number):Promise<any>{
        try {
            const response = await apiClient.delete(`/task/${id}`);
            return response;
        } catch (error) {
            return error;
        }
    }

}