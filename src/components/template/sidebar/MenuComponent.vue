<template>
  <div color="white">
    <div class="mobile-only">
      <q-item @click.native="openURL('http://quasar-framework.org')" class="text-center" style="font-size: 23px; margin-top: 5px">
        <q-item-side avatar="statics/icons/icon-192x192.png" class="my-class"/>
        <q-item-main label="Quasar template1"  />
      </q-item>
    </div>
    <q-list
      no-border
      link
      inset-delimiter
    >
      <q-collapsible
        v-for="(menu, index) in menu"
        :key="index"
        :icon="menu.icon"
        :label="menu.label"
        class="my-collapsible"
        v-model="menuOpen[index]"
      >
        <div @click="setOpenMenu(index)">
          <q-item v-for="(submenu, subitem) in menu.submenu" :key="subitem" :to="submenu.router">
            <q-item-side>
              <q-icon name="subdirectory_arrow_right" size="20px" />
            </q-item-side>
            <q-item-main :label="submenu.label" class="q-body-10"/>
          </q-item>
        </div>
      </q-collapsible>
    </q-list>
  </div>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'MenuComponent',
  data () {
    return {
      menuOpen: [],
      menu: [
        {
          icon: 'insert_chart',
          label: 'Forms',
          submenu: [
            {
              label: 'Fields',
              itens: null,
              router: '/form/fields'
            },
            {
              label: 'Simple Form',
              itens: null,
              router: '/form/simple-form'
            },
            {
              label: 'Complex Form',
              itens: null,
              router: '/form/complex-form'
            }
          ]
        },
        {
          icon: 'insert_chart',
          label: 'Table',
          submenu: [
            {
              label: 'SimpleTable',
              itens: null,
              router: '/table/simple-table'
            }
          ]
        }
      ]
    }
  },
  methods: {
    openURL,
    setOpenMenu (position) {
      this.menuOpen.length = 0
      this.menuOpen.length = this.menu.length
      this.$set(this.menuOpen, position, true)
    }
  },
  created () {
    this.menuOpen.length = this.menu.length
  }
}
</script>

<style scoped>
  .q-item-separator-component:last-child {
    display: block;
  }
  .my-collapsible {
    border-bottom: 1px solid white !important;
  }
</style>
