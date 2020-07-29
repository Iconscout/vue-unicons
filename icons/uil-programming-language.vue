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
      d="M22,3l-3,15.1l-9.1,3l-7.9-3L2.8,14h3.4l-0.4,1.7l4.8,1.8l5.5-1.8l0.8-3.8H3.2l0.7-3.4h13.6L18,6.4H4.3L5,3H22z"
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