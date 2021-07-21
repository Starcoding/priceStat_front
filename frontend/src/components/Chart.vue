<template>
  <div class="container">
    <h2>График цен</h2>
    <div v-for="item in listOfGoods" :key="item">
      {{ item }}
    </div>
    <div v-if="chartData" class="chart">
            <vue3-chart-js
            :id="lineChart.id"
            :type="lineChart.type"
            :data="chartData"
            :options="lineChart.options"
            ></vue3-chart-js>
    </div>
  </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Vue3ChartJs,
  },
  data: () => ({
    listOfGoods: [],
    lineChart: {
      id: 'line',
      type: 'line'
      },
      options: {
        aspectRatio: 3
      }
    }),
  computed: {
      ...mapGetters('goods', ['choosenGoods', 'getPrices']),
      updateListOfGoods() {
        this.listOfGoods = this.choosenGoods
      },
      prices(){
        return this.getPrices
      },
      chartData(){
        if (this.prices) {
          console.log(this.getPrices)
          const data = { // В эту data нужно положить наши лейблы и датасеты.
            labels: ['1 марта', '2 марта', '3 марта', '4 марта', '5 марта', '6 марта', '7 марта', ],
            datasets: [
              { 
                label: 'Сметана',
                data: [40, 20, 80, 10, 1, 2, 4],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.3
              },
              {
                  label: 'Чипсы',
                data: [42, 30, 50, 20, 4, 8, 17],
                fill: false,
                borderColor: 'rgb(100, 168, 123)',
                tension: 0.3
              }
            ]
          }
          return data
        }
      }
  }
}
</script>