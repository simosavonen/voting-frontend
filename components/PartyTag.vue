<template>
  <span :class="partyToCss" class="tag is-party">
    {{ party }}
  </span>
</template>

<script>
const partyToCssClass = {
  Keskusta: 'is-keskusta',
  Kokoomus: 'is-kokoomus'
}

export default {
  props: {
    party: {
      type: String,
      required: true
    }
  },
  computed: {
    partyToCss() {
      return partyToCssClass[this.party]
    }
  }
}
</script>
<style lang="scss">
@import '~bulma/sass/utilities/initial-variables';
.tag.is-party {
  font-size: $size-5;

  &.is-keskusta {
    color: white;
    background-color: green;
  }
  &.is-kokoomus {
    color: white;
    background-color: blue;
  }
}
</style>
