<script setup>
  import {ref} from "vue";

  const drawer = ref(true)
  const active = ref(0)
</script>
<template>
  <div class="w-full h-full flex flex-col">
    <div class="title h-12 bg-tiffany-blue w-full flex justify-between items-center px-4">
      <span @click="drawer = !drawer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
        </svg>
      </span>
    </div>
    <div class="flex w-full flex-grow">
      <div class="w-1/6 min-w-[180px] h-full p-2 select-none space-y-1.5" :class="drawer ? 'open': 'close'">
        <router-link to="/buttons" @click="active = 1"
            class="p-2 rounded hover:bg-tiffany-blue flex group"
            :class="{'bg-tiffany-blue':active === 1}">
          <span class="h-full aspect-square p-1 text-tiffany-blue group-hover:text-baby-powder"
                :class="{'bg-tiffany-blue text-baby-powder':active === 1}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
            </svg>
          </span>
          <div class="p-1 font-semibold">Button</div>
        </router-link>
        <router-link  to="" @click="active = 2"
            class="p-2 rounded hover:bg-tiffany-blue flex group"
            :class="{'bg-tiffany-blue':active === 2}">
          <span class="h-full aspect-square p-1 text-tiffany-blue group-hover:text-baby-powder"
                :class="{'bg-tiffany-blue text-baby-powder':active === 2}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
            </svg>
          </span>
          <div class="p-1 font-semibold">Card</div>
        </router-link>
        <router-link  to="" @click="active = 3"
             class="p-2 rounded hover:bg-tiffany-blue flex group"
             :class="{'bg-tiffany-blue':active === 3}">
          <span class="h-full aspect-square p-1 text-tiffany-blue group-hover:text-baby-powder"
                :class="{'bg-tiffany-blue text-baby-powder':active === 3}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
            </svg>
          </span>
          <div class="p-1 font-semibold">Components</div>
        </router-link>
      </div>
      <div class="p-4">
        <router-view class="select-none"></router-view>
      </div>
    </div>
  </div>
</template>
<style>
  .open {
    @apply border-r border-r-2 border-gray-400 transform transition translate-x-0 duration-200 relative
  }

  .close {
    @apply -translate-x-full absolute
  }
</style>
