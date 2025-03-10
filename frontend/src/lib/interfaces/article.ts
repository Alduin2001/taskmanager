export interface createArticleDto{
    header:string
    body:string
}

export interface ArticleItem{
    id:number
    header:string
    body:string
    image:string
    createdAt:string
    author:{
        name:string
        surname:string
    }
}

export interface ApiResponse<T>{
    data:T
}