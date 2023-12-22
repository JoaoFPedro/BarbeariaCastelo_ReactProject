import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import ILoggedUser from '../../shared/interfaces/ILoggedUser';
import { RootState } from '../store';

const INITIAL_STATE: ILoggedUser = {};

const loggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState: INITIAL_STATE,
  reducers: {
    addLoggedUser(state, action: PayloadAction<ILoggedUser>) {
      state.firstName = action.payload.firstName;
      state.email = action.payload.email;
      state.roleName = action.payload.roleName;
    },
  },
});

export const { addLoggedUser } = loggedUserSlice.actions;
export const selectLoggedUser = (state: RootState): ILoggedUser => state.loggedUser;
export default loggedUserSlice.reducer;
