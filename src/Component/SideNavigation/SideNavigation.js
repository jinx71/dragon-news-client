import React from 'react';
import { Link } from 'react-router-dom';

const SideNavigation = ({ categories }) => {
    console.log(categories)
    return (
        <div>
            <h5>All Categories : {categories.length}</h5>
            {
                categories.map(category => <><Link to={`/category/${category.id}`}>{category.name}</Link> <br></br></>)
            }
        </div>
    );
};

export default SideNavigation;