import { apiClient } from "$lib/config/apiClient";
import type { createArticleDto } from "$lib/interfaces/article";

export default class ArticleAPI{
    static async create(data:createArticleDto):Promise<any>{
        try {
            const response = await apiClient.post('/article',data);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async getArticles(){
        try {
            const response = await apiClient.get('/article/all');
            return response;
        } catch (error) {
            return error;
        }
    }
    static async getArticle(id:number){
        try {
            const response = await apiClient.get(`/article/${id}`);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async update(id:number){
        try {
            
        } catch (error) {
            
        }
    }
    static async remove(){
        try {
            
        } catch (error) {
            
        }
    }
}