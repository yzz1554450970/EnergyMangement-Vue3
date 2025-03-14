<!-- RadioGroup.vue -->
<template>
  <div class="radio-group" :class="{ vertical }">
    <div
      v-for="item in normalizedList"
      :key="item.value"
      class="radio-item"
      :class="{ checked: isChecked(item.value), disabled: item.disabled }"
      @click="!item.disabled && changeModelValue(item.value)"
    >
      <div class="radio-indicator"></div>
      <div class="radio-label">{{ item.label }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'

interface RadioOption {
  label: string
  value: string | number
  disabled?: boolean
}

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true
  },
  list: {
    type: Array as PropType<RadioOption[]>,
    required: true,
    validator: (val: RadioOption[]) => val.every(item => 'label' in item && 'value' in item)
  },
  vertical: { //横向还是纵向分布
    type: Boolean,
    default: false
  },
  // 可选：自定义字段名
  labelKey: {
    type: String,
    default: 'label'
  },
  valueKey: {
    type: String,
    default: 'value'
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

// 规范化列表数据（如果需要字段映射）
const normalizedList = computed(() => {
  return props.list.map(item => ({
    label: item[props.labelKey],
    value: item[props.valueKey],
    disabled: item.disabled || false
  }))
})

const isChecked = (value: string | number) => {
  return value === props.modelValue
}

const changeModelValue = (value: string | number) => {
  if (value !== props.modelValue) {
    emit('update:modelValue', value)
  }
}
</script>

<style scoped>
.radio-group {
  display: flex;
  gap: 12px;
  &.vertical {
    flex-direction: column;
  }
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #dcdfe6;

  &:hover:not(.disabled) {
    border-color: #409eff;
  }

  &.checked {
    border-color: #409eff;
    background-color: #f5f7ff;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: #f5f5f5;
  }
}

.radio-indicator {
  width: 16px;
  height: 16px;
  border: 2px solid #dcdfe6;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;

  .checked & {
    border-color: #409eff;
    background-color: #409eff;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: white;
    }
  }

  .disabled & {
    background-color: #f5f5f5;
    border-color: #e4e7ed;
  }
}

.radio-label {
  font-size: 14px;
  user-select: none;
}
</style>