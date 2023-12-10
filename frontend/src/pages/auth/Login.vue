<template>
  <h1 class="text-xl font-medium text-center">Login</h1>
  <form @submit.prevent="login">
    <div class="mb-3">
      <label for="email" class="leading-7 text-sm">Email:</label>
      <input v-model="email" type="email" name="email"  placeholder="email@exemplo.com" :class="inputClasses">
    </div>
    <div class="mb-3">
      <label for="password" class="leading-7 text-sm">Senha:</label>
      <input v-model="password" type="password" name="password" placeholder="********"
        :class="inputClasses">
    </div>

    <div class="mb-3">
      <button type="submit"
        class="text-red-100 w-full bg-red-300 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg">Login</button>
    </div>
  </form>
</template>
  
<script>
import axios from '@/axios';

export default {
  data() {
    return {
      email: "",
      password: "",
      inputClasses: 'w-full bg-white rounded border border-gray-300 focus:border-red-300 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
    };
  },

  methods: {
    async login() {
      try {
        const response = await axios.post("/login", {
          email: this.email,
          password: this.password
        });

        if (response.data.token) {
          localStorage.setItem('token', response.data.token);

          this.$store.commit('LOGIN');

          this.$router.push('/')
        }
      } catch (error) {
          console.error("Aconteceu um erro:", error)
        if (error.response) {
          console.error("Detalhes:", error.response.data)
        }
      }
    }
  }
};
</script>
