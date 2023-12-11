<template>
    <section class="bg-white min-w-xl max-w-5xl mt-60 mx-auto border rounded p-5 shadow font-normal">
        <div class="text-center">
            <h1 class="text-xl font-semibold mb-4">Dashboard</h1>
            <div class="border-b border-gray-300 mx-auto my-4"></div>

            <div class="font-medium">
                <div class="flex justify-between mb-4">
                    <h1 class="font-medium mb-4 ml-3">Usuários</h1>
                    <button style="width:200px" @click="showAddUserModal"
                        class="bg-teal-500 hover:bg-teal-600 text-white font-normal py-2 px-4 rounded">Adicionar
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
                        <tr v-for="user in users" :key="user.id">
                            <td class="px-4 py-2 whitespace-pre-line break-all border">{{ user.id }}</td>
                            <td class="px-4 py-2 whitespace-pre-line break-all border">{{ user.name }}</td>
                            <td class="px-4 py-2 whitespace-pre-line break-all border">{{ user.email }} </td>
                            <td class="px-4 py-2 border">
                                <div class="flex justify-between">
                                    <button @click="showEditUserModal(user)"
                                        class="bg-yellow-500 hover:bg-yellow-600 text-white font-normal py-1 px-2 rounded w-20">Editar</button>

                                    <button @click="showDeleteUserModal(user)" v-if="isCurrentUser(user)"
                                        :class="{ 'bg-red-500 hover:bg-red-600 text-white font-normal py-1 px-2 rounded w-20': isCurrentUser(user), 'cursor-not-allowed opacity-50': !isCurrentUser(user) }"
                                        :disabled="!isCurrentUser(user)">
                                        Deletar
                                    </button>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <addUserModal v-show="addUserModalVisible" @close="closeAddUserModal" @refreshUsers="handleRefreshUsers" />
        <deleteUserModal :user="selectedUser" v-show="deleteUserModalVisible" @close="closeDeleteUserModal"
            @refreshUsers="handleRefreshUsers" />
        <editUserModal :user="selectedUser" v-show="editUserModalVisible" @close="closeEditUserModal"
            @refreshUsers="handleRefreshUsers" />
    </section>
</template>

<script>
import axios from '@/axios';

import addUserModal from '../components/AddUserModal.vue';
import deleteUserModal from '../components/DeleteUserModal.vue';
import editUserModal from '../components/EditUserModal.vue';

export default {
    components: {
        addUserModal,
        deleteUserModal,
        editUserModal,
    },
    data() {
        return {
            addUserModalVisible: false,
            deleteUserModalVisible: false,
            editUserModalVisible: false,
            selectedUser: {},

            users: [],

        };
    },
    created() {
        this.userLoadData();
    },
    watch: {
        '$store.state.currentUser': {
            handler(newValue) {
                console.log('currentUser atualizado:', newValue);
            },
            immediate: true,
        },
    },
    methods: {
        async userLoadData() {
            try {
                const response = await axios.get("/users");
                this.users = response.data;
            } catch (error) {
                console.error("Um erro aconteceu na busca de usuários: ", error);
            }
        },

        isCurrentUser(user) {
            const currentUser = this.$store.state.currentUser;
            return currentUser ? user.id !== currentUser.id : true;
        },



        showAddUserModal() {
            this.addUserModalVisible = true;
        },
        closeAddUserModal() {
            this.addUserModalVisible = false;
        },



        showDeleteUserModal(user) {
            this.deleteUserModalVisible = true;
            this.selectedUser = user;
        },
        closeDeleteUserModal() {
            this.deleteUserModalVisible = false;
        },



        showEditUserModal(user) {
            this.editUserModalVisible = true;
            this.selectedUser = user;
        },
        closeEditUserModal() {
            this.editUserModalVisible = false;
        },


        handleRefreshUsers() {
            this.userLoadData();
        },
    }
};
</script>
  