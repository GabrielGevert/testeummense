<template>
    <transition name="modal-fade">
        <div class="fixed inset-0 bg-black bg-opacity-30 flex items-center -top-96">
            <div class="bg-white shadow-2xl flex flex-col rounded-md max-w-xl w-full top-1 mx-auto">
                <header class="py-3 px-2 flex justify-between border-b border-gray-200 text-red-500 relative">
                    <slot name="header" class="text-medium">
                        Remover usuário
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
                        <div class="mb-3">
                            <p class="leading-7 text-sm">Você tem certeza que deseja remover o usuário
                                <strong class="font-bold">{{ user.name }}</strong>
                                do ID
                                <strong class="font-bold">{{ user.id }}</strong>
                                e do e-mail
                                <strong class="font-bold">{{ user.email }}</strong>
                                ?
                            </p>
                        </div>
                        <div class="mb-3 mt-16 text-center">
                            <button @click="deleteUser"
                                class="text-white w-2/4 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg">
                                Remover Usuário
                            </button>
                        </div>
                    </slot>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
import axios from '@/axios';
export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    methods: {
        async deleteUser() {
            const id = this.user.id
            try {
                await axios.delete("/users/" + id)
                alert("Usuário removido com sucesso!");
                this.$emit('refreshUsers')
                this.$emit('close');
            } catch (error) {
                console.error("Um erro aconteceu na tentativa de excluir o usuário: ", error)
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