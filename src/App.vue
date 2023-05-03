<!-- eslint-disable no-unused-vars -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="wrapper">
    <NavBar />
    <div class="section">
      <RouterView  class="router_view"/>
    </div>
    <FooTer />
  </div>
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
.router_view{
  min-height: 70vh;
}
</style>
