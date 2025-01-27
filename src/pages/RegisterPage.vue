<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store'

const email = ref('');
const password = ref('');
const router = useRouter();
const store = useUserStore();

const { registerUser } = store;

const isActive = computed(() => {
    if (email.value.length > 4 && password.value.length >= 4) return false;
    return true;
})

const handledRegister = async () => {
    try {
        await registerUser(email.value, password.value);
        router.push('/login');
    } catch (error) {
        console.error(error);
    }
};

</script>

<template>
    <div class="row">
        <div class="container d-flex justify-content-center mt-5">
            <div class="card rounded-4" style="width: 450px;">
                <div class="card-body">
                    <h1 class="text-center text-primary display-6">Register</h1>
                    <hr class="border border-primary border-2 rounded">
                    <form @submit.prevent="handledRegister">
                        <div class="form-floating mb-3">
                            <input id="correo" class="form-control" type="email" name="email" v-model="email">
                            <label for="correo" class="text-primary">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input id="password" class="form-control" type="password" name="password"
                                v-model="password">
                            <label for="password" class="text-primary">Password</label>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary p-2" :disabled="isActive">Register</button>
                        </div>
                    </form>
                    <hr class="border border-primary border-2 rounded">
                    <div class="text-center mt-4">
                        <small class="text-dark">¿Ya tienes una cuenta?
                            <RouterLink class="text-primary fw-bold" to="/login">Inicia sesión aquí</RouterLink>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>