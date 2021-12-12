const { combineReducers } = require("@reduxjs/toolkit");
const callSlice = require("./call");

module.exports = combineReducers({
  calls: callSlice.reducer,
});
