import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/";

const initialState = {
  loading: false,
  error: false,
  car: 0,
  model: 0,
  year: 0,
  modification: 0,
  years: [],
  cars: [],
  models: [],
  modifications: [],
  tireWidth: 0,
  tireHeight: 0,
  tireDiameter: 0,
  tireCompany: 0,
  season: 0,
  companyValue: "",
  modelValue: "",
  yearValue: "",
  modificationValue: "",
};

export const getCars = createAsyncThunk("cars/get", async (_, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4040/cars`);
    const cars = await res.json();
    if (cars.error) {
      return thunkAPI.rejectWithValue(cars.error);
    } else {
      return cars;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCarModel = createAsyncThunk(
  "cars/getmodel",
  async (model, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4040/cars/models/${model}`);
      const models = await res.json();
      if (models.error) {
        return thunkAPI.rejectWithValue(models.error);
      } else {
        return models;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarYear = createAsyncThunk(
  "cars/getyear",
  async ({ carCompany, carModel }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4040/cars/years`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ carCompany, carModel }),
      });
      const years = await res.json();
      if (years.error) {
        return thunkAPI.rejectWithValue(years.error);
      } else {
        return years;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarModification = createAsyncThunk(
  "cars/getmodification",
  async ({ carCompany, carModel, year }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4040/cars/modifications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ carCompany, carModel, year }),
      });
      const modifications = await res.json();
      if (modifications.error) {
        return thunkAPI.rejectWithValue(modifications.error);
      } else {
        return modifications;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const filterReducer = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setClearCategotyFilter: (state, action) => {
      state.tireWidth = 0;
      state.tireHeight = 0;
      state.tireDiameter = 0;
      state.tireCompany = 0;
      state.season = 0;
    },
    setClearCarFilter: (state, action) => {
      state.car = 0;
      state.model = 0;
      state.year = 0;
      state.modification = 0;
    },
    setCar: (state, action) => {
      state.car = action.payload;
      state.model = 0;
      state.year = 0;
      state.modification = 0;
    },
    setModel: (state, action) => {
      state.model = action.payload;
      state.year = 0;
      state.modification = 0;
    },
    setYear: (state, action) => {
      state.year = action.payload;
      state.modification = 0;
    },
    setModification: (state, action) => {
      state.modification = action.payload;
    },
    setTireWidth: (state, action) => {
      state.tireWidth = action.payload;
    },
    setTireHeight: (state, action) => {
      state.tireHeight = action.payload;
    },
    setTireDiameter: (state, action) => {
      state.tireDiameter = action.payload;
    },
    setTireCompany: (state, action) => {
      state.tireCompany = action.payload;
    },
    setSeason: (state, action) => {
      state.season = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCarModel.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getCarModel.fulfilled, (state, action) => {
        state.loading = false;
        state.models = action.payload;
        state.years = [];
        state.modifications = [];
      })
      .addCase(getCarModel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCarYear.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getCarYear.fulfilled, (state, action) => {
        state.loading = false;
        state.years = action.payload;
        state.modifications = [];
      })
      .addCase(getCarYear.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCarModification.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getCarModification.fulfilled, (state, action) => {
        state.loading = false;
        state.modifications = action.payload;
      })
      .addCase(getCarModification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setCar,
  setSeason,
  setTireCompany,
  setTireDiameter,
  setTireHeight,
  setTireWidth,
  season,
  setClearCategotyFilter,
  setModel,
  setYear,
  setClearCarFilter,
  setModification,
} = filterReducer.actions;
export default filterReducer.reducer;
