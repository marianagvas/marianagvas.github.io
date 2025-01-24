# Components

Vue template files in this folder are automatically imported.

## 🚀 Usage

Importing is handled by [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components). This plugin automatically imports `.vue` files created in the `src/components` directory, and registers them as global components. This means that you can use any component in your application without having to manually import it.

The following example assumes a component located at `src/components/MyComponent.vue`:

```vue
<template>
  <div>
    <MyComponent />
  </div>
</template>

<script lang="ts" setup>
  //
</script>
```

When your template is rendered, the component's import will automatically be inlined, which renders to this:

```vue
<template>
  <div>
    <MyComponent />
  </div>
</template>

<script lang="ts" setup>
  import MyComponent from '@/components/MyComponent.vue'
</script>
```

# available properties
Example 
```js
{
  sectionUrl: [
    {
      sectionTitle: 'this is some title that will appear',
      size: 'small|medium',
      maxWidth: "1400px",
      hideBottomSeparator: false,
      media: [
        {
          type: 'video',
          url: 'https://www.youtube.com/watch?v=yZ-WwOH3ZLQ',
          title: 'Vodafone Paredes de Coura 19',
          description: '',
          autoplay: false,
        },
        {
          type: 'link',
          image: '/castelbel/castelbel01.webp',
          path: '/castelbel',
          title: 'Castelbel',
          description: '',
        },
        {
          type: 'image',
          image: '/castelbel/castelbel02.webp',
          title: 'Castelbel - Conceito Coleção Garça',
          description: '',
        },
        {
          type: 'card',
          title: 'Castelbel Coleção Garça',
          description: 'Promotional content for the portuguese cosmetics brand Castelbel.',
          details: 'Direction. Camera Operation. Editing.',
          showDefaultDescription: false
        },
      ]
    }
  ],
}
```