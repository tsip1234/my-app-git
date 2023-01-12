import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import categorySlice from '../features/category/categorySlice'
import toolSlice from '../features/tool/toolSlice'
import lendSlice from '../features/lend/lendSlice'
export const store = configureStore({
    reducer: {
      userSlice,
      categorySlice,
      toolSlice,
      lendSlice
    },
  })
 // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
  

