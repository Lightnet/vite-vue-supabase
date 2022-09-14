<script>
  export default {
    props: ['access_token'],
    setup(props) {
      console.log(props)
    }
  }
  console.log('access')
</script>
<template>
  <div>
    <label> TOKEN </label>
  </div>
</template>