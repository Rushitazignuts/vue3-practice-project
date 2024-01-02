

<script setup lang="ts">
import { ref } from 'vue'

const staticArray = ref<any>([
  {
    id: 1,
    value: 'array1',
    position: 1
  },
  {
    id: 2,
    value: 'array2',
    position: 2
  },
  {
    id: 3,
    value: 'array3',
    position: 3
  },
  {
    id: 4,
    value: 'array4',
    position: 4
  },
  {
    id: 5,
    value: 'array5',
    position: 5
  },
  {
    id: 6,
    value: 'array6',
    position: 6
  }
])
// const addArray = () => {
//   //     console.log("hello");
//   //     let position = 5
//   //     let newVal = 400
//   //     const array = [1,2,45,67,78,89,10]
//   //     for(let i =0 ; i< array.length; i++){
//   //     if(i === position)

//   //    array[i] = newVal

//   let myArray = [1, 2, 3, 4, 5]

//   // Element to be added
//   let elementToAdd = 99

//   // Index where the element should be added (zero-based index)
//   let indexToAdd = 2

//   // Creating a new array with the first part before the index
//   let newArray = []
//   for (let i = 0; i < indexToAdd; i++) {
//     newArray[i] = myArray[i]
//   }

//   // Adding the element at the specified index
//   newArray[indexToAdd] = elementToAdd

//   // Creating a new array with the second part after the index
//   for (let j = indexToAdd + 1, i = indexToAdd; j <= myArray.length; j++, i++) {
//     newArray[j] = myArray[i]
//   }

//   console.log(newArray)
// }
const addArray = () => {
  let arr = [1, 2, 3, 4, 5]
  let index = 2
  let element = -99

  // Shift all elements one place
  // to the back until index
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1]
  }

  // Insert the element at the index
  arr[index] = element
}

const deleteArray = () => {
  let arr = [10, 20, 33, 44, 55]
  let index = 2
  for (let i = index; i < arr.length; i++) {
    arr[i] = arr[i + 1]
  }
  arr.length--
}
</script>

<template>
   <div class="w-50 mx-auto">
      <VAlert border="start" border-color="primary">
        add and delete array item
      </VAlert>
    </div>

  <div class="d-flex justify-start w-50 mx-auto mt-5">
    <div @click="addArray">
      <VBtn color="primary">Add</VBtn>
    </div>

    <div @click="deleteArray">
      <VBtn color="primary" class="mx-5">Delete</VBtn>
    </div>
  </div>
</template>



<style scoped>
</style>
<route lang="yaml">
    meta:
      layout: comman
    </route>