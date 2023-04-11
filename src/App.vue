<template>

   

  <v-app>
      <HomeView/>
    </v-app>
   
 
</template>

<script>


import HomeView from './components/HomeView.vue';

export default {
  name: 'App',

  components: {
    
    HomeView
},

  data: () => ({
    //
  }),
};
</script>
