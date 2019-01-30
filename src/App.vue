<template>

  <div class="corpo">
    <menu-menu  :rotas="routes" />
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes.js';
import Menu from './components/shared/menu/Menu.vue';

export default {
  data(){
    return {
      routes
    }
  },

  components : {
    'menu-menu' : Menu
  }
}
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

    .pagina-enter, .pagina-leave-active {
        opacity: 0;
    }

    .pagina-enter-active, .pagina-leave-active {
        transition: opacity 2s;
    }

 
</style>
