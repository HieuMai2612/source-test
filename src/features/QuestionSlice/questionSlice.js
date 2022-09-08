import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        match: 1,
        question: 'hello',
        answer: 'yes',
    },
    {
        match: 2,
        question: 'form this site is no',
        answer: 'no',
    },
    {
        match: 3,
        question: 'hello again',
        answer: 'yes',
    },
]

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {},
})

export const selectAllQuestion = (state) => state.question
export default questionSlice.reducer;