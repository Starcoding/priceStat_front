<template>
  <Header />
  <router-view/>
</template>

<script>
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/style.css'
import Header from '@/components/Header.vue'


export default {
  name: 'App',
  store,
  components: {
    Header
  }
}
</script>
