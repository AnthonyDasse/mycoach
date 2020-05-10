<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    
    <b-navbar-brand to="/">{{ $t("header.title") }} </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/plans">{{ $t("header.plans") }}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">       
          <Locale />       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import Locale from './Locale';
export default {
  name: 'Menu',
  props: {
    msg: String
  },
  components : {
        Locale
    }

}
</script>

<style>

</style>