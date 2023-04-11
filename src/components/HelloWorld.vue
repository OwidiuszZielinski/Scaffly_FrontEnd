<template>
  <main style="height: 100%;background: url('Background2.jpg') no-repeat center center" justify="center" >
  <v-app id="inspire">
    

    <v-app-bar
    
    app
    color="#83817D">
    <v-col md="5"></v-col>
    <v-toolbar-title class="text-center" style="font-family: 'Consolas'; font-size: 40px; font-weight: bold">
       Scaffly
      </v-toolbar-title>

          <v-col></v-col>
          <v-col md="1">
              <v-btn elevation=0 link v-on:click="route('/login')" color="#DBA02C">
                <v-icon>mdi-account</v-icon>
                <v-col >
                  LOGIN
                </v-col>
              </v-btn>
            </v-col>
            <v-col md="1" >
              <v-btn elevation=0 link v-on:click="route('/register')" color="#DBA02C">
                <v-icon>mdi-account-plus</v-icon>
                <v-col >
                  REGISTER
                </v-col>
              </v-btn>
            </v-col>
          

    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
  </main>
</template>
<style>
</style>

<script>
  export default {
 
    data: () => ({ drawer: null }),


  }
  
</script>
