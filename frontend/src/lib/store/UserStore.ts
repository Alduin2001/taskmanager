import { writable } from 'svelte/store';
import UserAPI from '$lib/api/UserAPI';
import type { createUserDto, loginUserDto, UserItem } from '$lib/interfaces/user';
import { addNotification } from './NotificationStore';
import { Variants } from '$lib/interfaces/notification';


export const users = writable<UserItem[]>([]);
export const isAuth = writable<boolean>(false);
export const role = writable<number>(0);

// Регистрация
export async function createUser(data: createUserDto) {
    const response = await UserAPI.create(data);
    console.log(response);
    addNotification({message:"Пользователь создан",variant:Variants.success});
    return response;
}

// Вход в профиль
export async function loginUser(data: loginUserDto) {
    const response = await UserAPI.login(data);
    if (response) {
        isAuth.update(() => true);
        role.update(()=>response.data.role);
        addNotification({message:"Вы успешно зашли в аккаунт",variant:Variants.success});
    }
    return response;
}

// Выход из профиля
export async function logoutUser() {
    const response = await UserAPI.logout();
    if (response) {
        isAuth.update(() => false);
        addNotification({message:"Вы успешно вышли из аккаунта",variant:Variants.success});
    }
    return response;
}