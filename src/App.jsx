import { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Leave from './templates/Leave'

import * as Pages from "./pages";
import General from './templates/General';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Leave />}>
          <Route path="/" element={<Pages.Onboarding />} />
        </Route>
        <Route path="/login"    element={<Pages.Login />} />
        <Route path="/signup"   element={<Pages.Signup />} />
        <Route path="/picture"  element={<Pages.Picture />} />

        <Route element={<General />}>
          <Route path="/home"       element={<Pages.Home />} />
          <Route path="/diagnose"   element={<Pages.Diagnose />} />
          <Route path="/treatment"  element={<Pages.Treatment />} />
          <Route path="/store"      element={<Pages.Store />} />
          <Route path="/settings"   element={<Pages.Settings />} />
          <Route path="/history"    element={<Pages.History />} />
        </Route>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
