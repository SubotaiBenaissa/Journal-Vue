<template>
  <Navbar />
  <div class="d-flex">
    <div class="col-4">
      <EntrylistComponent />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Navbar: defineAsyncComponent(() =>
      import("../components/NavbarComponent.vue")
    ),
    EntrylistComponent: defineAsyncComponent(() =>
      import("../components/EntrylistComponent.vue")
    ),
  },
};
</script>
