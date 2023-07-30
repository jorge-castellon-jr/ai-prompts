import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { SessionProviderProps } from 'next-auth/react';

import User from '@/models/user';
import { connectToDB } from '@/utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  async session({ session }: { session: SessionProviderProps['session'] }) {
    const session_user = await User.findOne({
      email: session?.user?.email || '',
    });

    if (!!session && !!session.user) {
      session.user.id = session_user?._id.toString();
    }
    return session;
  },
  async signIn({ profile }) {
    try {
      await connectToDB();

      // Check if user exists
      const user_exists = await User.findOne({ email: profile.email });

      // If not, create user
      if (!user_exists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(/\s/g, '').toLowerCase(),
          Image: profile.picture,
        });
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
