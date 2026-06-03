import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  isSidebarOpen: boolean;
  isComingSoonOpen: boolean;
  comingSoonFeature: string;
}

const initialState: UiState = {
  isSidebarOpen: false,
  isComingSoonOpen: false,
  comingSoonFeature: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    openComingSoonModal: (state, action: PayloadAction<string>) => {
      state.isComingSoonOpen = true;
      state.comingSoonFeature = action.payload;
    },
    closeComingSoonModal: (state) => {
      state.isComingSoonOpen = false;
      state.comingSoonFeature = "";
    },
  },
});

export const { toggleSidebar, setSidebarOpen, openComingSoonModal, closeComingSoonModal } = uiSlice.actions;
export default uiSlice.reducer;
