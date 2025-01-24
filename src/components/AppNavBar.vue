<template>
  <v-app-bar :elevation="0" class="pt-3" scroll-behavior="TODOhide">
    <v-app-bar-title>
      <v-container fluid>
        <v-row align="center">
          <v-app-bar-nav-icon variant="text" @click.stop="drawer=!drawer" class="d-md-none"></v-app-bar-nav-icon>
          <v-col cols="6">
            <a href="/" class="silent-anchor">
              <div class="text-h4 font-weight-light">Mariana Vasconcelos</div>
              <div class="text-subtitle-1 font-weight-bold">frelance filmmaker</div>
            </a>
          </v-col>
          <v-spacer></v-spacer>

          <v-col cols="6" class="d-none d-md-block">
            <v-btn v-for="link in links" class="mr-4 pa-0" :active="this.pathname==link.title" density="compact" :href="'/' + link.title">{{ link.title }}</v-btn>
            <v-btn variant="flat" size="large" class="white-btn font-weight-bold pa-0" href="#letstalk">let's talk</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar-title>

  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item v-for="link in links" link :title="link.title" :href="'/' + link.title"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      {
        title: 'documental',
      },
      {
        title: 'music',
      },
      {
        title: 'branding',
      },
      {
        title: 'activism',
      },
    ],
    pathname: window.location.pathname.replace("/", "")
  }),
}
</script>

<style scoped lang="scss">
button.v-btn.v-btn--density-default.white-btn {
  &:hover {
    background-color: white !important;
    color: rgb(var(--v-theme-primary)) !important;
  }
}

</style>
