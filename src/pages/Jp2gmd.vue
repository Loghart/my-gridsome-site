<template>
  <Layout>

<ul id="test">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>

<ul class="dupa">
  <li v-for="item in items" :key="item.id">
    {{ item.id }}
  </li>
</ul>


  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  },
  data() {
    return {
      items: [
        { message: 'Foo', id: 1 }, // item
        { message: 'Bar', id: 2 }  // item
      ]
    }
  }
  
}

</script>
