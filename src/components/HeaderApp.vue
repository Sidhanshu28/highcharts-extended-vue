<template>
  <div class="row">
    <div id="headerapp" class="col-2 text-left p-2 m-0"></div>
    <div id="headerapp" class="col-8 text-center p-2 m-0">{{heading}}</div>
    <div id="headerapp" class="col-2 text-right p-2 m-0"></div>
  </div>
</template>

<script>

export default {
  name: "HeaderApp",
  data() {
    return {
      heading: "Demo application",
    };
  }
};
</script>
