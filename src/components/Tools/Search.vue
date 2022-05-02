<template>
  <v-text-field
    :value="$store.state.search"
    @input="$store.commit('setSearch', $event)"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    class="mt-1 expanding-search"
    :class="{ closed: searchClosed && !$store.state.search }"
    prepend-inner-icon="mdi-magnify"
    dense
    clearable
    placeholder="Search"
    filled
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      searchClosed: true,
    };
  },
};
</script>

<style>
.expanding-search .v-input__slot:before,
.expanding-search .v-input__slot:after {
  border-color: transparent !important;
}
.expanding-search {
  transition: max-width 0.5s;
}
.expanding-search.closed {
  max-width: 45px;
}
.expanding-search.closed .v-input__slot {
  background: transparent !important;
}
.expanding-search .v-input__slot {
  cursor: pointer !important;
}
</style>
