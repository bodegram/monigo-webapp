import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    error:false,
    errorMessage: null,
    loading: false,
    predictions:null
}

const predictionSlice = createSlice({
    name:'prediction',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        
    }
})

export default predictionSlice.reducer