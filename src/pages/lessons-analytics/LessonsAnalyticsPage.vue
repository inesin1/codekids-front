<script lang="ts" setup></script>

<template>
  <a-table
    style="
      border: 1px solid #f0f0f0;
      border-bottom: none;
      border-radius: 2px;
      cursor: pointer;
    "
    :columns="columns"
    :data-source="data"
    :loading="isLoading"
  >
    <template #summary>
      <a-table-summary fixed>
        <a-table-summary-row>
          <a-table-summary-cell :index="0">Summary</a-table-summary-cell>
          <a-table-summary-cell :index="1"
            >This is a summary content</a-table-summary-cell
          >
        </a-table-summary-row>
      </a-table-summary>
    </template>
  </a-table>
</template>
