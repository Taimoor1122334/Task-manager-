import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'

export default function App() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}