import { apiClient } from "$lib/config/apiClient";
import { Variants } from "$lib/interfaces/notification";
import type { createUserDto, loginUserDto } from "$lib/interfaces/user";
import { addNotification } from "$lib/store/NotificationStore";


export default class UserAPI{
    // Регистрация
    static async create(data:createUserDto):Promise<any>{
        try {
            const response = await apiClient.post('/user/create',data);
            return response;
        } catch (error) {
            return error;
        }
    }
    // Вход в личный кабинет
    static async login(data:loginUserDto):Promise<any>{
        try {
            const response = await apiClient.post('/auth/create',data);
            return response;
        } catch (error) {
            addNotification({message:"Не удалось войти",variant:Variants.error});
            return error;
        }
    }
    // Выход из аккаунта
    static async logout(){
        try {
            const response = await apiClient.post('/auth/logout',{});
            return response;
        } catch (error) {
            return error;
        }
    }
}