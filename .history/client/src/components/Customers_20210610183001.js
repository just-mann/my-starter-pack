import React, {useState, useEffect} from 'react';

export const Customers = () => {
    
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("/api/customers")
            // .then(res => res.json())
            .then(data => console.log(data))
    })

    return (
        <div>
            <h2>Customers</h2>
        </div>
    )
}
