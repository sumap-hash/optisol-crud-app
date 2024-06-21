import React from 'react';

const BioTable = ({ userData, onEdit, onDelete, onView }) => {
    return (
        <div className="col-md-6 tabt">
            <table className="table">
                <tbody>
                    <tr className="ztxt">
                        <th>Name</th>
                        <th>Email</th>
                        <th>phoneNumber</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>View</th>
                    </tr>
                    {userData?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.firstName} {item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td><button className="ed" onClick={() => onEdit(item)}>Edit</button></td>
                            <td><button className="ed" style={{ background: '#f00' }} onClick={() => onDelete(item.id)}>Delete</button></td>
                            <td><button className="ed" style={{ background: '#000' }} onClick={() => onView(item)}>View</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BioTable;
