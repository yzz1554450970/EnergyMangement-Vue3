<template>
    <Button @click="handleClick">默认按钮</Button>

    <Button type="primary" size="large" round>
        主要按钮
    </Button>

    <Button type="success" :loading="true">
        加载中...
    </Button>

    <Button type="danger" :disabled="true">
        禁用按钮
    </Button>
</template>
<script lang="ts" setup>
import Button from '@/components/Button/index.vue'
</script>