export interface ArticleI{
    id:number
    header:string,
    image:string
    body:string
    createdAt:string
    author:{
        name:string
        surname:string
    }
}