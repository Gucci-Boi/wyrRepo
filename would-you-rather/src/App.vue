<script setup>
// imports
import {ref} from 'vue'
import wouldYouRather from './components/wouldYouRather.vue'

// variables
const question = ref('Would you rather be able to float or breathe underwater?')
const answer1 = ref('Be able to float')
const answer2 = ref('Be able to breathe underwater')

// for the user's choice
const userChoice = ref('')

// formatted text for the user's choice/answer
function updateUserChoice(userSelection) {
  userChoice.value = `You chose ${userSelection.toLowerCase()}`
}
</script>

<template>
  <div id="app">
    <h1>Would you rather...</h1>

    <!--Show WouldYouRather component-->
    <wouldYouRather
        v-bind:question="question"
        v-bind:answer1="answer1"
        v-bind:answer2="answer2"
    v-on:answer-selected="updateUserChoice">
    </wouldYouRather>

    <!--Show user's choice to the question-->
    <br>
    {{userChoice}}
  </div>
</template>

<style scoped>
  /* no styles for this file */
</style>
