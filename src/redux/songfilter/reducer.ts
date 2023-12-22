import { InitialState } from "./types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState:InitialState = {
  AllSong:[],
  Verites:[]
}


export const SongData = createSlice({
    name:'Song',
    initialState,
    reducers:{
        SongPlay :(state:any , action:PayloadAction<Array<any>>)=>{
            state.AllSong = action?.payload
        },
          SongVerity :(state:any , action:PayloadAction<Array<any>>)=>{
                state.Verites = action?.payload
            }
        }
})

export default SongData.reducer