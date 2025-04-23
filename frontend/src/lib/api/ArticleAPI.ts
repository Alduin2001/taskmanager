import { apiClient } from "$lib/config/apiClient";
import type { ApiResponse, createArticleDto } from "$lib/interfaces/article";
import { AxiosError,type AxiosResponse } from "axios";

export default class ArticleAPI{
    // Создание поста
    static async create(data:FormData):Promise<ApiResponse<any>>{
        try {
            const response = await apiClient.post('/article',data);
            return response;
        } catch (error) {
            if(error instanceof AxiosError){
                throw new Error('Не удалось создать');
            }
            throw error;
        }
    }
    // Получение постов
    static async getArticles():Promise<ApiResponse<any>>{
        try {
            const response:AxiosResponse = await apiClient.get('/article/all');
            return response;
        } catch (error) {
            if(error instanceof AxiosError){
                throw new Error('Не удалось достать посты');
            }
            throw error;
        }
    }
    // Получение определённого поста по айди
    static async getArticle(id:number):Promise<ApiResponse<any>>{
        try {
            const response = await apiClient.get(`/article/${id}`);
            return response;
        } catch (error) {
            if(error instanceof AxiosError){
                throw new Error('Не удалось найти');
            }
            throw error;
        }
    }
    // Обновление поста
    static async update(id:number,data:createArticleDto):Promise<ApiResponse<any>>{
        try {
            const response:AxiosResponse = await apiClient.patch(`/article/${id}`,data);
            return response;
        } catch (error) {
            if(error instanceof AxiosError){
                throw new Error('Не удалось обновить');
            }
            throw error;
        }
    }
    // Удаление поста
    static async remove(id:number):Promise<ApiResponse<any>>{
        try {
            const response = await apiClient.delete(`/article/${id}`);
            return response;
        } catch (error) {
            if(error instanceof AxiosError){
                throw new Error('Не удалось удалить');
            }
            throw error;
        }
    }
}