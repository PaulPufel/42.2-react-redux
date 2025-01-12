import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../createAppSlice";
import { UserSliceState, UserData } from "./types";

const userInitialState: UserSliceState = {
    users: []
}

export const userSlice = createAppSlice({
  name: 'USERS',
  initialState: userInitialState,
  reducers: create => ({
  addUser: create.reducer((state: UserSliceState, action:PayloadAction<UserData>) => {
    state.users=[...state.users, action.payload]
  })
  
  }),
  selectors: {
    users: (state: UserSliceState) => state.users
  }
})

export const userSliceActions = userSlice.actions;
export const userSliceSelectors = userSlice.selectors;
