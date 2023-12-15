import { createSlice } from "@reduxjs/toolkit";

export const navViewSlice = createSlice({
  name: "navView",
  initialState: {
    isSideNavFolded: false,
    isSideNavVisible: true,
    isProfileModalOpen: false,
  },
  reducers: {
    setCurrentView: (state, action) => {
      const { view, data } = action.payload;
      console.log("view:   ?  ?      " + view);
      state.currentView = view;
      state[`${view}`] = data;
      state.expanded = state.expanded === "hidden" ? "block" : "block";
    },

    setProfileModal: (state, action) => {
      state.isProfileModalOpen = action.payload.isProfileModalOpen;
    },
    setSideNavVisibility: (state, action) => {
      state.isSideNavVisible = action.payload.isSideNavVisible;
    },
    setSideNavFoldability: (state, action) => {
      state.isSideNavFolded = action.payload.isSideNavFolded;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProfileModal, setSideNavFoldability, setSideNavVisibility } =
  navViewSlice.actions;

export default navViewSlice.reducer;
