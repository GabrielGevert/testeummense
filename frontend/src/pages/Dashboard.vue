<template>
    <section class="bg-white min-w-xl max-w-5xl mt-60 mx-auto border rounded p-5 shadow font-normal">
        <div class="text-center">
            <h1 class="text-xl font-semibold mb-4">Dashboard</h1>
            <div class="border-b border-gray-300 mx-auto my-4"></div>

            <div class="font-medium">
                <div class="flex justify-between mb-4">
                    <h1 class="font-medium mb-4">Usuários</h1>
                    <button @click="showAddUserModal"
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
                        <tr>
                            <td class="px-4 py-2 whitespace-pre-line break-all border"> ID</td>
                            <td class="px-4 py-2 whitespace-pre-line break-all border"> Nome</td>
                            <td class="px-4 py-2 whitespace-pre-line break-all border"> Email </td>
                            <td class="px-4 py-2 border">
                                <div class="flex justify-between">
                                    <button @click="showEditUserModal"
                                        class="bg-yellow-500 hover:bg-yellow-600 text-white font-normal py-1 px-2 rounded w-20">Editar</button>
                                    <button @click="showDeleteUserModal"
                                        class="bg-red-500 hover:bg-red-600 text-white font-normal py-1 px-2 rounded w-20 ">Deletar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
            <addUserModal v-show="addUserModalVisible" @close="closeAddUserModal" />
            <deleteUserModal v-show="deleteUserModalVisible" @close="closeDeleteUserModal" />
            <editUserModal v-show="editUserModalVisible" @close="closeEditUserModal" />
    </section>
</template>

<script>
import addUserModal from '../components/AddUserModal.vue';
import deleteUserModal from '../components/DeleteUserModal.vue'
import editUserModal from '../components/EditUserModal.vue'

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
            editUserModalVisible : false,
        };
    },
    methods: {
        showAddUserModal() {
            this.addUserModalVisible = true;
        },
        closeAddUserModal() {
            this.addUserModalVisible = false;
        },


        
        showDeleteUserModal() {
            this.deleteUserModalVisible = true;
        },
        closeDeleteUserModal() {
            this.deleteUserModalVisible = false;
        },



        showEditUserModal() {
            this.editUserModalVisible = true;
        },
        closeEditUserModal() {
            this.editUserModalVisible = false;
        },
    }
};
</script>
  