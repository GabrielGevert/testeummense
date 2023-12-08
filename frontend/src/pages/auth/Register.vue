<template>
    <h1 class="text-xl font-medium text-center">Registro</h1>
    <form>
        <div class="mb-3">
            <label for="name" class="leading-7 text-sm">Nome completo:</label>
            <input type="name" name="name" id="name" placeholder="Digite seu nome" class="w-full bg-white rounded border border-gray-300 focus:border-red-300 focus:ring-2 focus:ring-red-200
           text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="mb-3">
            <label for="email" class="leading-7 text-sm">Email:</label>
            <input type="email" name="email" id="email" placeholder="email@exemplo.com" class="w-full bg-white rounded border border-gray-300 focus:border-red-300 focus:ring-2 focus:ring-red-200
       text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="mb-3">
            <label for="password" class="leading-7 text-sm">Senha:</label>
            <input type="password" name="password" id="password" placeholder="********" class="w-full bg-white rounded border border-gray-300 focus:border-red-300 focus:ring-2 focus:ring-red-200
       text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="mb-3">
            <label for="password_confirmation" class="leading-7 text-sm">Confirme sua senha:</label>
            <input type="password" name="password_confirmation" id="password_confirmation" placeholder="********" class="w-full bg-white rounded border border-gray-300 focus:border-red-300 focus:ring-2 focus:ring-red-200
       text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="mb-3">
            <button
                class="text-red-100 w-full bg-red-300 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg">Registrar</button>
        </div>
    </form>
</template>