<template lang="html">
  <div class="home-wrap">
    <div class="title">
      <h3>Welcome to...</h3>
      <h1>M-Apps!</h1>
      <ul style="list-style: none;">
        <li>Learn amazing facts about the countries of the world!</li>
        <li>Find out exactly where they are on a map...</li>
        <li>Fly there with Ollie now!</li>
        <br>
        <button type="button" name="get-started" onclick="window.location.href = 'http://localhost:8080/#/name';" >Get started!</button>
      </ul>
    </div>

    <div class="flag1">
      <img src="/assets/images/scotland.png" alt="Scottish Saltire" height="70px" width="118px">
    </div>

    <div class="flag2">
      <img src="/assets/images/brazil.png" alt="Brazilian flag" height="70px" width="118px">
    </div>

    <div class="flag3">
      <img src="/assets/images/france.png" alt="French flag" height="70px" width="118px">

    </div>

    <div class="flag4">
      <img src="/assets/images/australia.png" alt="Australian flag" height="70px" width="118px">

    </div>

    <div class="flag5">
      <img src="/assets/images/japan.png" alt="Japanese flag" height="70px" width="118px">

    </div>

    <div class="flag6">
      <img src="/assets/images/usa.png" alt="USA flag" height="70px" width="118px">

    </div>

    <div class="flag7">
      <img src="/assets/images/russia.png" alt="Russian flag" height="70px" width="118px">

    </div>

    <div class="flag8">
      <img src="/assets/images/china.png" alt="Chinese flag" height="70px" width="118px">

    </div>

    <div class="ollie">
      <img src="/assets/images/owl.png" alt="Ollie the Owl" height="200px" width="200px">

    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.home-wrap {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 11.25vw 11.25vw 11.25vw 11.25vw 11.25vw 11.25vw ;
  grid-template-areas:
  "title title title title title title "
  "title title title title title title "
  "title title title title title title "
  "flag1 flag2 ollie ollie flag3 flag4"
  "flag5 flag6 ollie ollie flag7 flag8";
  background-color: #fff;
  color: #444;
  height: auto;
}

.title {
  grid-area: title;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  list-style: none;
  height: 55vh;
}
.flag1 {
  grid-area: flag1;
}
.flag2 {
  grid-area: flag2;
}
.flag3 {
  grid-area: flag3;
}
.flag4 {
  grid-area: flag4;
}
.flag5 {
  grid-area: flag5;
}
.flag6 {
  grid-area: flag6;
}
.flag7 {
  grid-area: flag7;
}
.flag8 {
  grid-area: flag8;
}

.ollie {
  grid-area: ollie;
}

.home-wrap {
  background-color: #439fef;
  color: white
}

button {
  height: 60px;
  width: 180px;
  color: white;
  background-color: #3870a0;
  font-size: 20px;
  border-radius: 15px;
  border-color: #3870a0;
}


</style>
