/* In this file I create the actions for the counter reducer, that will
update the balance displayed on screen with values that have been incremented or decremented,
or with values that have 5% interest or 15% charges applied to them.
*/

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({ 
    name: "counter",
    initialState: {
        value: 500
    },
    reducers: {
        incrementByAmout: (state, action) => {
            state.value += action.payload
        },
        decrementByAmout: (state, action) => {
            state.value -= action.payload
        },
        addInterest: (state) => {
            state.value += (state.value  / 20)
        },
        charges: (state) => {
            state.value *= 0.85
        }
    },
})


export const { incrementByAmout, decrementByAmout, addInterest, charges } = counterSlice.actions; 

export default counterSlice.reducer;
