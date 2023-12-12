<template>
  <transition name="modal-fade">
    <div class="fixed inset-0 bg-black bg-opacity-30 flex items-center  -top-96">
      <div class="bg-white shadow-2xl flex flex-col rounded-md max-w-xl w-full top-1 mx-auto">
        <header class="py-3 px-2 flex justify-between border-b border-gray-200 text-teal-500 relative">
          <slot name="header" class="text-medium">
            Adicionar usuário
          </slot>
          <button type="button" class="absolute -top-0 -right-1 p-2 cursor-pointer bg-transparent border-none"
            @click="close" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <section class="p-6 relative" id="modalDescription">
          <slot name="body">
            <form @submit.prevent="addUser">
              <div class="mb-3">
                <label class="leading-7 text-sm">Nome:</label>
                <input v-model="name" required type="name" name="email" placeholder="Digite o nome do usuário"
                  :class="inputClasses">
              </div>
              <div class="mb-3">
                <label class="leading-7 text-sm">Email:</label>
                <input v-model="email" required type="email" name="email" placeholder="email@exemplo.com"
                  :class="inputClasses">
              </div>
              <div class="mb-3">
                <label class="leading-7 text-sm">Senha:</label>
                <input v-model="password" required type="password" name="password" placeholder="********"
                  :class="inputClasses">
              </div>
              <p v-if="passwordError" class="text-red-500 mb-5">{{ passwordError }}</p>
              <div class="mb-3 text-center">
                <button type="submit"
                  class="text-red-100 w-2/4 bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-400 rounded text-lg">Adicionar
                  usuário</button>
              </div>
            </form>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from '@/axios';

export default {

  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordError: "",
      inputClasses: 'w-full bg-white rounded border border-gray-300 focus:border-teal-300 focus:ring-2 focus:ring-teal-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
    };
  },
  methods: {
    async addUser() {
      if (this.password.length < 6) {
        this.passwordError = "A senha deve ter pelo menos 6 caracteres";
        return;
      }

      try {
        await axios.post("/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        alert("Usuário adicionado com sucesso!");
        this.$emit('refreshUsers')
        this.$emit('close');
      } catch (error) {
        console.error("Aconteceu um erro:", error);

        if (error.response) {
          console.error("Detalhes:", error.response.data);
        }
      }
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}
</style>
