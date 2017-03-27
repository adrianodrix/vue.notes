<template lang="html">
<div class="sidebar">
  <div class="sidebar__content">
    <a href="#" @click.prevent="clearCurrentNote">Start new Note</a>
  </div>
  <div v-if="notes.length">
    <note v-for="note in notes" :note="note" :key="note.id"></note>

  </div>
  <div class="sidebar__content" v-else>
    Boo, no notes. Get writing!
  </div>
</div>
</template>

<script>
import Note from './Note.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Note
  },
  computed: {
    ...mapGetters([
      'notes'
    ])
  },
  methods: {
    ...mapActions([
      'clearCurrentNote'
    ])
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
