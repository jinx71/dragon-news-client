import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SortedNewsCards from '../SortedNewsCard/SortedNewsCards';

const SortedCategoryNews = () => {
    const categoryNews = useLoaderData();
    console.log("Total News : ", categoryNews)
    return (
        <div>

            {
                categoryNews.map(briefNews => <SortedNewsCards briefNews={briefNews}></SortedNewsCards>)
            }
        </div>
    );
};

export default SortedCategoryNews;