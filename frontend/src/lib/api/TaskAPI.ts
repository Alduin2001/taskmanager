import { apiClient } from "$lib/config/apiClient";
import type { createTaskDto } from "$lib/interfaces/task";

export default class TaskAPI{
    static async create(data:createTaskDto[]):Promise<any>{
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


}