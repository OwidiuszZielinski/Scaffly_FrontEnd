<template>
  <v-app id="inspire" class="hero ">



    <v-app-bar app color="#83817D" clipped-right>
      <div :style="{ width: `${space}px`, height: `${space}px` }"></div>
      <v-btn elevation=0 color="#83817D">
        <v-toolbar-title link v-on:click="route('/')"
          style="font-family: 'Copperplate Gothic Light'; font-size: 40px; font-weight: bold">
          <vue-typer :text='"Scaffly"' :repeat="false"></vue-typer>
        </v-toolbar-title>
      </v-btn>

      <div :style="{ width: `${space}px`, height: `${space}px` }"></div>
      <v-btn elevation=0 color="#83817D">
        <vue-typer style="font-family: 'Copperplate Gothic Light'; font-size: 30px; font-weight: bold"
          :text='"The best invoice generator for scaffolding services"' :repeat="false"></vue-typer>
      </v-btn>
      <v-col>
      </v-col>

      <v-btn elevation=5 link v-on:click="route('/login')" color="#DBA02C">
        <v-icon>mdi-account</v-icon>
        <v-col>
          LOGIN
        </v-col>
      </v-btn>
      <div :style="{ width: `${space}px`, height: `${space}px` }"></div>

      <v-btn elevation=5 link v-on:click="route('/register')" color="#DBA02C">
        <v-icon>mdi-account-plus</v-icon>
        <v-col>
          REGISTER
        </v-col>
      </v-btn>


    </v-app-bar>

    <template>
      <v-row>
        <v-col cols="7">
          <v-container>
            <!-- content for the left half of the page -->
          </v-container>
        </v-col>
        <v-col cols="5">

          <v-container class="left-side fill-height">
            <v-col>

              <v-row justify="center" align="center">
                <h1 style="font-family: 'Copperplate Gothic Light'; font-size: 30px; font-weight: bold">
                  The most important advantages of the tool :</h1>
              </v-row>
              <div :style="{ width: `${space}px`, height: `${space}px` }"></div>

              <v-row justify="center" align="center">
                <v-card class=" mt-3 ms-1 mr-2 " max-width="250" height="170"
                color="#83817D"
                style="font-family: 'Copperplate Gothic'; font-weight: bold">
                  <v-card-title>Time saving</v-card-title>
                  <v-card-text>
                    You will quickly calculate the amount of service performed.
                  </v-card-text>
                </v-card>
                <v-card class=" mt-3 ms-1 mr-2 " max-width="250" height="170"
                color="#83817D"
                style="font-family: 'Copperplate Gothic'; font-weight: bold">
                  <v-card-title>Automation</v-card-title>
                  <v-card-text>
                    With one click, you will create an invoice for the client with a list of services performed.
                  </v-card-text>
                </v-card>
              </v-row>

              <v-row justify="center" align="center">
                <v-card class=" mt-3 ms-1 mr-2 " max-width="250" height="200"
                color="#83817D"
                style="font-family: 'Copperplate Gothic'; font-weight: bold">
                  <v-card-title>
                    History</v-card-title>
                  <v-card-text>
                    If you decide to create an account, you will receive the right to store the history documents and
                    clients.
                  </v-card-text>
                </v-card>
                <v-card class=" mt-3 ms-1 mr-2 " max-width="250" height="200"
                color="#83817D"
                style="font-family: 'Copperplate Gothic'; font-weight: bold">
                  <v-card-title>
                    Anonymity</v-card-title>
                  <v-card-text>
                    If you do not create an account, you can generate documents without saving your and the client's data
                    anywhere.
                  </v-card-text>
                </v-card>
              </v-row>
              <div :style="{ width: `${space}px`, height: `100px` }"></div>
              <v-row justify="center" align="center">
                <v-btn elevation=5 link v-on:click="route('/login')" color="#DBA02C">
                  <v-col>
                    Get started
                  </v-col>
                </v-btn>
              </v-row>


            </v-col>

          </v-container>
        </v-col>
      </v-row>
    </template>





  </v-app>
</template>
<style scoped>
.square-button {
  width: 50px;
  height: 50px;
}

.left-side {
  background-color: #181818;
  /* Set a black background color */
  color: white;
  /* Set white text color for contrast */
}

.hero {
  background: url('../assets/HomeBackground.jpg');
  background-size: cover;
  height: 100vh;
}
</style>

<script>

export default {
  data() {
    return {
      space: 30
    }
  }
}


</script>
