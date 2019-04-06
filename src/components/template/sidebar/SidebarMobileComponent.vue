<template>
  <div>
    <q-layout-drawer
      v-model="localLeftDrawerOpen"
      class="my-sidebar"
    >
      <menu-component/>
    </q-layout-drawer>
  </div>
</template>

<script>
import MenuComponent from './MenuComponent'

export default {
  name: 'SidebarMobileComponent',
  data () {
    return {
      localLeftDrawerOpen: ''
    }
  },
  components: {
    MenuComponent
  },
  props: {
    miniState: {
      required: true
    }
  },
  watch: {
    miniState: function (newVal) {
      this.localLeftDrawerOpen = newVal
    },
    localLeftDrawerOpen: function (newVal) {
      this.$emit('setStateDrawer', newVal)
    }
  },
  mounted () {
    this.localLeftDrawerOpen = this.miniState
  }
}
</script>

<style>
</style>
