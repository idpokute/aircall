const { createAsyncThunk, isPending } = require("@reduxjs/toolkit");
const axios = require("axios");
const { format, parseISO } = require("date-fns");

const getInbox = createAsyncThunk("call/getInbox", async (data, thunkAPI) => {
  const res = await axios.get("https://aircall-job.herokuapp.com/activities");
  let arr = res.data;

  // order by call datetime
  arr.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  arr = arr.filter((v) => {
    console.log(v.is_archived);
    return !v.is_archived;
  });

  return arr;
});

const getAll = createAsyncThunk("call/getAll", async (data, thunkAPI) => {
  const res = await axios.get("https://aircall-job.herokuapp.com/activities");
  let arr = res.data;

  // order by call datetime
  arr.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return arr;
});

const getDetail = createAsyncThunk("call/getDetail", async (data, thunkAPI) => {
  console.log(data); // we need a id
  const res = await axios.get(
    "https://aircall-job.herokuapp.com/activities/" + data,
  );
  return res;
});

const updateArchived = createAsyncThunk(
  "call/updateArchived",
  async (data, thunkAPI) => {
    const { id, is_archived } = data;

    const res = await axios.post(
      `https://aircall-job.herokuapp.com/activities/${id}`,
      { is_archived: !is_archived },
    );
    return res;
  },
);

module.exports = {
  getInbox,
  getAll,
  getDetail,
  updateArchived,
};
