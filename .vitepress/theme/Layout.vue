<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import './style.css'

const { Layout } = DefaultTheme

onMounted(() => {
})
</script>

<template>
  <Layout>
    <template #doc-after>
      <Artalk />
    </template>
  </Layout>
</template>