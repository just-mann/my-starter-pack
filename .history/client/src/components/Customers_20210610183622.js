import React, {useState, useEffect} from 'react';

export const Customers = () => {
    
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/customers")
            .then(res => res.json())
            .then(data => setCustomers(data))
    })

    return (
        <div>
            <h2>Customers</h2>
            <div>
                {customers.map(customer => {
                    return (
                        <li key={customer.id}>{`${customer.name} ${customer.age}`}</li>
                    )
                })}
            </div>
        </div>
    )
}
