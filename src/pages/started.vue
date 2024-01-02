
<script setup lang="ts">
import { ref } from 'vue'
const items = ref<any>([
  {
    name: 'Apple',
    location: 'Washington',
    height: '0.1',
    base: '0.07',
    volume: '0.0001'
  },
  {
    name: '🍇 Grapes',
    location: 'Italy',
    height: '0.02',
    base: '0.02',
    volume: '0.00001'
  },
  {
    name: '🍉 Watermelon',
    location: 'China',
    height: '0.4',
    base: '0.3',
    volume: '0.03'
  }
])
const selected = ref<any>([])
</script>

<template>
  <div>
    <VDataTable v-model="selected" :items="items" item-value="name" show-select></VDataTable>
  </div>
</template>



<style scoped>
</style>

<route lang="yaml">
    meta:
      layout: comman
    </route>

<!-- <VCard>
    <VImg
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
    </VImg>

    <VCardText>
      <div>Whitehaven Beach</div>
      <div>Whitsunday Island, Whitsunday Islands</div>
    </VCardText>

    <VCardActions>
      <VBtn color="primary"> Share </VBtn>
      <VBtn color="primary"> Explore </VBtn>
    </VCardActions>
  </VCard> -->