const { createStore } = require("redux");

const defaultState = {
  memes: [],
  todos: []
};

const rootReducer = (state = defaultState, action) => {
  const [domain, actionName] = action.type.split('/');
  const { payload } = action;

  if (domain === "memes" || domain === "todos") {
    switch (actionName) {
      case "create":
        return { ...state, [domain]: [...state[domain], payload] };
      case "remove":
        return { ...state, [domain]: state[domain].filter(v => v.id !== payload) };
      case "reset":
        return defaultState;
      default: return state;
    }
  } else return state;
};

const store = createStore(
  rootReducer, /* preloadedState */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
