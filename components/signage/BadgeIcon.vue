<template>
  <component :is="type" :class="['badge-icon ', 'badge-' + colorType, variation]">
      <span class="btn-label">
          <i class="material-icons">
              {{ icon }}
          </i>
        </span>
        <span>
            {{ title }}
        </span>
  </component>
</template>



<script>
/**
 * Cet objet permet de typer les objets pédagogiques
 *
 *
 */
export default {
  /**
   * Component names should be short, pronounceable and Capitalized.
   */
  name: "BadgeIcon",
  props: {
    /**
     * The html element name used for the container of Example component.
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * Style variation to give additional meaning.
     * `default, strong, positive, negative`
     */
    variation: {
      type: String,
      default: "default",
      validator: value => {
        return value.match(/(default|strong|positive|negative)/)
      },
    },
    /**
     * La couleur
     *
     */
    colorType: {
      type: String,
      default: "secondary",
    },
    /**
     * L'icone
     *
     */
    icon: {
      type: String,
      //required:true,
      default: "book",
    },
    /**
     * Le titre
     *
     */
    title: {
      type: String,
      //required:true,
      default: "Livre",
    },
  },
}
</script>


<docs>
  ```jsx
  <BadgeIcon >
      <span class="btn-label">
          <i class="material-icons">
              icon="book"
          </i>
        </span>
        <span>
            title="Le titre"
        </span>
  </BadgeIcon>
  ```
</docs>
