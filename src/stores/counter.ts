import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  const sideBarItem = ref<any>([
    {
      value: 'Dashboard',
      to: '/dashboard',
      icon: 'mdi-view-dashboard'
    },
    {
      value: 'Started',
      to: '/started',
      icon: 'mdi-timer-play'
    },
    {
      value: 'Component',
      to: '/',
      icon: 'mdi-home'
    },
    {
      value: 'Project',
      to: '/',
      icon: 'mdi-square'
    }
  ])

  return { sideBarItem }
})
