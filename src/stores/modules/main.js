import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false
    }
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig.isFixed = payload.isFixed
    }
  }
})

export const {
  changeHeaderConfigAction
} = mainSlice.actions

export default mainSlice.reducer