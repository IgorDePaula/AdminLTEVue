<template>
   <div>
      {{percent.toFixed(0)}}% <br>
      <lte-progress-bar :percent="percent" color="success" />
   </div>
</template>

<script>
import LteProgressBar from '../../../src/components/Progress/Progress'
export default {
  name: 'RandomProgressBar',
  components: {
    LteProgressBar
  },
  data () {
    return {
      percent: 0
    }
  },
  mounted () {
    setInterval(() => {
      this.percent = Math.random() * 100
    }, 1500)
  }
}
</script>
