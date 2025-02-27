import { apiClient } from "$lib/config/apiClient";
import type { createUserDto, loginUserDto } from "$lib/interfaces/user";


export default class UserAPI{
    static async create(data:createUserDto){
        try {
            const response = await apiClient.post('/user/create',data);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async login(data:loginUserDto){
        try {
            const response = await apiClient.post('/auth/create',data);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async logout(){
        try {
            const response = await apiClient.post('/auth/logout',{});
            return response;
        } catch (error) {
            return error;
        }
    }
}