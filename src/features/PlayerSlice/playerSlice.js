import { createSlice } from "@reduxjs/toolkit";


const PlayerSlice = createSlice({
    name: 'player',
    initialState: [
    ],
    reducers: {
        playerAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(id, name) {
                return {
                    payload: {
                        id: 0,
                        name,

                    }
                }
            }
        }
    }
})

export const { playerAdded } = PlayerSlice.actions;
export const selectAllPlayers = (state) => state.player;
export default PlayerSlice.reducer;