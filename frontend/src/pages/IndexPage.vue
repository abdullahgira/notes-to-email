<template>
  <q-page class="container">
    <AppPageHeader header="Groups">
      <template v-slot:right>
        <div class="row items-center q-gutter-sm">
          <q-btn flat icon="upload" label="Upload .txt" @click="addRow" />
          <q-btn icon="add" color="primary" label="New" @click="onNewSite" />
        </div>
      </template>
    </AppPageHeader>

    <q-table class="q-mt-md" :columns="cols" @rowClick="onRowClick">
      <template v-slot:top>
        <q-space />
        <q-input dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { groupsApi } from "src/api/groups-api";
import { useAxios } from "src/composables/use-axios";

import AppPageHeader from "src/components/AppPageHeader.vue";

const { run, data, loading } = useAxios();

const cols = ref([
  {
    name: "name",
    field: "name",
    label: "Name",
    align: "left",
  },
  {
    name: "notes",
    field: "notes-count",
    label: "# Notes",
    align: "left",
  },
]);

const onRowClick = (_, row) => {};

onMounted(() => {
  run(groupsApi.getAll());
});
</script>
