import React from "react";
import "./Panel.css";

export const PanelBody = props =>
    <div className="panel-body">
        <form acceptCharset="UTF-8">
            <fieldset>
                <div className="form-group">
                    <input className="form-control" {...props} />
                </div>
            </fieldset>
        </form>
    </div>

