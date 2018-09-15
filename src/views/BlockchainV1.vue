<template>
  <div class="blockchain">
    <child-toolbar :title="title"></child-toolbar>
    <div class="blockchain__container">
      <div class="blockchain__buttons">
        <button :disabled="isConnected" @click="start()" class="blockchain__button blockchain__button--start">Запуск</button>
        <button :disabled="!isConnected" @click="stop()" class="blockchain__button blockchain__button--stop">Остановка</button>
        <button :disabled="getTransactions.length === 0" @click="reset()" class="blockchain__button blockchain__button--reset">Сброс</button>
      </div>
      <div class="blockchain__sum">
        <h2>Сумма: {{getSum | btc}} </h2>
      </div>
      <div class="blockchain__table">
        <table>
          <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Sum</th>
          </tr>
          </thead>
          <tbody>
          <tr :key="i" v-for="(transaction, i) in getTransactions">
            <td>
              <div :key="fi" v-for="(from, fi) in transaction.from">{{from}}</div>
            </td>
            <td>
              <div :key="ti" v-for="(to, ti) in transaction.to">{{to}}</div>
            </td>
            <td>{{transaction.sum | btc }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import ChildToolbar from '@/components/layout/ChildToolbar.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'blockchain-v1',
    components: {
      ChildToolbar
    },
    data () {
      return {
        title: 'Взаимодействие с сервером по протоколу websocket v1'
      }
    },
    computed: {
      ...mapGetters({
        getTransactions: 'blockchain/getTransactions',
        getSum: 'blockchain/getSum',
        isConnected: 'blockchain/isConnected'
      })
    },
    methods: {
      start () {
        this.$connect()
      },
      stop () {
        this.$disconnect()
      },
      reset () {
        this.$store.dispatch('blockchain/reset')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blockchain {
    &__container {
      padding-top: 32px;
    }

    &__buttons {
      text-align: center;
      width: 100%;
      padding: 8px;
    }

    &__button {
      display: inline-block;
      text-align: center !important;
      padding: 8px 0;
      text-decoration: none;
      font-size: 21px;
      width: 150px;
      margin: 0 32px;
      border-radius: 3px;
      border: none;
      color: #fff;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
      &:hover {
        background-color: #111;
      }

      &:disabled {
        color: #484848;
        background-color: #a8a8a8;
        &:hover {
          color: #484848;
          background-color: #a8a8a8;
        }
      }

      &--start {
        background-color: #4CAF50;
        &:hover {
          background-color: #2E7D32;
        }
      }
      &--stop {
        background-color: #F44336;
        &:hover {
          background-color: #B71C1C;
        }
      }
      &--reset {
        background-color: #FF9800;
        &:hover {
          background-color: #E65100;
        }
      }
    }
    &__sum {
      text-align: center;
    }
    &__table {
      table {
        width: 80%;
        margin: 0 auto;
        empty-cells: show;
        border: 1px solid #cbcbcb;
        border-collapse: collapse;
        border-spacing: 0;
      }

      thead {

      }

      th {
        text-align: left;
        border-left: 1px solid #cbcbcb;
        font-size: inherit;
        margin: 0;
        overflow: visible;
        padding: 0.5em 1em;
        border-bottom: 2px solid #cbcbcb;

        &:first-child {
          border-left-width: 0;
        }
        &:last-child {
          border-right-width: 0;
        }

        &:nth-child(1) {
          min-width: 40%;
          width: 40%;
        }

        &:nth-child(2) {
          min-width: 40%;
          width: 40%;
        }

        &:nth-child(3) {
          min-width: 20%;
          width: 20%;
        }
      }

      td {
        text-align: left;
        border-left: 1px solid #cbcbcb;
        font-size: inherit;
        margin: 0;
        overflow: visible;
        padding: 0.5em 1em;
        border-bottom: 1px solid #cbcbcb;

        &:first-child {
          border-left-width: 0;
        }
        &:last-child {
          border-right-width: 0;
        }

        &:nth-child(1) {
          min-width: 40%;
          width: 40%;
          vertical-align: top;
        }

        &:nth-child(2) {
          min-width: 40%;
          width: 40%;
          vertical-align: top;
        }

        &:nth-child(3) {
          min-width: 20%;
          width: 20%;
          text-align: right;
        }
      }
    }
  }
</style>
