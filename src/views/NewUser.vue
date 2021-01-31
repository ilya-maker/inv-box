<template>
  <div>
    <h2>Add new user</h2>
    <Loader v-if="getLoaderForm"/>
    <UserForm v-else/>
  </div>
</template>

<script>
// Vuex
import { mapGetters } from 'vuex';

// Components
import UserForm from '../components/UserForm.vue';
import Loader from '../components/Loader.vue';

export default {
  // Data
  computed: mapGetters(['getLoaderForm']),

  // Components
  components: {
    UserForm,
    Loader,
  },
};
</script>
