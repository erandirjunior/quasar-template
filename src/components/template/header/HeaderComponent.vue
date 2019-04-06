<template>
  <div>
    <q-layout-header>
      <q-toolbar
        class="my-header"
      >
        <q-btn
          flat
          dense
          round
          @click="state()"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          <q-item
            class="desktop-only"
            style="font-size: 20px; margin-top: 5px"
          >
            <q-item-side avatar="statics/icons/icon-192x192.png" class="my-class"/>
            <q-item-main label="Quasar template"  />
          </q-item>
          <div class="mobile-only" style="text-align: center">
            <q-item-side avatar="statics/icons/icon-192x192.png" class="my-class"/>
          </div>
        </q-toolbar-title>
        <q-btn
          round
          icon="notifications"
          size="13px"
          class="my-notification"
        >
          <q-chip floating color="red">1</q-chip>
          <q-popover
            class="my-popup"
          >
            <q-list separator link>
              <q-item>
                <q-item-main label="Notification" sublabel="5H ago" />
              </q-item>
              <q-item>
                <q-item-main label="Notification" sublabel="5H ago" />
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>
        <q-btn
          label="Email"
          round
          align="center"
          class="desktop-only"
        >
          <img src="statics/icons/favicon-32x32.png">
          <q-popover
            class="my-popup"
            >
            <q-list separator link>
              <q-item>
                Perfil
              </q-item>
              <q-item>
                Sair
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>
      </q-toolbar>
    </q-layout-header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {}
  },
  methods: {
    state () {
      this.$emit('handleState')
    }
  }
}
</script>

<style>
  .my-notification {
    margin-right: 10px !important;
  }
  .my-popup {
    background: #1a1e34;
    margin-top: 20px;
    color: white;
    width: 150px;
  }
</style>
