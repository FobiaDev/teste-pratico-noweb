import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { Home } from './Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
