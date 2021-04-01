<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { FlexiSlider } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  components: {
   FlexiSlider,
  }
});
</script>

<template>
  <div id="app">
    <flexi-slider />
  </div>
</template>
