import { createAsyncThunk } from "@reduxjs/toolkit";
import { getComments } from "../../services";

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        return await getComments();
    }
)