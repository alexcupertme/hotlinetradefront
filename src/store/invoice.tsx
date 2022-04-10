// @ts-nocheck
// ** Redux Imports
import { createSlice, createAsyncThunk, Slice } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getData = createAsyncThunk('appInvoice/getData', async params => {
  const response = await axios.get('/apps/invoice/invoices', params)
  return {
    params,
    data: response.data.invoices,
    allData: response.data.allData,
    totalPages: response.data.total
  }
})

export const deleteInvoice = createAsyncThunk('appInvoice/deleteInvoice', async (id, { dispatch, getState }) => {
  await axios.delete('/apps/invoice/delete', { id })
  await dispatch(getData())
  return id
})


export const appInvoiceSlice: Slice = createSlice({
  name: 'appInvoice',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload.data
      state.allData = action.payload.allData
      state.total = action.payload.totalPages
      state.params = action.payload.params
    })
  }
})

export const {
  addCase
} = appInvoiceSlice.actions

export default appInvoiceSlice.reducer
