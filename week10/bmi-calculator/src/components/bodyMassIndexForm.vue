<script setup>
  import {ref} from 'vue'

  const emit = defineEmits([
      'stats-entered'
  ])

  const height = ref(0)
  const weight = ref(0)

  function sendStats() {
    emit('stats-entered', height.value, weight.value)
  }
</script>

<template>
  <!--
     Show inputs for the user to enter their height in meters, and weight in kilograms.
        Create two reactive data and use v-model to connect with the input elements.
     Show a button with the text 'Calculate'
     When the user clicks the 'Calculate' button, BodyMassIndexForm should emit an event
        called stats-entered to App.vue with the user's height and the user's weight -
        this is the data the user entered in the inputs.
     BodyMassIndexForm.vue will not receive any props from App.vue (but see extra credit question for an extra question about props)
  -->

  <h2 id="instructions">Enter your height and weight</h2>

  <!--Inputs-->
  <div>
    <label class="userInfo">Height (in meters) </label>
    <input id="userHeight" v-model="height"/>
    <br>

    <label class="userInfo">Weight (in kilograms) </label>
    <input id="userWeight" v-model="weight"/>
    <br>

    <!--Button-->
    <button id="calculateBmiButton" v-on:click="sendStats">Calculate</button>
  </div>
</template>

<style scoped>
  #instructions {
    padding: 30px;
  }

  .userInfo {
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
