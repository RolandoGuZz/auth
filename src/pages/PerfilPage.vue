<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store'

const useUser = useUserStore()
const { user } = storeToRefs(useUser)
</script>

<template>
    <div class="text-center">
        <h3 class="display-4 text-primary"> Welcome to <b>Perfil Page</b> </h3>
        <img src="/img/user.png" alt="User Icon" class="img-fluid rounded-circle" style="width: 150px; height:150px;">
    </div>
    <div class="text-center mt-3"> {{ user.email }}</div>
</template>