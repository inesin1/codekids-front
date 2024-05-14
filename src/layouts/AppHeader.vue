<script lang="ts" setup>
import { useRoute } from 'vue-router';
import UserDropdown from '../components/UserDropdown.vue'
import { computed, watch } from 'vue';

const route = useRoute()
const pathItems = computed(() => route.path.split('/'))

watch(route, () => {
  console.log(pathItems.value);
})
</script>

<template>
  <a-flex
    horizontal
    justify="space-between"
    align="center"
    style="padding: 0 16px"
  >
    <a-breadcrumb>
      <a-breadcrumb-item v-for="pathItem in pathItems">
        {{ pathItem }}
      </a-breadcrumb-item>
    </a-breadcrumb>

    <!-- Пользователь -->
    <user-dropdown />
  </a-flex>
</template>
