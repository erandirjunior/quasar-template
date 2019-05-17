<template>
  <q-layout>
    <header-component
      @handleState="handleState()"
    />
    <component
      :is="sidebarComponent"
      :miniState="miniState"
      :leftDrawerOpen="leftDrawerOpen"
      @setStateDrawer="setStateDrawer"
    />

    <q-page-container style="background-color: #EEEEEE !important;">
      <router-view :style="getMarginPage()"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderComponent from '../components/template/header/HeaderComponent'
import SidebarDesktopComponent from '../components/template/sidebar/SidebarDesktopComponent'
import SidebarMobileComponent from '../components/template/sidebar/SidebarMobileComponent'

export default {
  name: 'MyLayout',
  data () {
    return {
      miniState: false,
      leftDrawerOpen: this.$q.platform.is.desktop,
      css: true,
      sidebarComponent: this.$q.platform.is.desktop ? SidebarDesktopComponent : SidebarMobileComponent
    }
  },
  methods: {
    handleState () {
      this.setStateDrawer(!this.miniState)
    },
    setStateDrawer (state) {
      this.miniState = state
    },
    checkIfIsDrawerOpenAndIsDesktopMode () {
      if (this.leftDrawerOpen && !this.miniState) {
        return true
      }
      return false
    },
    getMarginPage () {
      if (this.leftDrawerOpen && !this.miniState) {
        return 'margin-left: 22% !important'
      }
      return ''
    }
  },
  components: {
    HeaderComponent,
    SidebarDesktopComponent,
    SidebarMobileComponent
  }
}
</script>

<style>
  .my-header {
    background-color: #1a1e34 !important;
    color: #f5f5f5 !important;
    min-height: 67px !important;
  }
  .q-layout-drawer-normal, .q-layout-drawer-mini {
    background-color: #1a1e34 !important;
    top: 86px !important;
    transform: translateX(21px) !important;
    height: 550px !important;
    border-radius: 0px 20px;
  }
  .q-layout-drawer-mobile {
    background-color: #1a1e34 !important;
  }
  .q-item-side {
    color: white !important;
  }
  .q-item-label {
    color: white !important;
  }
  .q-item-sublabel {
    color: #a0a0a0 !important;
  }
  .q-item-separator-component {
    margin: 1px 0px;
  }
  .q-layout-drawer-normal > .q-scrollarea-thumb {
    background-color: #f5f5f5;
  }
</style>
