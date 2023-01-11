
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchTools } from '../../services/tool';
import Tool from '../../models/tool';




export const getTools = createAsyncThunk("lend/getYools", async () => {
    const { data } = await fetchTools();
    return data;
  });
  
  
  export interface toolState {
    tools: Array<Tool>,
    status:boolean
  }
  
  //סטייט גלובלי
  const initialState: toolState = {
      //המערך כברירת מחדל ריק ומקבל את הנתונים מהדטה בייס
      tools: [],
      status: false
  };
  
  //createSlice-יוצרת רדוסר
  //יוצרת טייפ
  export const toolSlice = createSlice({
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    //action:type-סוג הפעולה
    //payload-הערך, המשתנה שקיבלתי
    name: "tool",
    initialState,
    //reducers- נכתוב את הפעולות
    reducers: {},
    //extraReducers -createAsyncThunk פעולות אחרי 
    extraReducers: (builder) => {
  
    //הפעולה הצליחה
  
    builder.addCase(getTools.fulfilled, (state: any, action: PayloadAction<any>) => {
      state.tools = action.payload;
      state.status = false;
  })
  
    },
  });
  
  // Action creators are generated for each case reducer function
  
  
  export default toolSlice.reducer;