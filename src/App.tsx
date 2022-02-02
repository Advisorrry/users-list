import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import { ProfilePage } from './pages/ProfilePage'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<ProfilePage />} />
      </Routes>
    </MainLayout>
  )
}

export default App
