<template>
  <section class="bg-white max-w-xl w-full mt-60 mx-auto border rounded p-5 shadow">
    <h1 class="text-xl font-medium text-center">Registro</h1>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="name" class="leading-7 text-sm">Nome completo:</label>
        <input required type="name" name="name" id="name" placeholder="Digite seu nome" v-model="name"
          :class="inputClasses">
      </div>
      <div class="mb-3">
        <label for="email" class="leading-7 text-sm">Email:</label>
        <input required type="email" name="email" id="email" placeholder="email@exemplo.com" v-model="email"
          :class="inputClasses">
      </div>
      <div class="mb-3">
        <label for="password" class="leading-7 text-sm">Senha:</label>
        <input required type="password" name="password" id="password" placeholder="********" v-model="password"
          :class="inputClasses">
      </div>
      <div class="mb-3">
        <label for="password_confirmation" class="leading-7 text-sm">Confirme sua senha:</label>
        <input required type="password" name="password_confirmation" id="password_confirmation" placeholder="********"
          v-model="passwordConfirmation" :class="inputClasses">
        <p v-if="emailError" class="text-red-500 text-center my-4 font-bold">{{ emailError }}</p>
        <p v-if="passwordError" class="text-red-500 text-center my-4 font-bold">{{ passwordError }}</p>
      </div>
      <div class="mb-3">
        <button type="submit"
          class="text-red-100 w-full bg-red-300 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg">Registrar</button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from '@/axios';

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      passwordError: "",
      emailError: "",
      inputClasses:
        'w-full bg-white rounded border border-gray-300 focus:border-red-300 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out',
    };
  },

  methods: {
    async register() {
      if (this.password !== this.passwordConfirmation) {
        this.passwordError = "As senhas não conferem";
        return;
      }

      if (this.password.length < 6) {
        this.passwordError = "A senha deve ter pelo menos 6 caracteres";
        return;
      }

      try {
        const response = await axios.post("/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.passwordError = ""; // limpar msg erro
        alert("Registrado com sucesso! Você será redirecionado para a página de login.");
        this.$router.push('/auth/login');
      } catch (error) {
        this.emailError = "E-mail já cadastrado em nossa base de dados"
        this.passwordError = ""
        console.error("Aconteceu um erro:", error);
        if (error.response) {
          console.error("Detalhes:", error.response.data);
        }
      }
    },
  },
};
</script>
