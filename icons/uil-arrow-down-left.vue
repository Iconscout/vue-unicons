<template>
  <svg
    v-bind="$attrs"
    :width="size"
    :height="size"
    xmlns="http://www.w3.org/2000/svg"
    class="ui-svg-inline"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M17,16H9.41l8.3-8.29a1,1,0,1,0-1.42-1.42L8,14.59V7A1,1,0,0,0,6,7V17a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,7,18H17a1,1,0,0,0,0-2Z"
    />
  </svg>
</template>

<script>
import '../utils/style.css'

export default {
  props: {
    size: {
      type: String,
      default: '1em'
    }
  }
}
</script>