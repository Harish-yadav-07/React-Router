// Import ReactDOM for rendering the app
import ReactDOM from 'react-dom/client'
// Import global styles
import './index.css'
// Import necessary components from react-router-dom
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// Import custom layout and page components
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// Create router configuration using route elements
const router = createBrowserRouter(
  createRoutesFromElements(
    // Root route with Layout component
    <Route path='/' element={<Layout />}>
      {/* Home page route */}
      <Route path='' element={<Home />} />
      {/* About page route */}
      <Route path='about' element={<About />} />
      {/* Contact page route */}
      <Route path='contact' element={<Contact />} />
      {/* Dynamic user route */}
      <Route path='user/:userid' element={<User />} />
      {/* Github page route with data loader */}
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
    </Route>
  )
)

// Render the app using RouterProvider and the configured router
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);