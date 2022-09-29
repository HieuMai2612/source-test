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
            prepare(matchId, name, answer, result, playerCount) {
                return {
                    payload: {
                        matchId,
                        name,
                        answer,
                        result,
                        playerCount,
                        date: new Date().toISOString(),
                    }
                }
            }
        }
    }
})

export const { playerResult } = resultSlice.actions;
export const selectAllResult = (state) => state.result;
export default resultSlice.reducer;