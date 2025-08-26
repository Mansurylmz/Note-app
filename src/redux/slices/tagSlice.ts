import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { tags: string[] } = {
  tags: [],
};

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag(state, action: PayloadAction<string>) {
        // eğer tag zaten var ise return et
        if (state.tags.includes(action.payload)) return;
  
        // yoksa tag'i state'e ekle
        state.tags.push(action.payload);
      },
    },
  });

export const { addTag } = tagSlice.actions;

export default tagSlice.reducer;