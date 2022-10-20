import { createBrowserRouter } from 'react-router-dom'
import SelectedNews from '../Component/SelectedNews/SelectedNews'
import SortedCategoryNews from '../Component/SortedCategoryNews/SortedCategoryNews'
import Main from '../Layout/Main'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => {
            return fetch('http://localhost:3001/categories')

        },
        children: [
            {
                path: '/home',
                element: <div>This is home</div>,
                loader: ({ params }) => fetch(`http://localhost:3001/home`)
            },
            {
                path: '/category/:id',
                element: <SortedCategoryNews></SortedCategoryNews>,
                loader: ({ params }) => fetch(`http://localhost:3001/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <SelectedNews></SelectedNews>,
                loader: ({ params }) => fetch(`http://localhost:3001/news/${params.id}`)
            }
        ]
    },


])