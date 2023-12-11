<template>
    <section class="bg-white min-w-xl max-w-5xl mt-60 mx-auto border rounded p-5 shadow font-normal">
        <div class="text-center">
            <h1 class="text-xl font-semibold mb-4">Dashboard</h1>
            <div class="border-b border-gray-300 mx-auto my-4"></div>

            <div class="font-medium">
                <div class="flex justify-between mb-4">
                    <h1 class="font-medium mb-4">Usuários</h1>
                    <button @click="showModalUser"
                        class="bg-green-500 hover:bg-green-600 text-white font-normal py-2 px-4 rounded">Adicionar
                        Usuário</button>
                </div>
                <table class="table-fixed w-full">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 border w-10">ID</th>
                            <th class="px-4 py-2 border w-32">Nome</th>
                            <th class="px-4 py-2 border w-52">Email</th>
                            <th class="px-4 py-2 border w-24">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="px-4 py-2 whitespace-pre-line break-all border">01</td>
                            <td class="px-4 py-2 whitespace-pre-line break-all border">Gabriel Gevert</td>
                            <td class="px-4 py-2 whitespace-pre-line break-all border">gevertlolz@gmail.com</td>
                            <td class="px-4 py-2 border">
                                <div class="flex justify-between">
                                    <button
                                        class="bg-blue-500 hover:bg-blue-600 text-white font-normal py-1 px-2 rounded">Editar</button>
                                    <button
                                        class="bg-red-500 hover:bg-red-600 text-white font-normal py-1 px-2 rounded">Deletar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
            <userModal v-show="userModalVisible" @close="closeModalUser" /> 
    </section>
</template>

<script>
import userModal from '../components/AddUserModal.vue';

export default {
    components: {
        userModal,
    },
    data() {
        return {
            userModalVisible: false,
        };
    },
    methods: {
        showModalUser() {
            this.userModalVisible = true;
        },
        closeModalUser() {
            this.userModalVisible = false;
        }
    }
};
</script>
  