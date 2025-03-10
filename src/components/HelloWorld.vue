<template>
  <div class="person">
    <h2>当前求和： {{ sum }}</h2>
    <button @click="changeSum">点击+1</button>
    <hr>
    <img v-for="dog in dogList" :key="dog.id" :src="dog.img"/>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {onMounted, reactive} from 'vue'
  // import axios from 'axios'
  import useSum from '@/hooks/useSum'
  
  let {sum, changeSum} = useSum()
  
  let dogList = reactive([
    {
      id: 'figf01',
      name: 'dog1',
      img: '',
    },
    {
      id: 'figf02',
      name: 'dog2',
      img: '',
    }
  ])

  // async function getDogImg () {
  //   let data = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
  //   // console.log(data.data.message)
  //   return data.data.message
  //   // dogList.map(item => {
  //   //   item.img = data.data.message
  //   // })
  // }

  function getDogImg () {
    // let data = axios.get('https://dog.ceo/api/breed/pembroke/images/random').then(res => {
    //   console.log(res.data.message)
    //   return res.data.message
    // })
    // console.log(data.data.message)
    // return data.data.message
    // dogList.map(item => {
    //   item.img = data.data.message
    // })
  }

  function getDogs () {
    dogList.map(item => {
      // console.log(getDogImg())
      item.img = getDogImg()
    })
  }

  onMounted(() => {
    getDogs()
  })

</script>