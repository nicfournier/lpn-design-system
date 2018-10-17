<template>
  <button :style="styles" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "app-button",
  props: {
    /**
     * Sets the button font color
     *  @since 1.2.0
     */
    color: {
      type: String,
      default: "black"
    },
    background: {
      type: String,
      default: "white"
    }
  },
  computed: {
    styles() {
      return {
        color: this.color,
        background: this.background
      };
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<docs>
```jsx
<app-button color="orange">Push Me</app-button>
```
</docs>