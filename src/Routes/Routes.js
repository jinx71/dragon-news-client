import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => {
            return fetch('http://localhost:3001/categories')
        },
    },
    {
        path: '/category/:id',
        element: <div>This is category</div>
    }

])