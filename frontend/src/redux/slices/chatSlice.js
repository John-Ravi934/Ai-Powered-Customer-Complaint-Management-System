import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  loading: false,
  typing: false,
  messages: [
    {
      id: 1,
      sender: "assistant",
      text: "Upload a complaint document or paste complaint text. I will automatically extract the details and populate the complaint form.",
    },
  ],
  progress: 0,
};

const chatSlice = createSlice({
  name: "chat",

  initialState,

  reducers: {
    setInput(state, action) {
      state.input = action.payload;
    },

    addMessage(state, action) {
      state.messages.push(action.payload);
    },

    clearInput(state) {
      state.input = "";
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    setProgress(state, action) {
    state.progress = action.payload;
    },

    setTyping(state, action) {
    state.typing = action.payload;
    },
  },
});

export const {
  setInput,
  addMessage,
  clearInput,
  setLoading,
   setTyping,
  setProgress,
} = chatSlice.actions;

export default chatSlice.reducer;