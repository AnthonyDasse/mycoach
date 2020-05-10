<template>
  <b-nav-item-dropdown v-bind:text="this.$i18n.locale" right>
          <b-dropdown-item href="#" v-bind:active="this.$i18n.locale == 'en'" v-on:click="switchLocale('en')">EN</b-dropdown-item>
          <b-dropdown-item href="#" v-bind:active="this.$i18n.locale == 'fr'" v-on:click="switchLocale('fr')">FR</b-dropdown-item>
        </b-nav-item-dropdown>
</template>

<script>
export default {
    methods: {
        switchLocale: function(locale){
            this.$i18n.locale = locale;
        }
    }
}
</script>