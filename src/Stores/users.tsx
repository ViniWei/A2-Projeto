import create from 'zustand';

interface User {
  nome: string;
  email: string;
  senha: string;
  bio: string;
}

interface UserState {
  users: User[];
  addUser: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
}));