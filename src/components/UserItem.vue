<template>
  <li class="UserItem">
    <span class="UserItem__info">
      {{index + 1}}
      <strong>{{ user.name || 'anonymous' }}</strong>
      <span class="UserItem_email">{{user.email}}</span>
    </span>
    <button @click="$emit('remove-user', user.id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  // Props
  props: {
    user: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
  .UserItem {
    border: 1px solid #777;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    margin-bottom: 1rem;
    background-color: #bbb;
    border-radius: 5px;
    align-items: center;
  }
  .UserItem > button {
    border-radius: 50%;
    color: #fff;
    font-weight: 700;
    border: 1px solid #fff;
    background: none;
    cursor: pointer;
    transition: transform 0.3s ease-out;
    width: 25px;
    height: 25px;
  }
  .UserItem > button:hover {
    transform: scale(1.2);
  }
  .UserItem_email {
    margin-left: 5px;
    font-style: italic;
  }
  @media screen and (max-width: 500px) {
    .UserItem {
      padding: 0.5rem 1rem;
    }

    .UserItem__info {
      max-width: 150px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
  }
</style>
