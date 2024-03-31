import '@/styles/global.css'
import { StatusBar } from 'expo-status-bar'
import { Profile } from '@/app/Profile'
import { ToastProvider } from '@/components/Toast'
import { ThemeProvider } from '@/Provider/ThemeProvider';

export default function App() {
  return (
    <ToastProvider position='top'>
      <ThemeProvider>
        <StatusBar style="light" />
        <Profile />
      </ThemeProvider>
    </ToastProvider>
  );
}
