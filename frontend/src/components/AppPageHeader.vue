<template>
  <div class="row items-center justify-between q-mt-lg full-width">
    <div class="row items-center">
      <q-btn
        flat
        rounded
        icon="arrow_back"
        class="q-mr-md q-px-sm"
        @click="props.onBack"
        v-show="props.showBackBtn"
      />
      <h5 class="q-my-xs text-bold" v-if="props.header">{{ props.header }}</h5>
      <slot name="header"></slot>
      <slot name="left"></slot>
    </div>

    <div><slot name="right"></slot></div>
  </div>
</template>

<script setup>
const props = defineProps({
  header: String,
  onBack: Function,
  showBackBtn: Boolean,
});
</script>
