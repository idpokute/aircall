const { createSlice } = require("@reduxjs/toolkit");
const {
  getInbox,
  getAll,
  getDetail,
  updateArchived,
} = require("../actions/call");

const initialState = {
  tab: "Inbox",
  data: [],
  isLoading: false,
};

const callSlice = createSlice({
  name: "call",
  initialState,
  reducers: {},
  extraReducers: {
    // async action
    // "call/Inbox"
    [getInbox.pending](state, action) {
      state.isLoading = true;
    },
    [getInbox.fulfilled](state, action) {
      console.log("------------", action.payload);
      state.data = action.payload;
      state.isLoading = false;
      state.tab = "Inbox";
    },
    [getInbox.rejected](state, action) {
      state.data = null;
      state.isLoading = false;
    },
    // "call/getAll"
    [getAll.pending](state, action) {
      state.isLoading = true;
    },
    [getAll.fulfilled](state, action) {
      console.log("------------", action.payload);
      state.data = action.payload;
      state.isLoading = false;
      state.tab = "All calls";
    },
    [getAll.rejected](state, action) {
      state.data = null;
      state.isLoading = false;
    },
    // "call/updateArchived"
    [updateArchived.pending](state, action) {
      state.isLoading = true;
    },
    [updateArchived.fulfilled](state, action) {
      const target = state.data.find(
        (obj) => obj.id === action.payload.data.id,
      );
      target.is_archived = !target.is_archived;

      if (state.tab !== "All calls") {
        state.data = state.data.filter(
          (obj) => obj.id !== action.payload.data.id,
        );
      }

      state.isLoading = false;
    },
    [updateArchived.rejected](state, action) {
      state.isLoading = false;
    },
  },
});

module.exports = callSlice;
