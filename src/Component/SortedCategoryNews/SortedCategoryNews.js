import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SortedCategoryNews = () => {
    const categoryNews = useLoaderData();
    console.log("Total News : ", categoryNews)
    return (
        <div>
            Total News In This Category is : {categoryNews.length}
        </div>
    );
};

export default SortedCategoryNews;