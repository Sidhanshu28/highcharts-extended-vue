<template>
  <div class="container-fluid no-gutters main" style="overflow-x:hidden;background-color: #f7f7f7;">
    <HeaderApp/>
    <div class="row" style="display: flex">
      <Leftbar/>
      <CenterContainer/>
    </div>
  </div>
</template>

<script>
// import DhisHeader from "./components/d2header/DhisHeader";
import HeaderApp from "./components/HeaderApp";
import Leftbar from "./components/Leftbar";
import CenterContainer from "./components/centercontainer/CenterContainer";

export default {
  name: "App",
  components: {
    HeaderApp,
    Leftbar,
    CenterContainer,
  }
};
</script>
<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>