import React from "react";

export default function DismissAleart(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div ClassName="alert alert-warning alert-dismissible fade show" role="alert">
                            <span>{props.title}</span>
                            <button type="button" ClassName="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}