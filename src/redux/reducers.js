import { combineReducers } from "redux";
import userReducer from './slices/userSlice'
import predictionReducer from './slices/predictionSlice'
import analyticsReducer from './slices/analyticsSlice'

const rootReducer = combineReducers({
    user: userReducer,
    prediction: predictionReducer,
    analytics: analyticsReducer
})

export default rootReducer;