import { apiClient } from "$lib/config/apiClient";
import type { createArticleDto } from "$lib/interfaces/article";
import type { AxiosResponse } from "axios";

export default class ArticleAPI{
    // Создание поста
    static async create(data:createArticleDto):Promise<any>{
        try {
            const response = await apiClient.post('/article',data);
            return response;
        } catch (error) {
            return error;
        }
    }
    // Получение постов
    static async getArticles(){
        try {
            const response = await apiClient.get('/article/all');
            return response;
        } catch (error) {
            return error;
        }
    }
    // Получение определённого поста по айди
    static async getArticle(id:number):Promise<any>{
        try {
            const response = await apiClient.get(`/article/${id}`);
            return response;
        } catch (error) {
            return error;
        }
    }
    // Обновление поста
    static async update(id:number,data:createArticleDto):Promise<any>{
        try {
            const response:AxiosResponse = await apiClient.patch(`/article/${id}`,data);
            return response;
        } catch (error) {
            return error;            
        }
    }
    // Удаление поста
    static async remove(id:number){
        try {
            const response = await apiClient.delete(`/article/${id}`);
            return response;
        } catch (error) {
            return error;
        }
    }
}