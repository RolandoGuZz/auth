<script setup>
import { computed, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router'
import { useUserStore } from '../store'
import Alert from '../components/Alert.vue'
import { storeToRefs } from 'pinia';

const router = useRouter()
const store = useUserStore();

const { error } = storeToRefs(store)
const { loginUser } = store;

const email = ref('kindlynova@gmail.com')
const password = ref('12345678')

const isActive = computed(() => {
    if (email.value.length > 4 && password.value.length >= 4) return false;
    return true;
})

const handledSubmit = async () => {
    try {
        const resp = await loginUser(email.value, password.value)
        if (resp.email && resp.uid) {
            return router.push('/')
        }
        email.value = password.value = '';
    } catch (errores) {
        console.log({ 'ErrorLogin': errores });
    }
}

</script>

<template>
    <div class="row">
        <div class="container d-flex justify-content-center mt-5">
            <div class="card rounded-4" style="width: 450px;">
                <div class="card-body">
                    <h1 class="text-center text-primary display-6">Login</h1>
                    <hr class="border border-primary border-2 rounded">
                    <Alert v-if="error" :error="error"></Alert>
                    <form @submit.prevent="handledSubmit">
                        <div class="form-floating mb-3">
                            <input id="correo" class="form-control" type="email" placeholder="kindly@gmail.com"
                                name="email" v-model="email">
                            <label for="correo" class="text-primary">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input id="password" class="form-control" type="password" name="password"
                                v-model="password">
                            <label for="password" class="text-primary">Password</label>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary p-2" :disabled="isActive">Login</button>
                        </div>
                    </form>
                    <hr class="border border-primary border-2 rounded">
                    <div class="text-center mt-4">
                        <small class="text-dark">¿No tienes una cuenta?
                            <RouterLink class="text-primary fw-bold" to="/register">Regístrate aquí</RouterLink>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
