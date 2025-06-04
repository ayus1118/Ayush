import React from "react";

export default function DismissAleart(props) {
    return (
            props.alert && <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong> {props.alert.type} {props.alert.msg}</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
} 