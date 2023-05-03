<script setup>
</script>

<template>
  <header>
    <div class="logo">
      <img alt="TakasBu" src="../assets/logo.png" width="150" height="70" />
    </div>
    <div style="width: 40%;">
      <input type="text" name="search" id="search">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="right: 43px; top: 13px; color: #bdccdc;  cursor: pointer; padding: 13px;" />
    </div>
  <ul>
      <a href="login"><li class="navbars"><font-awesome-icon icon="fa-regular fa-user" /> Giriş Yap</li></a>
      <a href="favorite"><li class="navbars"><font-awesome-icon icon="fa-regular fa-heart" /> Favorilerim</li></a>
      <a href="inventory"><li class="navbars"><font-awesome-icon icon="fa-solid fa-box" /> Envanterim</li></a>
    </ul>
   
  </header>
</template>

<style scoped>

header {
  background-color: rgb(137, 137, 137);
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
  align-items: right;
  padding: 0;
  white-space: nowrap;
  /* overflow: hidden;  */
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
  cursor: pointer;
}


.logo {
  display: block;
  float: left;
  text-align: center;
  width: 20%;
}
a{
  text-decoration: none;
}
</style>
