<template>
    <div class="demo">
      <RadioGroup 
        v-model="selectedValue"
        :list="options"
      />
      
      <p>当前选中的值：{{ selectedValue }}</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import RadioGroup from '@/components/Form/RadioGroup/index.vue'
  
  const selectedValue = ref('A')
  
  const options = ref([
    { label: '选项 A', value: 'A' },
    { label: '选项 B', value: 'B' },
    { label: '禁用选项', value: 'C', disabled: true }
  ])
  </script>