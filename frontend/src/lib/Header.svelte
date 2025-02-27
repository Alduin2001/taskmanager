<script lang="ts">
import {Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler} from '@sveltestrap/sveltestrap';
import { userStore } from './store/UserStore';
import { get } from 'svelte/store';
let isOpen:boolean = false;
console.log(get(userStore.isAuth));

const logout = async ()=>{
    
}
</script>

<Navbar expand="lg" class="shadow-lg mt-2">
    <NavbarBrand>Logo</NavbarBrand>
    <NavbarToggler aria-controls="burger" onclick={()=>isOpen = !isOpen}></NavbarToggler>

    <Collapse {isOpen} expand="lg" id="burger" navbar>
        
        <Nav class="ms-auto me-2">
            <Dropdown class="me-2">
                <DropdownToggle class="bg-primary">Основные</DropdownToggle>
                <DropdownMenu end>
                    <DropdownItem href="/">Главная</DropdownItem>
                    <DropdownItem href="/about">О нас</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {#if !get(userStore.isAuth)}
            <Dropdown class="me-2">
                <DropdownToggle class="bg-primary">Аутентификация</DropdownToggle>
                <DropdownMenu end>
                    <DropdownItem href="/auth/register">Регистрация</DropdownItem>
                    <DropdownItem href="/auth/login">Вход</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {:else}
            <Dropdown class="me-2">
                <DropdownToggle class="bg-primary">Личный кабинет</DropdownToggle>
                <DropdownMenu end>
                    <DropdownItem href="/profile">Профиль</DropdownItem>
                    <DropdownItem>Выйти</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {/if}
        </Nav>
    </Collapse>
</Navbar>