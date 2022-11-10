import React from 'react';
import AdminLayout from '../layout/AdminLayout';

function Admin() {
    return (
        <AdminLayout id="User">
            <table className="table table-hover text-nowrap">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>183</td>
                        <td>John Doe</td>
                        <td>11-7-2014</td>
                        <td>
                            <span className="tag tag-success">Approved</span>
                        </td>
                        <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                        </td>
                    </tr>
                </tbody>
            </table>
        </AdminLayout>
    );
}

export default Admin;
