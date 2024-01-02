<script setup lang="ts">
import { computed, ref } from 'vue'
const items = ref<any>([
  {
    name: 'Frozen Yogurt',
    price: 159,
    rating: 6.0,
    type: 24,
    offer: 1
  },

  {
    name: 'Ice cream sandwich',
    price: 237,
    rating: 9.0,
    type: 37,
    offer: 1
  },
  {
    name: 'Eclair',
    price: 262,
    rating: 16.0,
    type: 23,
    offer: 7
  },
  {
    name: 'Cupcake',
    price: 305,
    rating: 3.7,
    type: 67,
    offer: 8
  },
  {
    name: 'Gingerbread',
    price: 356,
    rating: 16.0,
    type: 49,
    offer: 16
  },
  {
    name: 'Jelly bean',
    price: 375,
    rating: 0.0,
    type: 94,
    offer: 0
  }
])
const headers = ref<any>([
  {
    align: 'start',
    key: 'name',
    sortable: false,
    title: 'Name'
  },
  { title: 'Price', key: 'price' },
  { title: 'Rating', key: 'rating' },
  { title: 'Type', key: 'type' },
  { title: 'Offer', key: 'offer' },
])
const page = ref<Number>(1)
const itemsPerPage = ref<any>(5)

// Computed 
const pageCount = computed(() => {
  return Math.ceil(items.value.length / itemsPerPage.value)
})
</script>

<template>
  <div>

  <div class="mx-auto w-75">
    <div>
      <VAlert border="start" border-color="primary">
        Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
      </VAlert>
    </div>
  </div>

  <div class="d-flex justify-space-between  mt-8 w-75 mx-auto">
    <div>
      <VCard>
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
      </VCard>
    </div>

    <div>
      <VCard>
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
      </VCard>
    </div>

    <div>
      <VCard>
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
      </VCard>
    </div>
  </div>

  <div class="mx-auto w-75 mt-10">
  <VDataTable v-model:page="page" :headers="headers" :items="items" :items-per-page="itemsPerPage">
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <VPagination v-model="page" :length="pageCount"></VPagination>
      </div>
    </template>
  </VDataTable>
</div>

</div>
</template>



<style scoped lang="scss">
</style>

<route lang="yaml">
  meta:
    layout: comman
  </route>