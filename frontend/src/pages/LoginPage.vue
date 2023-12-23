<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="column flex-center">
        <h2>Notes to Email</h2>
        <q-btn color="primary" label="Login with google" @click="onLogin" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const onLogin = () => {
  signInWithPopup(auth, provider);
};
</script>
