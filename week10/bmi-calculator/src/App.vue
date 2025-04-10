<script setup>
// imports
import {ref} from 'vue'
import bodyMassIndexForm from './components/bodyMassIndexForm.vue'

// values
const bmi = ref(0)

// calculates user's BMI using the entered info
function calculateBmi(userHeight, userWeight) {
  bmi.value = parseFloat((userWeight / (userHeight * userHeight))
      .toFixed(2)) // formats it to 2 decimal places
}

</script>

<template>
  <!--
  Display the app's name, 'Body Mass Index Calculator'
  Receive the stats-entered event from BodyMassIndexForm, and use the data sent to calculate the user's body mass index
  To calculate the body mass index, assuming variables called height and weight,  const bmi = weight / ( height * height )
  Display the calculated body mass index, formatted to 2 decimal places.
  App.vue will not pass any props to BodyMassIndexForm (but see next credit question for an extra question about props)
  -->

  <div id="app">
    <!--Title-->
    <h1 id="title">Body Mass Index Calculator</h1>

    <bodyMassIndexForm v-on:stats-entered="calculateBmi">
    </bodyMassIndexForm>

    <!--Displays the user's BMI-->
    <br>
    {{`BMI is: ${bmi}`}}
  </div>
</template>

<style scoped>
</style>
