<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useUserStore } from '../store'
import { storeToRefs } from 'pinia';

const router = useRouter()
const useUser = useUserStore()
const { user } = storeToRefs(useUser)
const { logoutUser } = useUser

const handledLogout = async () => {
    try {
        const resp = await logoutUser()
        if (resp.email === null) {
            return router.push('/login')
        }
    } catch (error) {
        console.log(error);
    }
}

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-black">
        <div class="container-fluid">
            <div class="navbar-brand">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-if="user != null" class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/">Auth</RouterLink>
                    </li>
                    <li v-if="user == null" class="nav-item">
                        <RouterLink class="nav-link" to="/login">Login</RouterLink>
                    </li>
                    <li v-if="user != null" class="nav-item">
                        <RouterLink class="nav-link" to="/perfil">Perfil</RouterLink>
                    </li>
                    <li v-if="user == null" class="nav-item">
                        <RouterLink class="nav-link" to="/register">Register</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                <form @submit.prevent="handledLogout" v-if="user != null" class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-danger" type="submit">Logout</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style></style>