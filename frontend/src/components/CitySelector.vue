<template>
  <div class="container">
    <template v-if="listOfCities">
      <select class="form-select" @input='changeCity($event.target.value)' v-model='selectedCity'>
        <option selected="true" disabled="disabled">Выберите город</option>
        <template v-for="(item, index) in listOfCities" :key="index">
          <option v-bind:value="item.id">{{item.name}}</option>
        </template>
      </select>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'CitySelector',
  data: () => ({
   selectedCity: 'Выберите город'
  }),
  methods: {
    ...mapActions('goods', [
      'fetchCities',
      'fetchGoods'
    ]),
    ...mapMutations('goods', ['CITY']),
    changeCity (city){
      this.CITY(city)
      this.fetchGoods()
    }
  },
  computed:{
    ...mapGetters('goods', [
      ['allCities']
    ]),
    listOfCities(){
      return this.allCities
    }
  },
  mounted() {
    this.fetchCities
  }
}
</script>