import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IdState {
  id: string | null;
}

const initialState: IdState = {
  id: localStorage.getItem('id'),
};

const idSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    updateId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
      localStorage.setItem('id', action.payload);
    },
    clearId: (state) => {
      state.id = null;
      localStorage.removeItem('id');
    },
  },
});

export const { updateId, clearId } = idSlice.actions;

export default idSlice.reducer;
