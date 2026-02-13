import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "../../lib/constants";

// Login async action
export const loginAsync = createAsyncThunk('user/loginAsync', async (payload, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(LOGIN_ENDPOINT, payload);
        console.log('login data', data);
        
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data.message || "Something went wrong.");
    }
});

// Register async action
export const registerAsync = createAsyncThunk('user/registerAsync', async (payload, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(REGISTER_ENDPOINT, payload);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data.message || "Something went wrong.");
    }
});

const initialState = {
    userData: null,
    loading: false,
    error: false,
    errorMessage: null,
    isAuthenticated:false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        const handlePending = (state) => {
            state.loading = true;
            state.error = false;
            state.errorMessage = null;
        };

        const handleRejected = (state, action) => {
            state.error = true;
            state.loading = false;
            state.errorMessage = action.payload || action.error.message;  
        };

        const handleFulfilled = (state, action) => {
            state.loading = false;
            state.userData = action.payload; 
        };

        builder
            .addCase(loginAsync.pending, handlePending)
            .addCase(loginAsync.fulfilled, handleFulfilled)
            .addCase(loginAsync.rejected, handleRejected)
            .addCase(registerAsync.pending, handlePending)
            .addCase(registerAsync.fulfilled, handleFulfilled)
            .addCase(registerAsync.rejected, handleRejected);
    },
});

export default userSlice.reducer;
