<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title>Notes to Email</q-toolbar-title>
        <div>
          <q-btn flat color="grey-8" label="Logout" @click="onLogout" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { getAuth } from "firebase/auth";

const onLogout = () => {
  getAuth().signOut();
};
</script>
