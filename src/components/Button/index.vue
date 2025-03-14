<template>
    <button
      class="custom-button"
      :class="[buttonClass, { 'disabled': disabled || loading }]"
      :disabled="disabled || loading"
      @click="handleClick"
    >
      <span v-if="loading" class="loader"></span>
      <span class="content" :class="{ 'hidden': loading }">
        <slot></slot>
      </span>
    </button>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    type: {
      type: String,
      default: 'default', // 'default' | 'primary' | 'success' | 'warning' | 'danger'
      validator: (value:string) => [
        'default',
        'primary',
        'success',
        'warning',
        'danger'
      ].includes(value)
    },
    size: {
      type: String,
      default: 'medium', // 'small' | 'medium' | 'large'
      validator: (value:string) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean
  })
  
  const emit = defineEmits(['click'])
  
  const buttonClass = computed(() => ({
    [`btn-${props.type}`]: true,
    [`btn-${props.size}`]: true,
    'btn-round': props.round
  }))
  
  const handleClick = (e:Event) => {
    if (!props.disabled && !props.loading) {
      emit('click', e)
    }
  }
  </script>
  
  <style scoped>
  .custom-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
  }
  
  /* 尺寸 */
  .btn-small {
    padding: 6px 12px;
    font-size: 12px;
  }
  .btn-medium {
    padding: 8px 16px;
    font-size: 14px;
  }
  .btn-large {
    padding: 12px 24px;
    font-size: 16px;
  }
  
  /* 类型 */
  .btn-default {
    background-color: #f0f0f0;
    color: #333;
  }
  .btn-primary {
    background-color: #409eff;
    color: white;
  }
  .btn-success {
    background-color: #67c23a;
    color: white;
  }
  .btn-warning {
    background-color: #e6a23c;
    color: white;
  }
  .btn-danger {
    background-color: #f56c6c;
    color: white;
  }
  
  /* 圆角 */
  .btn-round {
    border-radius: 20px;
  }
  
  /* 禁用状态 */
  .disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  /* 加载动画 */
  .loader {
    width: 16px;
    height: 16px;
    border: 2px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: rotation 1s linear infinite;
  }
  
  .hidden {
    opacity: 0;
  }
  
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>