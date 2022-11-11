import React from 'react';

import AdminLayout from '../layout/AdminLayout';

function CreateUser() {
    return (
        <AdminLayout>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2"></div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            Create User
                                        </h3>
                                    </div>

                                    <form>
                                        <div className="card-body">
                                            <div className="form-group">
												<label className="float-left">Username</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Username"
                                                />
                                            </div>
                                            <div className="form-group">
												<label className="float-left">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                />
                                            </div>
                                            <div className="form-group">
												<label className="float-left">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="form-group">
												<label className="float-left">Role</label>
                                                <select
                                                    className="custom-select rounded-0"
                                                >
													<option value="">Choose Role</option>
                                                    <option value="editor">Editor</option>
                                                    <option value="author">Author</option>
                                                    <option value="contributor">Contributor</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
}

export default CreateUser;
