<template lang="html">
  <div class="note">
    <a href="" class="note__delete">
      <span class="note__delete-icon">&times;</span>
    </a>
    <div class="note__content">
      <a href="" class="note__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
      <p class="note__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .note {
    display: flex;
    color: inherit;
    text-decoration: none;
    border-bottom: 2px solid #eee;
    opacity: .3;
    flex-direction: row;
    max-width: 100%;

    &:hover {
      opacity: 1;

      .note__delete {
          margin-left: 0;
      }
    }

    &__content {
      padding: 30px;
      flex: 2;
      overflow: hidden;
    }

    &__title {
      display: block;
      font-size: 1em;
      margin: 0;
      font-weight: 500;
      text-decoration: none;
      color: inherit;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &:hover {
        text-decoration: underline;
      }
    }

    &__body {
      font-size: .9em;
      margin-bottom: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__delete {
      position: relative;
      margin-left: -50px;
      width: 50px;
      display: block;
      background-color: #cc4466;
      min-height: 100%;
      color: #fff;
      transition: margin-left 100ms ease-in-out;

      &-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5em;
        font-weight: 600;
      }
    }
  }
</style>
