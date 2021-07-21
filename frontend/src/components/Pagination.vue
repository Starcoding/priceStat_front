<template>
    <div class="pagination" v-if="maxPage > 0">
        <button class="btn btn-warning" @click='currentPage = 1'>&lt;&lt;</button>
        <button class="btn btn-success" @click='decrCurrPage'>&lt;</button>
        <div class="pagination-text" >{{ currentPage }} / {{ maxPage }}</div>
        <button class="btn btn-success" @click='incCurrPage'>&gt;</button>
        <button class="btn btn-warning" @click='currentPage = maxPage'>&gt;&gt;</button>
      </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      default: () => 1
    },
    maxPage: {
      type: Number,
      required: true,
      default: () => 0
    },

  },
  methods: {
    incCurrPage(){
      if (this.currentPage < this.maxPage){
        this.currentPage++
        this.$emit('incPage')
      }
    },
    decrCurrPage(){
      if (this.currentPage > 1){
        this.currentPage--
        this.$emit('decPage')
      }
    }
  }
}
</script>
