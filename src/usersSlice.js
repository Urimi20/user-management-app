import { createSlice } from "@reduxjs/toolkit";

const initialUsers = [
  {
    id: 1,
    name: "Erion Hoxha",
    email: "erion@example.com",
    phone: "044-111-222",
    website: "erionhoxha.com",
    company: { name: "HoxhaTech" },
    address: { street: "Rruga e Dibrës", city: "Tiranë" },
  },
  {
    id: 2,
    name: "Arta Kola",
    email: "arta@example.com",
    phone: "044-333-444",
    website: "artakola.com",
    company: { name: "KolaSoft" },
    address: { street: "Rruga e Elbasanit", city: "Tiranë" },
  },
  {
    id: 3,
    name: "Gentian Leka",
    email: "gentian@example.com",
    phone: "044-555-666",
    website: "gentianleka.com",
    company: { name: "LekaStudio" },
    address: { street: "Bulevardi Dëshmorët e Kombit", city: "Tiranë" },
  },
  {
    id: 4,
    name: "Linda Berisha",
    email: "linda@example.com",
    phone: "044-777-888",
    website: "lindaberisha.com",
    company: { name: "BerishaCorp" },
    address: { street: "Rruga Myslym Shyri", city: "Tiranë" },
  },
];

const slice = createSlice({
  name: "users",
  initialState: { items: initialUsers },
  reducers: {
    addUserAtTop: (state, action) => {
      state.items.unshift({ ...action.payload });
    },
    deleteUser: (state, action) => {
      state.items = state.items.filter((u) => u.id !== action.payload);
    },
  },
});

export const { addUserAtTop, deleteUser } = slice.actions;
export default slice.reducer;
