<template>
  <div class="w-full max-w-3xl mx-auto py-8">
    <div class="text-xl font-semibold">Notepad</div>
    <div class="relative flex justify-end mb-7">
      <NuxtLink
        to="/notepad/create"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
      >
        Add Note
      </NuxtLink>
    </div>
    <div
      v-for="notepad in data"
      class="relative w-full border rounded-lg p-5 mb-5"
      :key="notepad.id"
    >
      <div class="text-lg font-semibold">{{ notepad.title }}</div>
      <p>{{ notepad.content }}</p>

      <div class="flex justify-end pt-3">
        <NuxtLink
          :to="'/notepad/' + notepad.id"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        >
          Edit
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NotepadModel } from "~~/server/model/notepad";

useHead({
  title: "Home Page",
});
const data = ref<NotepadModel[]>([]);

const fetchData = async () => {
  try {
    const result = await $fetch("/api/notepad");
    data.value = result.data as NotepadModel[];
  } catch {
    alert("Fetch error");
  }
};
onMounted(fetchData);
</script>
