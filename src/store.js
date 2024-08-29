import { configureStore } from '@reduxjs/toolkit'
import slice from './Slices/slice'

export default configureStore({
  reducer: {
    counter: slice,
  },
})