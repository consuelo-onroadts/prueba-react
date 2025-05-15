import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { City } from "../types/city";

interface CityState {
    cities: City[];
  }

  const initialState: CityState = {
    cities: [
        { id: 1, name: "Lima", abrev: "LIM", latitud: "-12.0464", longitud: "-77.0428", alias: "100", address:"Calle Merida 234" },
        { id: 2, name: "Cusco", abrev: "CUZ", latitud: "-13.5319", longitud: "-71.9675", alias: "101", address:"Calle Merida 689"},
        { id: 3, name: "Arequipa", abrev: "ARE", latitud: "-16.4090", longitud: "-71.5375", alias: "102", address:"Calle Merida 222" },
        { id: 4, name: "Piura", abrev: null, latitud: "-5.1945", longitud: "-80.6328", alias: "103", address:"Calle Merida 299" },
        { id: 5, name: "Trujillo", abrev: "TRU", latitud: "-8.1120", longitud: "-79.0288", alias: "104", address:"Calle Merida 334" }
    ]
  };

  const citySlice = createSlice({
    name: "city",
    initialState: initialState,
    reducers: {
      addCity: (state, action: PayloadAction<City>) => {
        state.cities.push(action.payload);
      },
      deleteCity: (state, action: PayloadAction<number>) => {
        state.cities = state.cities.filter(city => city.id !== action.payload);
      },
      updateCity: (state, action: PayloadAction<City>) => {
        const updatedCity = action.payload;
        const index = state.cities.findIndex(city => city.id === updatedCity.id);
        if (index !== -1) {
          state.cities[index] = updatedCity;
        }
      },
    },
  });
  
  export const { addCity, deleteCity, updateCity } = citySlice.actions;
  export default citySlice.reducer;