
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import User from "../../models/user"
import { addUser, deleteUser, getAllUsers, updateUser } from "../../services/user"


export interface UserState {
    users: Array<User>,
    status: boolean
}
//משתנים משותפים
const initialState: UserState = {
    users: [],
    status: false
}

export const getUsers = createAsyncThunk("", async () => {
    const { data } = await getAllUsers()
    return data;
})

export const createUser = createAsyncThunk(
    "user/post",
    async (newUser: User) => {
        const { data } = await addUser(newUser)
        return data;
    }
)

export const deleteUserById = createAsyncThunk(
    "user/delete",
    async (id: number) => {
        await deleteUser(id);
        return id;
    }
)

export const putUser = createAsyncThunk(
    "user/update",
    async (user: User) => {
        const { data } = await updateUser(user);
        return data;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload)
        }
    },


    // //הפעולות שעושים אחרי הCRATEASYNCTHUNK
    extraReducers: (builder) => {
        //אם הפעולה הצליחה
        builder.addCase(getUsers.fulfilled, (state: any, action: PayloadAction<any>) => {
            state.users = action.payload;
            state.status = false;
        })

        //      //אמצע הפעולה
        builder.addCase(getUsers.pending, (state: any) => {
            state.status = true;
        })

        //      //הפעולה נכשלה
        builder.addCase(getUsers.rejected, (state: any, action: PayloadAction<any>) => { })

        //  builder.addCase(deleteApartment.fullfilled,(state,action:PayloadAction<any>)=>{
        //     let apartments=state.apartments.filter(x=>x.id!==action.payload)
        //     state.apartments=apartments
        //  })
    }

})
// export const {addApartment}=apartmentSlice.actions;
export default userSlice.reducer;
