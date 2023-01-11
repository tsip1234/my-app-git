import { configureStore } from '@reduxjs/toolkit'
import user from '../features/user/userSlice'
import category from '../features/category/categorySlice'
import toolReducer from '../features/tool/toolSlice'
export const store = configureStore({
    reducer: {
      user,
      category,
      toolReducer

    },
  })
 // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
  

