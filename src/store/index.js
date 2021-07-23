import { createSlice, configureStore } from "@reduxjs/toolkit";

// stato iniziale per il counter
const initialCounterState = { counter: 0, showCounter: true };

// creazione della state slice per il counter.
// NB: utilizzando redux-toolkit è possibile modificare lo stato in una maniera che
// sembrerebbe diretta, ma in realtà non lo è (è solo un'astrazione)
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

// stato iniziale per l'auth
const initialAuthState = {
  isAuthenticated: false,
};

// creazione della state slice per l'auth
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// per fare il merge di più reducers in un unico reducer si usa la funzione configureStore messa a disposizione da redux-toolkit
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// utilizzando redux-toolkit le actions vengono create automaticamente con un identificatore univoco,
// e sono accessibili utilizzando le chiavi impostate nella sezione reducers di createSlice
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
