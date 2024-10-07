import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import GetCity from './GetCity';


export default function Layout() {
  return (
    <div>
        <div className="container mt-5" >
            <div className="row ">
                <div className="col">
                    <GetCity/>
                </div>
            </div>

        </div>
    </div>
  )
}
