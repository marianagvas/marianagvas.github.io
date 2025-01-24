<script>
import { data, embedUrl, displayBlockElement } from '../data.js'

export default {
  data: () => ({
    sections: { ...data[window.location.pathname.replace("/", "")] },
  }),
  methods: {
    embedUrl: embedUrl,
    displayBlockElement: displayBlockElement
  }
}
</script>

<template>
  <v-container class="fill-height mx-auto pa-0" fluid>
    <v-responsive class="align-center fill-width mx-auto mt-12">
      <div v-for="section in sections">
        <v-row v-if="section?.sectionTitle" no-gutters class="text-center ma-8" justify="center">
          <h3>{{ section?.sectionTitle }}</h3>
        </v-row>
        <v-row no-gutters justify="left" style="margin-left:auto;margin-right:auto"
          :style="{ 'maxWidth': section.maxWidth ?? '1400px' }" align-content="start">
          <v-hover v-for="item in section.media">
            <template v-slot:default="{ isHovering, props }">
              <v-col v-bind="props" cols="12" :lg="item?.columns || (section?.size == 'medium' ? 6 : 4)" class="fill-width">
                <div class="mx-1 mb-5 fill-height">
                  <div :class="item.type == 'card' ? 'fill-height' : ''"
                    v-html="displayBlockElement(item, section?.size == 'medium' ? '400px' : '300px')"></div>
                  <div v-if="item.showDefaultDescription ?? true"
                    :style="{ visibility: isHovering ? 'visible' : 'hidden' }" class="text-left">
                    <p><em>{{ item?.title }}</em></p>
                    <small v-if="item?.description">{{ item?.description }}</small>
                  </div>
                </div>
              </v-col>
            </template>
          </v-hover>
        </v-row>
        <v-divider v-if="!section.hideBottomSeparator" class="my-5"></v-divider>
      </div>
    </v-responsive>
  </v-container>
</template>



<style></style>
