<template>
  <div class="desktop">
    <child-toolbar :title="title"></child-toolbar>
    <div class="desktop__container">
      <div class="desktop__main" ref="desktop">
        <panel :key="item.id" :params="item" v-for="item in orderedPanels"></panel>
      </div>
    </div>
    <desktop-taskbar :onRestore="onRestore" :panels="orderedTaskbarPanels"></desktop-taskbar>
  </div>
</template>

<script>
  // @ алиас к папке /src
  import ChildToolbar from '@/components/layout/ChildToolbar.vue'
  import Panel from '@/components/panel/Panel'
  import DesktopTaskbar from '@/components/desktop/DesktopTaskbar'
  import { mapGetters, mapMutations } from 'vuex'
  import { PANEL_DEFAULT_HEIGHT, PANEL_DEFAULT_WIDTH } from '../constants'

  export default {
    name: 'desktop',
    components: {
      Panel,
      ChildToolbar,
      DesktopTaskbar
    },
    data () {
      return {
        title: 'Интерактивный рабочий стол',
        gridStepX: 10, // Размер сетки рабочего стола по горизонтали
        gridStepY: 10 // Размер сетки рабочего стола по вертикали
      }
    },
    computed: {
      ...mapGetters({
        getPanels: 'panel/getPanels'
      }),
      orderedTaskbarPanels () {
        // Сортировка панелей по времени закрытия
        return this._.orderBy(this.getPanels, 'hide')
      },
      orderedPanels () {
        // Сортировка панелей по оси Z, для корректного отображения наложения
        return this._.orderBy(this.getPanels, 'inactive')
      }
    },
    methods: {
      onRestore (id) {
        console.log('onRestore', id)
        // Расчет координат отображения скрытого окна
        // Ширина рабочего стола с округлением  до размера сетки по горизонтали
        let desktopWidth = Math.ceil(this.$refs.desktop.clientWidth / this.gridStepX) * this.gridStepX
        // Высота рабочего стола с округлением  до размера сетки по вертикали
        let desktopHeight = Math.ceil(this.$refs.desktop.clientHeight / this.gridStepY) * this.gridStepY
        // Положение панели по вертикали
        let top = Math.round((desktopHeight - PANEL_DEFAULT_HEIGHT) / 2)
        // Положение панели по горизонтали
        let left = Math.round((desktopWidth - PANEL_DEFAULT_WIDTH) / 2)
        // Установка размера панели по умолчанию
        this.size({ id: id, width: PANEL_DEFAULT_WIDTH, height: PANEL_DEFAULT_HEIGHT })
        // Установка положения панели по центру рабочего стола
        this.position({ id: id, top: top, left: left })
        // Отображение панели
        this.show(id)
        // Активация панели
        this.activate(id)
      },
      ...mapMutations({
        show: 'panel/show',
        activate: 'panel/activate',
        position: 'panel/position',
        size: 'panel/size'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .desktop {
    width: 100%;
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    position: relative;

    &__container {
      position: absolute;
      top: 40px;
      bottom: 40px;
      left: 0;
      right: 0;
    }

    &__main {
      position: relative;
      height: 100%;
      width: 100%;
      min-height: 100%;
      min-width: 100%;
    }
  }
</style>
