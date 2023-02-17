import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://feedback-server-0u43.onrender.com/api/';

export const fetchFeedbacks = createAsyncThunk(
  'feedbacks/fetchFeedbacks',
  async () => {
    const response = await axios.get('/feedbacks');
    return response.data;
  }
);

export const addFeedback = createAsyncThunk(
  'feedbacks/addFeedback',
  async function (data) {
    try {
      const feedback = {
        name: data.name,
        email: data.email,
        message: data.message,
      };
      const response = await axios.post('/feedbacks', feedback);
      toast.success('Your feedback was sent successfully. Thank you!');
      return response.data;
    } catch (error) {
      toast.error(error);
    }
  }
);
