
export interface NotificationI{
    message:string,
    variant:Variants
}

export enum Variants{
    success = "success",
    error = "danger",
    warning = "warning"
}