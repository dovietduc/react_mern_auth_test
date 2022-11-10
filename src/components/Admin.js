import React from 'react';

function Admin() {
    return (
        <div className="wrapper">

            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item d-none d-sm-inline-block">
                        <button type="button" class="btn btn-primary">
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>

            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <span className="brand-text font-weight-light">
                        Code Love
                    </span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="info">
                            <a href="#" className="d-block">
                                Alexander Pierce
                            </a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item menu-open">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>List User</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
			
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">List User</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                        >
                                            Create
                                        </button>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                
                                    <div className="card-body table-responsive p-0">
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
                                                        <span className="tag tag-success">
                                                            Approved
                                                        </span>
                                                    </td>
                                                    <td>
                                                        Bacon ipsum dolor sit
                                                        amet salami venison
                                                        chicken flank fatback
                                                        doner.
                                                    </td>
                                                </tr>
                                            
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside className="control-sidebar control-sidebar-dark">
                <div className="p-3">
                    <h5>Title</h5>
                    <p>Sidebar content</p>
                </div>
            </aside>

            <footer className="main-footer">
                <div className="float-right d-none d-sm-inline">
                    Anything you want
                </div>
                <strong>
                    Copyright © 2014-2021
                    <a href="https://adminlte.io">AdminLTE.io</a>.
                </strong>
                All rights reserved.
            </footer>
        </div>
    );
}

export default Admin;
