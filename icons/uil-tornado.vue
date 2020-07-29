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
      d="M10,21H8a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm1-4H6a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2ZM18,2a1,1,0,0,0-1-1H3A1,1,0,0,0,3,3H17A1,1,0,0,0,18,2Zm3,3H6A1,1,0,0,0,6,7H21a1,1,0,0,0,0-2ZM19,9H10a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Zm-5,4H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"
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