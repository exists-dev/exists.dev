<template>
  <Html class="bg-neutral-focus">

  <Body class="h-screen bg-neutral-focus">
    <NuxtLayout>
      <!-- <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" /> -->
      <!--Nav-->
      <div class="w-full container mx-auto">
        <div class="w-full flex items-center justify-between">
          <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#">
            <img src="public/exists.dev.png" style="width: 200px;" />
          </a>
        </div>
      </div>
      <NuxtPage />
    </NuxtLayout>
  </Body>

  </Html>
</template>
