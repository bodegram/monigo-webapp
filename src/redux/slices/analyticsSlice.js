import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    error:false,
    errorMessage: null,
    loading: false,
    predictions:null
}

const analyticsSlice = createSlice({
    name:'analytics',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        
    }
})

export default analyticsSlice.reducer