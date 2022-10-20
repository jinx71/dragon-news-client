import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SortedNewsCards from '../SortedNewsCard/SortedNewsCards';

const Home = () => {
    const news = useLoaderData()
    return (
        <div>
            {
                news.map(n => <SortedNewsCards briefNews={n}></SortedNewsCards>)
            }
        </div>
    );
};

export default Home;