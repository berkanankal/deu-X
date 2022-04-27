import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [
      {
        id: 1,
        name: "İzmir",
      },
      {
        id: 2,
        name: "Aydın",
      },
      {
        id: 3,
        name: "İstanbul",
      },
    ],
  },
  reducers: {},
});

export const {} = citiesSlice.actions;

export default citiesSlice.reducer;
