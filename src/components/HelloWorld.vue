<template>
  
  <v-app id="inspire" class="hero">
    

    <v-app-bar
    
    app
    color="#83817D">
    
    <v-toolbar-title class="text-center" style="font-family: 'Consolas'; font-size: 40px; font-weight: bold">
      <vue-typer
  :text='"Scaffly "'
  :repeat='1'
  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='70'
  :type-delay='70'
  :pre-erase-delay='2000'
  :erase-delay='250'
  erase-style='wait'
  :erase-on-complete='false'
  caret-animation='expand'
></vue-typer>
      <vue-typer
  :text='"The best online scaffolding calcluator"'
  :repeat='Infinity'
  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='70'
  :type-delay='70'
  :pre-erase-delay='2000'
  :erase-delay='250'
  erase-style='clear'
  :erase-on-complete='false'
  caret-animation='blink'
></vue-typer>
      </v-toolbar-title>
      
          <v-col>
              
            </v-col>
            <v-btn elevation=5 link v-on:click="route('/login')" color="#DBA02C">
                <v-icon>mdi-account</v-icon>
                <v-col >
                  LOGIN
                </v-col>
              </v-btn>
              <v-col md="1"></v-col>
              <v-btn elevation=5 link v-on:click="route('/register')" color="#DBA02C">
                <v-icon>mdi-account-plus</v-icon>
                <v-col >
                  REGISTER
                </v-col>
              </v-btn>
            
            
    </v-app-bar>

  <v-main>

    
  </v-main>
           
    
     
  </v-app>

</template>
<style scoped>
.hero {
  background: url('../assets/HomeBackground.jpg');
  background-size: cover;
  height: 100vh;
}
</style>


<script src="https://unpkg.com/vue-typer/dist/vue-typer.min.js"></script>
<script>



  export default {
 
    data: () => ({ drawer: null }),


  }

 

</script>
