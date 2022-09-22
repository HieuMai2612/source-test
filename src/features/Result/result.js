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
            prepare(match, name, answer, result, quesCount, playerCount) {
                return {
                    payload: {
                        match,
                        name,
                        answer,
                        result,
                        quesCount,
                        playerCount,
                    }
                }
            }
        }
    }
})

export const { playerResult } = resultSlice.actions;
export const selectAllResult = (state) => state.result;
export default resultSlice.reducer;