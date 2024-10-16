import { configureStore } from '@reduxjs/toolkit'
import slice from './Slices/slice'
import chat from './Slices/SliceForChat' 


export default configureStore({
  reducer: {
    counter: slice,
    UserChat: chat,

  },
})