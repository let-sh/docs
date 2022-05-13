<template>
  <a :href="href" target="__blank" style="text-decoration: none; color: inherit;">
    <div class="rounded-lg overflow-hidden border hover:shadow transition-shadow duration-300 cursor-pointer">
      <div class="h-40 relative overflow-hidden flex justify-center items-center">
        <h2 class="absolute no-pseudo-ele text-overflow-ellipsis-2 text-center" style="width: 100%; margin:0; padding: 0 1.5rem; color: #fff; border: none;">
          {{ title }}
        </h2>
        <div class="w-full h-40 bg-gray-600">
          <img v-if="bgImg" style="margin: 0;" class="object-cover" :src="bgImg" alt="bg img">
        </div>
      </div>
      <article class="pt-2 py-6 px-6">
        <div>
          <p v-if="label" style="margin: 4px 0" class="text-overflow-ellipsis">
            {{ label }}
          </p>
          <h3 style="margin: 0; border: none;" class="no-pseudo-ele text-overflow-ellipsis-2">
            {{ title }}
          </h3>
          <p class="text-overflow-ellipsis-4">
            {{ content }}
          </p>
        </div>
        <div class="flex items-center">
          <div class="w-12 h-12 bg-gray-300 border rounded-full overflow-hidden">
            <img v-if="avatar" style="margin: 0;" :src="avatar" alt="avatar">
          </div>
          <div class="ml-4">
            <p style="margin: 0; line-height: 1.2;" class="text-overflow-ellipsis max-w-64">
              {{ author }}
            </p>
            <small style="margin: 0; line-height: 1;" class="text-gray-500">{{ formateDate(date) }}</small>
          </div>
        </div>
      </article>
    </div>
  </a>
</template>

<script>
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

export default {
  name: 'PostCard',
  props: {
    href: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    bgImg: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: 'Anonymous'
    },
    date: {
      type: Date,
      default: new Date()
    }
  },
  methods: {
    formateDate (date) {
      return dayjs(date).format('ll')
    }
  }
}
</script>

<style scoped>
.text-overflow-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-overflow-ellipsis-2,
.text-overflow-ellipsis-4
{
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.text-overflow-ellipsis-4 {
  -webkit-line-clamp: 4;
}

.no-pseudo-ele::before,
.no-pseudo-ele::after {
  display: none;
  border: none;
}
</style>
