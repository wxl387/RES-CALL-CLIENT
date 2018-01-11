import React from "react";
import "./Panel.css";

export const Panel = ({children}) =>
    <div className ="loginScreen">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-md-offset-4 col-xs-12 col-xs-12">

                    <div className="panel panel-default">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>

