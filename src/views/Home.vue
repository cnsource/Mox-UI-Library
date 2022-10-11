<template>
  <div class="h-screen w-full bg-blue-500 flex flex-col items-center justify-center">
    <span class="relative bg-gray-200 p-4 rounded-2xl shadow-2xl z-0 font-semibold uppercase text-3xl text-blue-500">mox ui library</span>
    <router-link to="/guide" class="relative px-4 py-2 m-2 select-none rounded-full flex text-white group-hover:text-blue-500 hover:bg-white
                 hover:text-blue-500 transition transform duration-200 ease-in-out hover:underline hover:decoration-1"> Quick Start
      <span class="animate-bounce pl-1">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"/>
       </svg>
      </span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
