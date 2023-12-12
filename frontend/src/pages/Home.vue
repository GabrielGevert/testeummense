<template>
    <section class="bg-white max-w-xl w-full mt-60 mx-auto border rounded p-5 shadow">
        <div class="text-center">
            <h1 class="text-xl font-bold mb-2">Bem-Vindo</h1>
            <div class="border-b border-gray-300 mx-auto my-4"></div>
            <span class="whitespace-no-wrap">Gostaria primeiramente de agradecer pela oportunidade de participar do processo
                seletivo.</span>
            <br />
            <br />
            <p>
                {{ isLoggedIn ? 'Logado com sucesso, se dirija ao' : 'Para começar a aplicação, por favor,' }}
                <strong class="font-bold">{{ isLoggedIn ? 'Dashboard' : 'registre-se' }}</strong>
                {{ isLoggedIn ? '' : ' ou faça seu ' }}
                <strong class="font-bold">{{ isLoggedIn ? '' : 'login' }}</strong>.
            </p>
        </div>
    </section>
</template>
  
<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['isLoggedIn'])
    }
}
</script>
  