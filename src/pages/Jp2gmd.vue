<template>
  <Layout>
<ul id="test">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>


  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  },
   data: {
     message: '',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
    
  }
  
}

</script>
