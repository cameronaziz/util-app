import { createStore, applyMiddleware, compose, Store } from "redux"
import devTools from "remote-redux-devtools"
import thunk from "redux-thunk"
import { persistStore } from "redux-persist"
import reducer from "./reducers"

const configureStore = (onCompletion?: () => void): Store => {
    const enhancer = compose(
        applyMiddleware(thunk),
        devTools(),
    )

    const store = createStore(reducer, enhancer)
    persistStore(store, null, onCompletion)

    return store
}

export default configureStore
