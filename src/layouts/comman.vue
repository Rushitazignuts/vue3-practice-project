<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProjectStore } from '../stores/counter'

// Composable
const router = useRouter()
const store = useProjectStore()
const { sideBarItem } = storeToRefs(store)

// Data
const settingMenu = ref<boolean>(false)
const notificationMenu = ref<boolean>(false)
const search = ref<any>('')
const toggleSidebar = ref<boolean>(true)
</script>

<template>
  <div>
    <div class="d-flex justify-space-between navigation">
      <div class="d-flex align-center">
        <VIcon
          icon="mdi-menu"
          size="22"
          color="white"
          class="ms-5"
          @click="toggleSidebar = !toggleSidebar"
        />
        <div @click="router.push('/')">
          <VImg
            :width="30"
            :height="30"
            :aspect-ratio="1"
            cover
            src="/favicon.ico"
            class="mx-5"
          ></VImg>
        </div>
      </div>
      <div class="d-flex align-center">
        <VTextField
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          density="compact"
          label="Search"
          single-line
          flat
          hide-details
          clearable
          variant="solo-filled"
        ></VTextField>
      </div>
      <div class="d-flex align-center">
        <VMenu width="" location="bottom" offset="14px" v-model="notificationMenu">
          <template #activator="{ props }">
            <VBtn icon="mdi-bell" variant="text" color="white" v-bind="props" />
          </template>
          <VList>
            <VListItem>
              <template #append>
                <VIcon icon="mdi-email" size="20" />
              </template>

              <VListItemTitle>Notifications</VListItemTitle>
            </VListItem>

            <VDivider />
            <VListItem>
              <VBtn color="primary" variant="text">View all notifications</VBtn>
            </VListItem>
          </VList>
        </VMenu>
        <VMenu width="200" location="bottom" offset="14px" v-model="settingMenu">
          <template #activator="{ props }">
            <VBtn
              icon="mdi-dots-vertical"
              class="mx-3"
              variant="text"
              color="white"
              v-bind="props"
            />
          </template>
          <VList>
            <VListItem>
              <template #prepend>
                <VIcon icon="mdi-cog" size="20" />
              </template>

              <VListItemTitle>Setting</VListItemTitle>
            </VListItem>
            <VListItem>
              <template #prepend>
                <VIcon icon="mdi-help" size="20" />
              </template>

              <VListItemTitle>Help</VListItemTitle>
            </VListItem>
            <VDivider />
            <VListItem>
              <template #prepend>
                <VIcon icon="mdi-logout" size="20" />
              </template>

              <VListItemTitle>Log out</VListItemTitle>
            </VListItem>
          </VList>
        </VMenu>

        <VBtn color="primary" class="me-5"> Login </VBtn>
      </div>
    </div>

    <div class="">
      <div v-if="toggleSidebar" class="sidebar">
        <ul v-for="item in sideBarItem" :key="item">
          <div class="d-flex pt-5" @click="router.push(item.to)">
            <VIcon :icon="item.icon" color="primary" size="22" class="mx-4"></VIcon>
            <li>{{ item.value }}</li>
          </div>
        </ul>
      </div>
      <div class="layout-page-content">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
</style>