<script setup>
const counter = {
  countFrom: 0,
  countTo: 2022,
  duration: 3000,
  text: "% completed",
};
</script>

<template>
  <div class="counter" v-number-counter="counter">0% completed</div>
</template>

<style>
.counter{
  width: 450px;
  margin: auto;
  background-color: rgb(209 213 219);
  padding: 12px;
  text-align: center;
  font-size: 17px;
}
</style>