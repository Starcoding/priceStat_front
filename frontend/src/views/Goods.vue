<template>
  <div class="container">
    <div class="pagination" v-if="maxPage > 0">
      <button class="btn btn-warning" @click='currentPage = 1'>&lt;&lt;</button>
      <button class="btn btn-success" @click='decrCurrPage'>&lt;</button>
      <div class="pagination-text" >{{ currentPage }} / {{ maxPage }}</div>
      <button class="btn btn-success" @click='incCurrPage'>&gt;</button>
      <button class="btn btn-warning" @click='currentPage = maxPage'>&gt;&gt;</button>
    </div>
    <div v-if="amountOfGoods">
      <button class="btn btn-info" @click="release">Показать выбранные</button>
      <p>Всего товаров: {{amountOfGoods}}</p>
    </div>
    <!-- <Pagination :maxPage='maxPage'/> -->
    <template v-if="amountOfGoods">
      <Table :items="listOfGoods" :fields="fields" >
        <template v-slot:select>
          Выбрать
        </template>
        <template v-slot:action="row">
          <input type="checkbox" v-model="row.item.is_selected" />
        </template>
        <!-- <template v-slot:imgUrl="url">
          <img class="small-picture" :src="url.item.imgUrl" alt="">
        </template> -->
        <template v-slot:button>
          <button class="btn btn-success">Детали</button>
        </template>
      </Table>
    </template>
    <template v-else>
      <div>
        Пожалуйста, выберите город!
      </div>
    </template>
    <div class="pagination" v-if="maxPage > 0">
        <button class="btn btn-warning" @click='currentPage = 1'>&lt;&lt;</button>
        <button class="btn btn-success" @click='decrCurrPage'>&lt;</button>
        <div class="pagination-text" >{{ currentPage }} / {{ maxPage }}</div>
        <button class="btn btn-success" @click='incCurrPage'>&gt;</button>
        <button class="btn btn-warning" @click='currentPage = maxPage'>&gt;&gt;</button>
      </div>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import Pagination from '@/components/Pagination.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    name: 'App',
    components: {
      Table,
      // Pagination
    },
    data: () => ({
      currentPage: 1,
      perPage: 100,
      fields: [
        {
          label: "select", field: "action"
        },
        {
          label: "Название", field: "title"
        },
        // {
        //   label: "Картинка", field: "imgUrl"
        // },
        // {
        //   label: "Описание", field: "body"
        // },
        // {
        //   label: "Цена", field: "price"
        // },
        {
          label: "График", field: "button"
        }
      ]
    }),
    computed: {
      ...mapGetters('goods', [
            [
              'allGoods'
            ]
        ]),
        listOfGoods(){
          return this.allGoods.slice(this.currentPage * this.perPage, (this.currentPage +1 ) * this.perPage)
        },
        amountOfGoods(){
          return this.allGoods.length
        },
        maxPage(){
          let value = Math.ceil(this.allGoods.length / this.perPage - 1)
          return value
        },
        lengthOnPage(){
          return this.listOfGoods.length
        }
    },
    methods: {
      ...mapMutations('goods', ['CHOOSEN']),
      ...mapActions('goods', ['fetchPrices']),
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
      },
      addToChecked(event){
        console.log(event.target.id)
      },
      release(){
        let currList = this.listOfGoods
        let listOfChoosen = []
        for (let index = 0; index < (this.lengthOnPage - 1) ; index++){
          // console.log(currList[index].id, currList[index].title)
          if (currList[index].is_selected){
            let choosedGood = {
              'id': currList[index].id,
              'title': currList[index].title,
            }
            listOfChoosen.push(choosedGood)
            // console.log(listOfChoosen)
          }
        }
        if (listOfChoosen.length) {
          this.CHOOSEN(listOfChoosen)
          this.$store.dispatch('initPrices')
          this.$router.replace({ path: '/chart' })
        }
      }
    },
    watch: {
    }
}
</script>

<style scoped>
.btn {
  line-height: 1.2;
  font-size: 0.75rem;
}
</style>