<template>
  <nav
    class="fixed top-0 z-40 w-full border-b dark:border-gray-800 bg-white dark:bg-gray-900 text-base"
    :class="{ 'shadow border-transparent': scrolled }"
    @click="scrollToTop"
  >
    <div class="logo absolute m-3">
      <a href="https://let.sh" class="inline-block">
        <div
          class="back-button px-3 py-2 font-extrabold"
          :style="{
            'border-radius': '20px',
          }"
        >
          <IconChevronRight
            class="w-5 h-5 inline"
            style="transform: scaleX(-1)"
          />
          <p>Back To Console</p>
        </div>
      </a>

      <NuxtLink
        :to="localePath('/')"
        class="flex-shrink-0 flex-1 text-2xl font-sans inline-block align-middle ml-4"
        :aria-label="`${settings.title} Logo`"
      >
        <span v-if="!logo">{{ settings.title }}</span>

        <img
          v-if="logo"
          :src="logo.light"
          class="h-8 max-w-full light-img align-middle"
          :alt="settings.title"
        />
        <img
          v-if="logo"
          :src="logo.dark"
          class="h-8 max-w-full dark-img align-middle"
          :alt="settings.title"
        />
      </NuxtLink>
    </div>

    <div class="container mx-auto flex-1 px-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="lg:w-1/5 flex items-center pr-4" @click.stop="noop">
          <div>
            <!-- <NuxtLink
              :to="localePath('/')"
              class="flex-shrink-0 flex-1 font-bold text-xl inline-block align-middle"
              :aria-label="`${settings.title} Logo`"
            >
              <span v-if="!logo">{{ settings.title }}</span>

              <img
                v-if="logo"
                :src="logo.light"
                class="h-8 max-w-full light-img align-middle"
                :alt="settings.title"
              />
              <img
                v-if="logo"
                :src="logo.dark"
                class="h-8 max-w-full dark-img align-middle"
                :alt="settings.title"
              />
            </NuxtLink> -->
          </div>
        </div>
        <div
          v-if="settings.layout !== 'single'"
          class="flex-1 flex justify-start w-4/6"
        >
          <AppSearchAlgolia
            v-if="settings.algolia"
            :options="settings.algolia"
            :settings="settings"
          />
          <AppSearch v-else class="hidden lg:block" />
        </div>
        <div
          class="lg:w-1/5 flex items-center pl-4 lg:pl-8"
          :class="{
            'justify-between': lastRelease && settings.layout !== 'single',
            'justify-end': !lastRelease || settings.layout === 'single',
          }"
        >
          <NuxtLink
            v-if="lastRelease"
            :to="localePath('/releases')"
            class="font-semibold leading-none text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 text-base mr-4"
            exact-active-class="text-primary-500"
            >{{ lastRelease.name }}</NuxtLink
          >
          <AppLangSwitcher />
          <AppColorSwitcher />
          <div class="flex items-center">
            <a
              v-if="settings.twitter"
              :href="`https://twitter.com/${settings.twitter}`"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              name="Twitter"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 ml-4"
              :class="{
                'hidden lg:block': settings.layout !== 'single',
              }"
            >
              <IconTwitter class="w-5 h-5" />
            </a>
            <a
              v-if="settings.github"
              :href="githubUrls.repo"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
              name="Github"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 ml-4"
              :class="{
                'hidden lg:block': settings.layout !== 'single',
              }"
            >
              <IconGithub class="w-5 h-5" />
            </a>

            <button
              v-if="settings.layout !== 'single'"
              class="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none -mr-2"
              aria-label="Menu"
              @click.stop="menu = !menu"
            >
              <IconX v-if="menu" class="w-5 h-5" />
              <IconMenu v-else class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      scrolled: 0,
    };
  },
  computed: {
    ...mapGetters(["settings", "githubUrls", "lastRelease"]),
    menu: {
      get() {
        return this.$store.state.menu.open;
      },
      set(val) {
        this.$store.commit("menu/toggle", val);
      },
    },
    logo() {
      if (!this.settings.logo) {
        return;
      }
      if (typeof this.settings.logo === "object") {
        return this.settings.logo;
      }
      return {
        light: this.settings.logo,
        dark: this.settings.logo,
      };
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    scrollToTop() {
      if (window.innerWidth >= 1280) {
        return;
      }
      window.scrollTo(0, 0);
    },
    noop() {},
  },
};
</script>

<style>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.back-button {
  background-color: rgb(135 146 169 / 15%);
  transition-duration: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back-button:hover {
  background-color: rgb(135 146 169 / 40%);
}
</style>
