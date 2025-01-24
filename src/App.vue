<script setup>
import { ref, computed } from 'vue'
import MainPage from './components/MainPage.vue'
import DynamicPage from './components/DynamicPage.vue'
import NotFound from './components/NotFound.vue'
import { data } from './data.js'


const routes = {
  '/': MainPage,
  '/about': NotFound
}

const currentPath = ref(window.location.pathname)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.pathname
})

const currentView = computed(() => {
  if (data.hasOwnProperty(currentPath.value.replace("/", ""))) {
    return DynamicPage
  }
  return routes[currentPath.value || '/'] || NotFound
})

function find404sInData() {
  console.log('Checking for 404s in data.js')
  //iterate over all the keys in data (the routes)
  Object.keys(data).forEach(key => {
    //iterate over all the sections in the data (one section has multiple videos/links/images)
    if(key == 'home') return
    data[key].forEach(section => {
      //iterate over all the media in the section
      section.media.forEach(media => {
        //if the media is a link and the link is a 404
        if (media.type == 'image' && media.url && data.hasOwnProperty(media.url.replace("/", "")) == false) {
          console.info(`${media.url} not found, please add it to src/data.js`)
        }
      })
    })
  })


}
// find404sInData();
</script>

<template>
  <v-app>
    <AppNavBar />

    <v-main>
      <component :is="currentView" />
    </v-main>

    <AppFooter />
  </v-app>
</template>
