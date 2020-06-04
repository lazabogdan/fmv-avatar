<template>
  <component 
    :is="noLink ? element : 'b-link'"
    :to="to"
    :class="avatarClasses">
    <span
      v-if="title"
      :class="titleClasses">
      <slot>{{ title }}</slot>
    </span>
    <b-img
      v-else
      :src="src" 
      :alt="alt" 
      :class="imgClasses" />
    <slot name="after-img" />
  </component>
</template>

<style lang="scss">
$gray-light: #fefefe;
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';
@import 'fm-avatar/avatar';
</style>

<script>
import { props } from 'bootstrap-vue/esm/components/link/link'

export default {
  props: {
    element: {
      type: String,
      default: () => 'span'
    },
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    imgClass: {
      type: String,
      default: null
    },
    title: {
      type: [String, Boolean],
      default: null
    },
    titleClass: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator: val => ['xs', 'sm', 'lg', 'xl', 'xxl'].includes(val)
    },
    landscape: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: true
    },
    circle: {
      type: Boolean,
      default: false
    },
    noLink: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: null,
      validator: val => ['online', 'offline'].includes(val)
    },
    ...props
  },
  computed: {
    imgClasses() {
      return [
        'avatar-img',
        this.rounded && !this.circle ? 'rounded' : null,
        this.circle ? 'rounded-circle' : null,
        this.imgClass ? this.imgClass : null
      ]
    },
    titleClasses() {
      return [
        'avatar-title',
        this.rounded && !this.circle ? 'rounded' : null,
        this.circle ? 'rounded-circle' : null,
        this.titleClass ? this.titleClass : null
      ]
    },
    avatarClasses() {
      return [
        'avatar',
        this.landscape ? 'avatar-4by3' : null,
        this.size ? `avatar-${this.size}` : null,
        this.status ? `avatar-${this.status}` : null
      ]
    }
  }
}
</script>
