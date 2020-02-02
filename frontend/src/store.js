import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["historyReducer"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = applyMiddleware(thunk);

export const store = createStore(persistedReducer, middlewares);

export const persistor = persistStore(store);
