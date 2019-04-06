<template>
  <div color="white">
    <div class="mobile-only">
      <q-item @click.native="openURL('http://quasar-framework.org')" class="text-center" style="font-size: 23px; margin-top: 5px">
        <q-item-side avatar="statics/icons/icon-192x192.png" class="my-class"/>
        <q-item-main label="Quasar template1"  />
      </q-item>
      <q-item-separator color="white" />
    </div>
    <q-list
      no-border
      link
      inset-delimiter
    >
      <q-item @click.native="openURL('http://quasar-framework.org')">
        <q-item-main label="Docs" sublabel="quasar-framework.org" />
        <q-item-side icon="school" />
      </q-item>
      <q-item @click.native="openURL('https://github.com/quasarframework/')">
        <q-item-side icon="code" />
        <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
      </q-item>
      <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
        <q-item-side icon="chat" />
        <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
      </q-item>
      <q-item @click.native="openURL('http://forum.quasar-framework.org')">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
      </q-item>
      <q-item @click.native="openURL('https://twitter.com/quasarframework')">
        <q-item-side icon="rss feed" />
        <q-item-main label="Twitter" sublabel="@quasarframework" />
      </q-item>
      <q-item @click.native="openURL('http://quasar-framework.org')">
        <q-item-main label="Docs" sublabel="quasar-framework.org" />
        <q-item-side icon="school" />
      </q-item>
      <q-item @click.native="openURL('https://github.com/quasarframework/')">
        <q-item-side icon="code" />
        <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
      </q-item>
      <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
        <q-item-side icon="chat" />
        <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
      </q-item>
      <q-item @click.native="openURL('http://forum.quasar-framework.org')">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
      </q-item>
      <q-item @click.native="openURL('https://twitter.com/quasarframework')">
        <q-item-side icon="rss feed" />
        <q-item-main label="Twitter" sublabel="@quasarframework" />
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'MenuComponent',
  data () {
    return {}
  },
  methods: {
    openURL
  }
}
</script>

<style scoped>
  .q-item-separator-component:last-child {
    display: block;
  }
</style>
