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
      d="M19.5,11.13,5.5,3.05a1,1,0,0,0-1,0,1,1,0,0,0-.5.87V20.08a1,1,0,0,0,.5.87,1,1,0,0,0,1,0l14-8.08a1,1,0,0,0,0-1.74ZM6,18.35V5.65L17,12Z"
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