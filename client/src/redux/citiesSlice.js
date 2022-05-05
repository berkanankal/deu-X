import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [
      {
        id: 1,
        name: "İzmir",
        universities: [
          {
            id: 1,
            name: "Dokuz Eylül Üniversitesi",
            faculties: [
              {
                id: 1,
                name: "İktisadi ve İdari Bilimler Fakültesi",
                departments: [
                  {
                    id: 1,
                    name: "Yönetim Bilişim Sistemleri",
                  },
                  {
                    id: 2,
                    name: "Ekonometri",
                  },
                ],
              },
              {
                id: 2,
                name: "Buca Eğitim Fakültesi",
              },
            ],
          },
          {
            id: 2,
            name: "Ege Üniversitesi",
          },
        ],
      },
    ],
  },
  reducers: {},
});

export const {} = citiesSlice.actions;

export default citiesSlice.reducer;
