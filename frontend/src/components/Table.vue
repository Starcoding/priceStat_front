<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <td :key="index" v-for="(header, index) in headers">
            <slot :name="header" v-bind:header="header">
            {{ header }}
            </slot>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr :key="index" v-for="(item, index) in items">
        <td :key="index" v-for="(field, index) in keys">
          <slot :name="field" v-bind:item="item">
            {{ item[field] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  components: {},
  props: {
    fields: {
      type: Array,
      required: false,
      default: () => [],
    },
    items: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    headers() {
      return this.fields.map((val) => {
        if (val.hasOwnProperty("label")) {
          return val.label;
        } else {
          return val.field.toString();
        }
      });
    },
    keys() {
      return this.fields.map((val) => {
        if (val.hasOwnProperty("field")) {
          return val.field;
        } else {
          return val.toString();
        }
      });
    },
  }
};
</script>

<style scoped>
.table {
  width: 85%;
  margin: 20px auto;
}
.table td {
  margin: 0;
  padding: 2px;
}
</style>