import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import AdminLayout from '../layout/AdminLayout';

function Admin() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user);

    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get('auth/admin/user');

                // save to store
                dispatch({
                    type: 'GET_USER_LIST',
                    payload: response.data,
                });
            } catch (error) {
                // log error
            }
        }
        getUser();
    }, []);

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
                    {users.map(function (user) {
                        return (
                            <tr key={user._id}>
                                <td>183</td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    Delete
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </AdminLayout>
    );
}

export default Admin;
