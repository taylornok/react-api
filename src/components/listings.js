import React from 'react'

const Listings = ({listings}) => {
    return (
        <div>
            <center><h1>Search Results</h1></center>
            {listings.map((listing) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{listing.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{listing.category.name}</h6>
                        <p class="card-text">{listing.company.name}</p>
                        <p class="card-text">{listing.company.url}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Listings;