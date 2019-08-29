<template>
  <div class="fixed-center text-center">
    <p class="text-faded">Sorry, you can't  authorization for access this page...<strong>(403)</strong></p>
    <q-btn color="secondary" style="width:200px;" @click="$router.push('/')" >Go back</q-btn>
  </div>
</template>

<script>
export default {
  name: 'Error403'
}
</script>
