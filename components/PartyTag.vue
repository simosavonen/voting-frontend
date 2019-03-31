<template>
  <span :class="partyToCss" class="tag is-party">
    {{ party }}
  </span>
</template>

<script>
const partyToCssClass = {
  Keskusta: 'is-keskusta',
  Kokoomus: 'is-kokoomus',
  SDP: 'is-sdp',
  Vihreät: 'is-vihreat'
}

export default {
  props: {
    party: {
      type: String,
      default: null
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
    background-color: #71ad2c;
  }
  &.is-kokoomus {
    color: white;
    background-color: blue;
  }
  &.is-sdp {
    color: white;
    background-color: #d7000a;
  }
  &.is-vihreat {
    color: white;
    background-color: #61bf1a;
  }
}
</style>
