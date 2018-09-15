<template>
  <vue-draggable-resizable
    :active="params.inactive === 0"
    :grid="[gridStepX, gridStepY]"
    :h="params.height"
    :parent="true"
    :w="params.width"
    :x="params.left"
    :y="params.top"
    @activated="onActivated"
    @dragstop="onDragStop"
    @resizestop="onResizing"
    @resizing="onResizing"
    class="panel"
    v-if="params.hide === 0"
  >
    <panel-title :active="+this.params.inactive === 0" :close="showHide">
      {{params.title}}
    </panel-title>
    <slot></slot>
    <panel-info :h="params.height" :l="params.left" :t="params.top" :w="params.width"></panel-info>
  </vue-draggable-resizable>
</template>

<script>
  import VueDraggableResizable from 'vue-draggable-resizable'
  import PanelTitle from './PanelTitle'
  import PanelInfo from './PanelInfo'
  import { mapMutations } from 'vuex'

  export default {
    name: 'Panel',
    components: {
      PanelTitle,
      PanelInfo,
      VueDraggableResizable
    },
    props: {
      /**
       * Параметры панели
       */
      params: {
        type: Object,
        required: true
      },
      /**
       * Размер сетки рабочего стола по горизонтали
       */
      gridStepX: {
        type: Number,
        default: 10
      },
      /**
       * Размер сетки рабочего стола по вертикали
       */
      gridStepY: {
        type: Number,
        default: 10
      }
    },
    methods: {
      /**
       * Скрытие, отображение панели
       */
      showHide () {
        +this.params.hide === 0 ? this.hide(this.params.id) : this.show(this.params.id)
      },
      /**
       * Активация панели
       */
      onActivated () {
        this.activate(this.params.id)
      },
      /**
       * Сохранение позиции панели
       *
       * @param {number} left
       * @param {number} top
       */
      onDragStop (left, top) {
        if (+this.params.top !== +top || +this.params.left !== left) {
          // Сохранение
          this.position({ id: this.params.id, top: top, left: left })
        }
      },
      /**
       * Сохранение размера панели
       *
       * @param {number} left
       * @param {number} top
       * @param {number} width
       * @param {number} height
       */
      onResizing (left, top, width, height) {
        // Позиция
        this.onDragStop(left, top)
        // Размер
        this.size({ id: this.params.id, width: width, height: height })
      },
      ...mapMutations({
        hide: 'panel/hide',
        show: 'panel/show',
        activate: 'panel/activate',
        position: 'panel/position',
        size: 'panel/size'
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "vars";

  .panel {
    border: $borderSize solid $borderColor;
    background-color: #f9f9f9;

    &.active {
      border-color: $borderActiveColor;
      z-index: 10000 !important;
      background-color: #fff;
    }

    /deep/ .handle {
      border: none;
      background-color: transparent;
      // background-color: black;
      &.handle-tl {
        margin: 0;
        width: $borderBlockSize + $borderSize;
        height: $borderBlockSize + $borderSize;;
        top: $borderSize * -1;
        left: $borderSize * -1;
        &:before {
          top: $borderSize * -2;
          right: 0;
          bottom: 0;
          left: $borderSize * -2;
        }
      }
      &.handle-tm {
        left: 0;
        right: 0;
        width: auto;
        margin: 0 $borderBlockSize;
        height: $borderSize;
        top: $borderSize * -1;
        &:before {
          top: $borderSize * -2;
          right: 0;
          bottom: $borderSize * -2;
          left: 0;
        }
      }
      &.handle-tr {
        margin: 0;
        width: $borderBlockSize + $borderSize;
        height: $borderBlockSize + $borderSize;
        top: $borderSize *  -1;
        right: $borderSize * -1;
        &:before {
          top: $borderSize * -2;
          right: $borderSize * -2;
          bottom: 0;
          left: 0;
        }
      }
      &.handle-mr {
        top: 0;
        bottom: 0;
        margin: $borderBlockSize 0;
        width: $borderSize;
        height: auto;
        right: $borderSize * -1;
        &:before {
          top: 0;
          right: $borderSize * -2;
          bottom: 0;
          left: $borderSize * -2;
        }
      }
      &.handle-br {
        margin: 0;
        width: $borderBlockSize + $borderSize;
        height: $borderBlockSize + $borderSize;
        bottom: $borderSize * -1;
        right: $borderSize * -1;
        &:before {
          top: 0;
          right: $borderSize * -2;
          bottom: $borderSize * -2;
          left: 0;
        }
      }
      &.handle-bm {
        left: 0;
        right: 0;
        width: auto;
        margin: 0 $borderBlockSize;
        height: $borderSize;
        bottom: $borderSize * -1;
        &:before {
          top: $borderSize * -2;
          right: 0;
          bottom: $borderSize * -2;
          left: 0;
        }
      }
      &.handle-bl {
        margin: 0;
        width: $borderBlockSize + $borderSize;
        height: $borderBlockSize + $borderSize;
        bottom: $borderSize * -1;
        left: $borderSize * -1;
        &:before {
          top: 0;
          right: 0;
          left: $borderSize * -2;
          bottom: $borderSize * -2;
        }
      }
      &.handle-ml {
        top: 0;
        bottom: 0;
        margin: $borderBlockSize 0;
        width: $borderSize;
        height: auto;
        left: $borderSize * -1;
        &:before {
          top: 0;
          right: $borderSize * -2;
          bottom: 0;
          left: $borderSize * -2;
        }
      }
    }
  }
</style>
