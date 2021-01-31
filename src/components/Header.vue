<template>
  <header class="Header">
    <nav class="Header__nav">
      <router-link to="/" class="Header__link">Home</router-link>
      <router-link to="/users" class="Header__link">User</router-link>
      <router-link to="/new-user" class="Header__link">New user</router-link>
    </nav>
  </header>
</template>

<style scoped>
.Header {
  max-width: 800px;
  padding: 0 20px;
  margin: 10px auto;
}
.Header__nav {
  display: flex;
  justify-content: space-between;
}
.Header__link {
  font-size: 1.5rem;
  text-decoration: none;
  color: #2c3e50;
  position: relative;
  overflow: hidden;
  height: 30px;
}
.Header__link::after {
  content: "";
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: -2px;
  left: 0;
  background-color: #fff;
  transition: transform 0.2s ease-out;
}

.Header__link:hover::after {
  transform: translateY(-2px);
}
</style>
