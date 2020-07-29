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
      d="M15,13H9a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V15h2a1,1,0,0,0,0-2Zm2-7H7A1,1,0,0,0,7,8h4v2a1,1,0,0,0,2,0V8h4a1,1,0,0,0,0-2Z"
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