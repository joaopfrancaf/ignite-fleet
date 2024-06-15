import { UserProvider } from '@realm/react';
import { Slot } from 'expo-router';

export default function HomeLayout() {
  return (
    <UserProvider>
        <Slot />
    </UserProvider>
  );
}