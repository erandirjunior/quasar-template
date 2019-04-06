<template>
  <div>
    <q-layout-drawer
      :mini="localMiniState && localLeftDrawerOpen"
      v-model="localMiniState"
      style="color: white"
      show-if-above
    >
      <menu-component/>
    </q-layout-drawer>
  </div>
</template>

<script>
import MenuComponent from './MenuComponent'

export default {
  name: 'SidebarDesktopComponent',
  data () {
    return {
      localLeftDrawerOpen: '',
      localMiniState: ''
    }
  },
  components: {
    MenuComponent
  },
  props: {
    miniState: {
      required: true
    },
    leftDrawerOpen: {
      required: true
    }
  },
  watch: {
    leftDrawerOpen: function (newVal) {
      this.localLeftDrawerOpen = newVal
    },
    miniState: function (newVal) {
      this.localMiniState = newVal
    }
  },
  mounted () {
    this.localMiniState = this.miniState
    this.localLeftDrawerOpen = this.leftDrawerOpen
  }
}
</script>

<style>
</style>
