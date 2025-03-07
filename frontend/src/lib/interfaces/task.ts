export interface createTaskDto{
    id:number
    name:string
    description:string
}

export interface updateTaskDto{
    name:string,
    description:string
}

export interface TasksI{
    tasks:createTaskDto[]
}

export interface TaskItem{
    id:number
    name:string
    description:string
    createdAt:string
    is_completed:boolean
}

export interface SearchTaskI{
    
}