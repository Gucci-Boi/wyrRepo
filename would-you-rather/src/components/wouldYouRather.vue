<script setup>
  import {ref, watch} from 'vue'

  defineProps({
    question: String,
    answer1: String,
    answer2: String,
  })

  const emit = defineEmits([
      'answerSelected'
  ])

  const choice = ref('')

  // either of the 2 below can be used, they do the same thing

  function choiceMade() {
    emit('answerSelected', choice.value)
  }

  // watch(choice, () => {
  //   emit('answerSelected', choice.value)
  // })
</script>

<template>
  <h2>Make your choice</h2>

  <!--Shows question text-->
  <span id="question">{{question}}</span>

  <!--Radio buttons for the answers-->
  <div id="answers">
    <input type="radio" id="answerOne" v-model="choice" v-bind:value="answer1" v-on:change="choiceMade"/>
    <label for="answerOne">{{answer1}}</label>

    <input type="radio" id="answerTwo" v-model="choice" v-bind:value="answer2" v-on:change="choiceMade">
    <label for="answerTwo">{{answer2}}</label>
  </div>
</template>

<style scoped>
  /* styles */
  #question {
    background-color: teal
  }
  #answers {
    padding: 10px;
  }
</style>
