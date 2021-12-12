const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const reducer = require("./reducers");

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;
