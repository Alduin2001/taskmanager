export interface createArticleDto{
    header:string
    body:string
}

export interface ArticleItem{
    id:number
    header:string
    image:string
    createdAt:string | Date
    author:{
        name:string
        surname:string
    }
}

export interface SingleArticleItem extends ArticleItem{
    body:string
}

export interface ApiResponse<T>{
    data:T
}