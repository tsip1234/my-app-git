//reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Category from "../../models/category";
import { getALLCategory } from "../../services/category";

//createAsyncThunk-middleware
//בפרמטר ראשון טייפ ופרמטר השני פונקציה- ד"כ פרומיס
export const getCategories = createAsyncThunk("category/getCategories", async () => {
  const { data } = await getALLCategory();
  return data;
});


export interface categoryState {
  categories: Array<Category>,
  status: boolean
}

//סטייט גלובלי
const initialState: categoryState = {
  //המערך כברירת מחדל ריק ומקבל את הנתונים מהדטה בייס
  categories: [],
  status: false
};

//createSlice-יוצרת רדוסר
//יוצרת טייפ
export const categorySlice = createSlice({
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  //action:type-סוג הפעולה
  //payload-הערך, המשתנה שקיבלתי
  name: "category",
  initialState,
  //reducers- נכתוב את הפעולות
  reducers: {},
  //extraReducers -createAsyncThunk פעולות אחרי 
  extraReducers: (builder) => {

    //הפעולה הצליחה
    builder.addCase(getCategories.fulfilled, (state: any, action: PayloadAction<any>) => {
      state.categories = action.payload;
    })

  },
});

// Action creators are generated for each case reducer function


export default categorySlice.reducer;
