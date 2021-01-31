<template>
  <ul class="UserList">
    <UserItem
      v-for="(user, index) of users" :key="user.id"
      v-bind:user="user"
      v-bind:index="index"
      v-on:remove-user="removeUser"
    />
  </ul>
</template>

<script>
// Vuex
import { mapMutations } from 'vuex';

// Components
import UserItem from './UserItem.vue';

export default {
  // Props
  props: {
    users: {
      type: Array,
      required: true,
    },
  },

  // Components
  components: {
    UserItem,
  },

  // Methods
  methods: {
    ...mapMutations(['removeUser']),
  },
};
</script>

<style scoped>
.UserList {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
