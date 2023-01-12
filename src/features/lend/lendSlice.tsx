//reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getALLALend, addLends } from "../../services/lend";
import Lend from "../../models/lend";

//createAsyncThunk-middleware
//בפרמטר ראשון טייפ ופרמטר השני פונקציה- ד"כ פרומיס
export const getLends = createAsyncThunk("lend/getLends", async () => {
  const { data } = await getALLALend();
  return data;
});

export const createOrUpdateLendRedux = createAsyncThunk(
  "lend/create",
  async (lend: Lend) => {
      const { data } = await addLends(lend);
      return data;
  }
)

export interface lendState {
  lends: Array<Lend>,
  status:boolean
}

//סטייט גלובלי
const initialState: lendState = {
    //המערך כברירת מחדל ריק ומקבל את הנתונים מהדטה בייס
    lends: [],
    status: false
};

//createSlice-יוצרת רדוסר
//יוצרת טייפ
export const lendSlice = createSlice({
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  //action:type-סוג הפעולה
  //payload-הערך, המשתנה שקיבלתי
  name: "lend",
  initialState,
  //reducers- נכתוב את הפעולות
  reducers: {},
  //extraReducers -createAsyncThunk פעולות אחרי 
  extraReducers: (builder) => {

  //הפעולה הצליחה
//   builder.addCase(getLends.fulfilled,(state, action: PayloadAction<any>)=>{
//     state.lend=action.payload;
//   })
  builder.addCase(getLends.fulfilled, (state: any, action: PayloadAction<any>) => {
    state.lends = action.payload;
    state.status = false;
})

  },
});

// Action creators are generated for each case reducer function


export default lendSlice.reducer;
