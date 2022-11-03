import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Information {
    darkmode: boolean
  }
const initialState: Information = {
    darkmode: false,
  }

  
export const InformationSlice = createSlice({
    name: 'information',
    initialState,
    reducers: {
    darkmodeHandling:(state)=>{
        state.darkmode=!state.darkmode
    }
    }
}
)

export const {darkmodeHandling} =InformationSlice.actions
export default InformationSlice.reducer