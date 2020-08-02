// Story store: contains the full text of the story (currentStory) as an object and current section as a long string
export const state = () => ({
  isLoading: false,
  currentStory: {},
  currentSection: ''
})

// mutations: responsable for updating state, UPPER_CASE standards
export const mutations = {}

// actions: exposed to ui calls mutations
export const actions = {}

// getters: read only access to state
export const getters = {
  currentStory: (state) => { return state.currentStory },
  currentSection: (state) => { return state.currentSection }
}
