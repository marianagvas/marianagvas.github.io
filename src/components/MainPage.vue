<script>
import { data, embedUrl, displayBlockElement } from '../data.js'

export default {
  data: () => ({
    data: { ...data.home }
  }),
  methods: {
    embedUrl : embedUrl,
    displayBlockElement: displayBlockElement
  }
}
</script>

<template>
  <v-container class="fill-height mx-auto pa-0" fluid>
    <v-responsive class="align-center fill-height mx-auto mt-12" align="center">
      <v-row no-gutters align="center" justify="center" style="max-width:1200px;">
        <v-col cols="12" lg="8" class=" fill-height" v-html="displayBlockElement(data.featured, '400px', true, false)">
        </v-col>
        <v-col cols="12" lg="4" sm="8" class="pa-8 text-left">
          <div>
            <div class="text-h5 font-weight-bold pb-8">A creative approach to storytelling, from first briefing to
              delivery.</div>
            <div class="text-body-1 font-weight-light">
              Directing. Cinematography<br />
              Camera Operation. Post-production
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="py-4" />

      <v-row align="center" justify="center" class="text-left" style="max-width:1500px;" id="blue-container">
        <v-col>
          <!-- documental preview -->
          <v-row class="ma-10">
            <v-col cols="12" lg="8" class="fill-height" v-html="displayBlockElement(data.documental.main)">
            </v-col>
            <v-col cols="12" lg="4">
              <v-row no-gutters>
                <v-col cols="12" class="fill-height" v-html="displayBlockElement(data.documental.secondary, '250px')">
                </v-col>
                <v-col cols="12">
                  <div>
                    <div class="text-h4 font-weight-bold py-8 px-2">
                      share your inspiring projets with others
                      through <a class="main-links" href="/documental">documentary</a>.
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- branding preview -->
          <v-row class="ma-10">
            <v-col cols="12" lg="4">
              <v-row no-gutters>
                <v-col cols="12" class="fill-height" v-html="displayBlockElement(data.branding.main)">
                </v-col>
                <v-col cols="12">
                  <div>
                    <div class="text-h4 font-weight-bold py-8 px-2">
                      develop your  <a class="main-links" href="/branding">brand</a> with dedicated content creation.
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="8" class="fill-height" v-html="displayBlockElement(data.branding.secondary, '250px')">
            </v-col>
          </v-row>


          <!-- music preview -->
          <v-row class="ma-10">
            <v-col cols="12" lg="8" class="fill-height" v-html="displayBlockElement(data.music.main)">
            </v-col>
            <v-col cols="12" lg="4">
              <v-row no-gutters>
                <v-col cols="12" class="fill-height" v-html="displayBlockElement(data.music.secondary, '250px')">
                </v-col>
                <v-col cols="12">
                  <div>
                    <div class="text-h4 font-weight-bold py-8 px-2">
                      from festivals to  <a class="main-links" href="/music">music</a> videos, promote your vision with creative content.
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>


        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>



<style>
#blue-container {
  background-color: rgb(var(--v-theme-primary));
  color: white;
}
.main-links {
  color: white;
  text-decoration: underline;
}
</style>
