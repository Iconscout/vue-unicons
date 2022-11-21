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
      d="M20.16,5A6.29,6.29,0,0,0,12,4.41a6.27,6.27,0,0,0-8.16,9.48l6,6.05a3,3,0,0,0,4.24,0l6-6.05A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6,6a1,1,0,0,1-1.42,0l-6-6a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,6Z"
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