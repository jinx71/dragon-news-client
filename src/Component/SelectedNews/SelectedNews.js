import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SelectedNews = () => {
    const selectedNews = useLoaderData()
    return (
        <div>
            This is selectednews {selectedNews.map(a => a.title)}
        </div>
    );
};

export default SelectedNews;