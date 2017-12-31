import types from './types'

// TODO: Refactor getters and divide them by context

/**
 * Vuex Store Getters
 *
 * @constant
 * @type {object}
 * @see {@link https://vuex.vuejs.org/en/getters.html|Vuex Getters}
 */
const getters = {
  /**
   * Finds a page's index by a given pageId
   *
   * @param {string} id : Page's id
   * @return {number} : Page's index
   */
  [types.getPageIndexById]: (state) => (id) => {
    return state.project.pages.findIndex(page => page.id === id)
  },

  /**
   * Finds a page by a given pageId
   *
   * @param {string} id : Page's id
   * @return {object} : Page identified by id param
   *
   * @see {@link [types.getPageIndexById]}
   */
  [types.getPageById]: (state, getters) => (id) => {
    let pageIndex = getters.getPageIndexById(id)
    return state.project.pages[pageIndex]
  },

  /**
   * Returns a boolean value based on the existence of the identified page
   *
   * @param {string} id : Page's id
   * @return {boolean} : Whether the page already exists or not
   *
   * @see {@link [types.getPageIndexById]}
   */
  [types.pageExists]: (state, getters) => (id) => {
    let pageIndex = getters.getPageIndexById(id)
    return (pageIndex > -1)
  },

  /**
   * Finds an element index (from the selected elements array) by a given id
   *
   * @param {string} id : Selected element's id
   * @return {object} : Element index
   */
  [types.getSelectedElIndexById]: (state, getters) => (id) => {
    return state.app.selectedElements.findIndex(el => el.id === id)
  },

  /**
   * Returns the index, of the component with the passed name, in the state.project.components array
   *
   * @param {string} componentName : Component's name
   * @return {number} : The component index in the array
   */
  [types.getComponentRefIndexByName]: (state) => (componentName) => {
    return state.project.components.findIndex(page => page.name === componentName)
  },

  /**
   * Returns the component with the passed name in the state.project.components array
   *
   * @param {string} componentName : Component's name
   * @return {object} : The component under the specified name
   */
  [types.getComponentRefByName]: (state, getters) => (componentName) => {
    let compIndex = getters.getComponentRefIndexByName(componentName)
    return state.project.components[compIndex]
  },

  /**
   * Returns the component, from the index passed, in the state.project.components array
   *
   * @param {string} componentIndex : Component's index in the array
   * @return {object} : The component under the specified index
   */
  [types.getComponentRefByIndex]: (state, getters) => (compIndex) => {
    return state.project.components[compIndex]
  },

  /**
   * Returns a boolean value as result of checking if
   * the component name already exists in the state.project.components array
   *
   * @param {string} componentName : Component's name
   * @return {boolean} : Whether the given component already exists or not
   */
  [types.componentExist]: (state, getters) => (componentName) => {
    let compIndex = getters.getComponentRefIndexByName(componentName)
    return (compIndex > -1)
  },

  /**
   * Returns a boolean value as result of checking if the page's path is in use
   *
   * @param {string} pagePath : Page's path
   * @return {boolean} : Whether the given pagePath already exists or not
   */
  [types.pathInUse]: (state) => (pagePath) => {
    let pageIndex = state.project.pages.findIndex(page => page.path === pagePath)
    return (pageIndex > -1)
  },

  /**
   * Returns a boolean value as result of checking if the page's name is in use
   *
   * @param {string} pageName : Page's name
   * @return {boolean} : Whether the given pageName already exists or not
   */
  [types.nameInUse]: (state) => (pageName) => {
    let pageIndex = state.project.pages.findIndex(page => page.name === pageName)
    return (pageIndex > -1)
  }
}

export default getters
