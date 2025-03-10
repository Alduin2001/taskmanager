import ArticleAPI from "$lib/api/ArticleAPI";
import type { ArticleItem, createArticleDto } from "$lib/interfaces/article";
import { writable } from "svelte/store";

// Создание стейтов
export const articles = writable<ArticleItem[]>([]);

// Создать пост
export async function createArticle(data:FormData):Promise<any>{
    const response = await ArticleAPI.create(data);
    console.log(response);
    return response;
}

// Получить все посты
export async function getArticles():Promise<any>{
    const response = await ArticleAPI.getArticles();
    articles.set(response.data?.articles);
    return response;
}

// Получить один пост по айди
export async function getArticle(id:number):Promise<any>{
    const response = await ArticleAPI.getArticle(id);
    console.log(response);
    return response;
}

// Обновить пост по айди
export async function updateArticle(id:number,data:createArticleDto):Promise<any>{
    const response = await ArticleAPI.update(id,data);
    return response;
}

// Удалить пост по айди
export async function deleteArticle(id:number):Promise<any>{
    const response = await ArticleAPI.remove(id);
    if(response){
        articles.update(state=>state.filter(el=>el.id!==id));
    }
    return response;
}

