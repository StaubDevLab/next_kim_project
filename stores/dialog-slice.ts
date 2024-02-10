import {createSlice} from "@reduxjs/toolkit";
import {MyState} from "@/types";

const dialogSlice = createSlice({
    name: 'dialog',
    initialState: {
        open:false,
        edit:false,
        add:false,
        service:null
    } as MyState,
    reducers: {
        open(state, action) {
            state.open = true
            state.service = action ? action.payload : null
        },
        close(state) {
            state.open = false
            state.service = null
            state.edit = false
            state.add = false

        },
        edit(state, action) {
            state.edit = true
            state.add = false

        },
        add(state, action) {
            state.open = true
            state.add = true
            state.edit = false

        },
        update(state, action) {
            state.open = true

        }

    },
});

export const { open, close , edit, add} = dialogSlice.actions;
export default dialogSlice.reducer;