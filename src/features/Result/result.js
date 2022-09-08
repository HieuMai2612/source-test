import { createSlice } from "@reduxjs/toolkit";



const resultSlice = createSlice({
    name: 'result',
    initialState: [
    ],
    reducers: {
        playerResult: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(match, question, answer, result) {
                return {
                    payload: {
                        match,
                        question,
                        answer,
                        result,
                    }
                }
            }
        }
    }
})

export const { playerResult } = resultSlice.actions;
export default resultSlice.reducer;