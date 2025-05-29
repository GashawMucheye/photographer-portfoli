import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  export interface User {
    id: string;
    role: string;
  }

  export interface JWT {
    id: string;
    role: string;
  }
}
