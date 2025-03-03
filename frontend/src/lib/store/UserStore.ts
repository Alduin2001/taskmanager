import { writable } from 'svelte/store';
import UserAPI from '$lib/api/UserAPI';
import type { createUserDto, loginUserDto, UserItem } from '$lib/interfaces/user';


export const users = writable<UserItem[]>([]);
export const isAuth = writable<boolean>(false);
export const role = writable<number>(0);

export async function createUser(data: createUserDto) {
    const response = await UserAPI.create(data);
    console.log(response);
    return response;
}

export async function loginUser(data: loginUserDto) {
    const response = await UserAPI.login(data);
    if (response) {
        isAuth.update(() => true);
        role.update(()=>response.data.role);
    }
    return response;
}

export async function logoutUser() {
    const response = await UserAPI.logout();
    if (response) {
        isAuth.update(() => false);
    }
    return response;
}