import { createSlice, configureStore } from "@reduxjs/toolkit";

// stato iniziale
const initialState = { counter: 0, showCounter: true };

// creazione della state slice per il counter.
// NB: utilizzando redux-toolkit è possibile modificare lo stato in una maniera che
// sembrerebbe diretta, ma in realtà non lo è (è solo un'astrazione)
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    reset(state) {
      state.counter = 0;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// per fare il merge di più reducers in un unico reducer si usa la funzione configureStore messa a disposizione da redux-toolkit
const store = configureStore({
  reducer: counterSlice.reducer,
});

// utilizzando redux-toolkit le actions vengono create automaticamente con un identificatore univoco,
// e sono accessibili utilizzando le chiavi impostate nella sezione reducers di createSlice
export const counterActions = counterSlice.actions;

export default store;
