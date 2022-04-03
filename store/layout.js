export const state = () => ({
    darkMode: false,
    clipped: false,
    drawer: false,
    fixed: false,
    miniVariant: false,
})

export const mutations = {
    updateDarkMode(state, value) {
        state.darkMode = value
    },
    updateClipped(state, value) {
        state.clipped = value
    },
    updateDrawer(state, value) {
        state.drawer = value
    },
    updateFixed(state, value) {
        state.fixed = value
    },
    updateMiniVariant(state, value) {
        state.miniVariant = value
    },
}

export const actions = {
    changeDarkMode(context, value) {
        context.commit('updateDarkMode', value)
    },
    changeClipped(context, value) {
        context.commit('updateClipped', value)
    },
    changeDrawer(context, value) {
        context.commit('updateDrawer', value)
    },
    changeFixed(context, value) {
        context.commit('updateFixed', value)
    },
    changeMiniVariant(context, value) {
        context.commit('updateMiniVariant', value)
    },
}