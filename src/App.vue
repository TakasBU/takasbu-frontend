<script setup>
</script>

<template>
  <header>
    <img alt="TakasBu" class="logo" src="./assets/logo.png" width="150" height="150" />
    <div>
      <input type="text" name="search" id="search">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="right: 30px;color: #bdccdc;" />
    </div>
    <div>
      <font-awesome-icon icon="fa-regular fa-user" class="navbars" />Giriş Yap
    </div>
    <div>
      <font-awesome-icon icon="fa-regular fa-heart" class="navbars"  />Favorilerim
    </div>
    <div>
      <font-awesome-icon icon="fa-solid fa-box" class="navbars"  />Envanterim
    </div>
  </header>
  <main></main>
  <footer></footer>
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

.navbars{
  margin-left: 25px;

}


.logo {
  display: block;
  margin-left: 5%;
  float: left;
}
</style>
