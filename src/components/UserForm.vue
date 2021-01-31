<template>
  <div>
    <p v-if="showError">Please fill in all fields</p>
    <p v-else-if="getErrorForm">Failed to create user, please try again later</p>
    <form class="UserForm" @submit.prevent="onSubmit">
        <div class="UserForm__inputs">
          <a-input html-type="text" placeholder="Your name" v-model="user.name"/>
          <a-input html-type="number" placeholder="Your phone" v-model="user.phone"/>
          <a-input html-type="email" placeholder="Your email" v-model="user.email"/>
        </div>
        <a-button type="primary" html-type="submit">
          Create
        </a-button>
    </form>
  </div>
</template>

<script>
// Vuex
import { mapActions, mapGetters } from 'vuex';

export default {
  // Data
  data() {
    return {
      user: {
        name: '',
        phone: '',
        email: '',
      },
      showError: false,
    };
  },
  computed: mapGetters(['getErrorForm']),

  // Methods
  methods: {
    ...mapActions(['postUser', 'addUser']),

    onSubmit() {
      const { name, phone, email } = this.user;
      if (name.trim() && name.trim().length < 20
      && phone.trim() && phone.length < 20
      && email.trim() && email.length < 20) {
        const newUser = {
          id: Date.now(),
          name,
          phone,
          email,
        };

        this.addUser(newUser);
        this.user.name = '';
        this.user.phone = '';
        this.user.email = '';
        this.showError = false;
      } else {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
  input {
    min-width: 150px;
    width: 30%;
    margin-right: 15px;
    margin-top: 10px;
  }

  input:last-child {
    margin-right: 0;
  }

  .UserForm > button {
    margin-top: 30px;
  }

  .UserForm__inputs {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
