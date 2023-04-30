<script setup>
</script>

<template>
  <header>
    <div class="logo">
      <img alt="TakasBu" src="../assets/logo.png" width="150" height="150" />
    </div>
    <div style="width: 40%;">
      <input type="text" name="search" id="search">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="right: 30px;color: #bdccdc;" />
    </div>
    <ul>
      <li class="navbars"><font-awesome-icon icon="fa-regular fa-user" /> Giriş Yap</li>
      <li class="navbars"><font-awesome-icon icon="fa-regular fa-heart" /> Favorilerim</li>
      <li class="navbars"><font-awesome-icon icon="fa-solid fa-box" /> Envanterim</li>
    </ul>
  </header>
</template>

<style scoped>
header {
  background-color: rgb(137, 137, 137);
  width: 100%;
  height: 10rem;
  align-items: center;
  display: inline-flex;
}

#search {
  height: 40px;
  width: 90%;
  margin: 20px auto;
  padding: 10px 20px;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  border-color: yellow;
}

#search:focus {
  outline: none !important;
  border: 3px solid yellow;
  box-shadow: 0 0 10px #bdccdc;
  background-color: white;
  transition: 0.3s;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: inline;
  width: 40%;
}

.navbars {
  display: inline;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  color: white;
  transition: 0.2s;
}

.navbars:hover {
  background-color: rgb(122, 122, 122);
  transition: 0.2s;
}


.logo {
  display: block;
  margin-left: 5%;
  float: left;
  text-align: center;
  width: 20%;
}
</style>
