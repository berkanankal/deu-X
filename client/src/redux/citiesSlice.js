import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [
      {
        id: 1,
        name: "İzmir",
        districts: [
          {
            id: 1,
            name: "Alsancak",
          },
          {
            id: 2,
            name: "Buca",
          },
          {
            id: 3,
            name: "Bornova",
          },
        ],
      },
    ],
  },
  reducers: {},
});

export const {} = citiesSlice.actions;

export default citiesSlice.reducer;
