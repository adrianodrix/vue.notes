<template lang="html">
<div class="sidebar">
  <note></note>
  <note></note>
  <note></note>
  <note></note>
<!--
  <div class="sidebar__content">
    <a href="">Start new Note</a>
  </div>
  <div class="sidebar__content">
    Boo, no notes. Get writing!
  </div>
-->
</div>
</template>

<script>
import Note from './Note.vue'

export default {
  components: {
    Note
  }
}
</script>

<style lang="scss">
  .sidebar {
    background-color: #f9f9f9;
    flex: 1;
    height: 100%;
    max-width: 28%;
    border-right: 2px solid #eee;
    overflow-y: scroll;

    &__content {
      padding: 30px;

      a {
        text-decoration: none;
        color: inherit;
      }

    }

  }
</style>
