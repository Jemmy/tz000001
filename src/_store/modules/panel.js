import { PANEL_DEFAULT_HEIGHT, PANEL_DEFAULT_WIDTH } from '../../constants'

/**
 * @typedef panel
 * @type {object}
 * @property {number} id - Id панели
 * @property {string} title - Титул панели
 * @property {number} top - Положение панели по вертикали
 * @property {number} left - Положение панели по горизонтали
 * @property {number} width - Ширина панели
 * @property {number} height - Высота панели
 * @property {number} hide - Признак скрытия панели, 0 - панель не скрыта иначе скрыта, по данному параметру панели сортируются в taskbar
 * @property {number} inactive - Признак активности панели, 0 - панель активна иначе не активна, по данному параметру панели сортируются по оси Z
 */
/**
 *
 * @type {{panels: *[panel]}}
 */

const state = {
  panels: [
    {
      id: 1,
      title: 'Title 1',
      top: 10,
      left: 10,
      width: PANEL_DEFAULT_WIDTH,
      height: PANEL_DEFAULT_HEIGHT,
      hide: 0,
      inactive: 1
    },
    {
      id: 2,
      title: 'Title 2',
      top: 10,
      left: 320,
      width: PANEL_DEFAULT_WIDTH,
      height: PANEL_DEFAULT_HEIGHT,
      hide: 0,
      inactive: 2
    },
    {
      id: 3,
      title: 'Title 3',
      top: 120,
      left: 10,
      width: PANEL_DEFAULT_WIDTH,
      height: PANEL_DEFAULT_HEIGHT,
      hide: 0,
      inactive: 3
    },
    {
      id: 4,
      title: 'Title 4',
      top: 120,
      left: 320,
      width: PANEL_DEFAULT_WIDTH,
      height: PANEL_DEFAULT_HEIGHT,
      hide: 0,
      inactive: 4
    },
    {
      id: 5,
      title: 'Title 5',
      top: 230,
      left: 10,
      width: PANEL_DEFAULT_WIDTH,
      height: PANEL_DEFAULT_HEIGHT,
      hide: 0,
      inactive: 5
    }
  ]
}

const getters = {
  /**
   * Список панелей
   *
   * @param state
   * @returns {*[]|*}
   */
  getPanels: (state) => state.panels,
  /**
   * Поиск панели по id
   *
   * @param state
   * @returns {Object}
   */
  getPanel: (state) => (id) => {
    let p = state.panels.find(item => +item.id === +id)
    if (p) {
      return p
    }
    return undefined
  }
}

const mutations = {
  /**
   * Активация панели
   *
   * @param state
   * @param payload
   */
  activate: (state, payload) => {
    // Деактивация текущей активной панели
    state.panels.forEach((item) => {
      if (item.inactive === 0) {
        item.inactive = new Date().getTime()
      }
    })
    // Ищем панель по id
    let p = state.panels.find(item => +item.id === +payload)
    if (p !== undefined) p.inactive = 0
  },
  /**
   * Отображение панели со скрытого состояния
   *
   * @param state
   * @param payload
   */
  show: (state, payload) => {
    // Ищем панель по id
    let p = state.panels.find(item => +item.id === +payload)
    if (p !== undefined) p.hide = 0
  },
  /**
   * Скрытие панели
   *
   * @param state
   * @param payload
   */
  hide: (state, payload) => {
    // Ищем панель по id
    let p = state.panels.find(item => +item.id === +payload)
    if (p !== undefined) {
      p.hide = new Date().getTime()
      p.inactive = new Date().getTime()
    }
  },
  /**
   * Установка положения панели
   *
   * @param state
   * @param payload
   */
  position: (state, payload) => {
    // Ищем панель по id
    let p = state.panels.find(item => +item.id === +payload.id)
    if (p !== undefined) {
      if (payload.top !== undefined) p.top = +payload.top
      if (payload.left !== undefined) p.left = +payload.left
    }
  },
  /**
   * Установка размера панели
   *
   * @param state
   * @param payload
   */
  size: (state, payload) => {
    // Ищем панель по id
    let p = state.panels.find(item => +item.id === +payload.id)
    if (p !== undefined) {
      if (payload.width !== undefined) p.width = +payload.width
      if (payload.height !== undefined) p.height = +payload.height
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
