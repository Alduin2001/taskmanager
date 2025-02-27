import { writable } from 'svelte/store';
import UserAPI from '$lib/api/UserAPI';
import type { createUserDto, loginUserDto, UserItem } from '$lib/interfaces/user';

const users = writable<UserItem[]>([]);

const isAuth = writable<boolean>(false);

isAuth.set(false);

async function createUser(data: createUserDto) {
    const response = await UserAPI.create(data);
    console.log(response);
    return response;
}

async function loginUser(data:loginUserDto){
    const response = await UserAPI.login(data);
    if(response){
        isAuth.set(true);
    }
    return response;
}

async function logoutUser(){
    const response = await UserAPI.logout();
    if(response){
        isAuth.set(false);
    }
    return response;
}

export let userStore = {
    users,
    isAuth,
    createUser,
    loginUser,
    logoutUser
}