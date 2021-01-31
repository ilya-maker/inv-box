<template>
  <div>
    <h2>User</h2>
    <Loader v-if="getLoaderList"/>
    <UserLits
      v-else-if="allUsers.length"
      v-bind:users="allUsers"
    />
    <p v-else>No users!</p>
    <a-button class="button" type="primary" @click="fetchUsers">
      Load users
    </a-button>
  </div>
</template>

<script>
// Vuex
import { mapGetters, mapActions } from 'vuex';

// Components
import UserLits from '../components/UserList.vue';
import Loader from '../components/Loader.vue';

export default {
  // Data
  data() {
    return {
      filter: 'index',
    };
  },
  mounted() {
    if (!this.allUsers.length) {
      this.fetchUsers();
    }
  },
  computed: mapGetters(['allUsers', 'getLoaderList']),

  // Methods
  methods: {
    ...mapActions(['fetchUsers']),
  },

  // Components
  components: {
    UserLits,
    Loader,
  },
};
</script>

<style>
.button {
  display: block;
  margin: 0 auto;
}
</style>
