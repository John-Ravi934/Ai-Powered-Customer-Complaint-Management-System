import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  complaintSource: "",
  customerName: "",

  productName: "",
  productStrength: "",
  batchNumber: "",
  manufacturingDate: "",
  expiryDate: "",
  quantityAffected: "",

  complaintType: "",
  complaintDate: "",
  complaintDescription: "",

  severity: "",
  priority: "",
  nextAction: "",

  status: "Pending Triage",
};

const complaintSlice = createSlice({
  name: "complaint",

  initialState,

  reducers: {
    updateComplaint(state, action) {
      Object.assign(state, action.payload);
    },

    resetComplaint() {
      return initialState;
    },

    updateStatus(state, action) {
      state.status = action.payload;
    },

  },
});

export const {
  updateComplaint,
  resetComplaint,
  updateStatus,
} = complaintSlice.actions;

export default complaintSlice.reducer;