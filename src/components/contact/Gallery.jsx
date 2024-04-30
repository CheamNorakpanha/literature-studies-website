import React from "react";

function Gallery() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="https://api.architectuul.org/media/4f525832-0418-40e3-85f1-793b6d7b5f76/1312x.jpg"
                        className="w-100 shadow-1-strong mb-4 bw-image"
                        alt=""
                    />
                    <img
                        src="https://api.architectuul.org/media/5138a9e5-9c88-4a08-9602-63556d7b5f76/1312x.jpg"
                        className="w-100 shadow-1-strong mb-4"
                        alt=""
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://api.architectuul.org/media/4f5258da-940c-4121-a770-7a086d7b5f76/1312x.jpg"
                        className="w-100 shadow-1-strong mb-4 bw-image"
                        alt=""
                    />
                    <img
                        src="https://api.architectuul.org/media/5138a9b8-7fd0-432e-8162-64226d7b5f76/1312x.jpg"
                        className="w-100 shadow-1-strong mb-4"
                        alt=""
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://api.architectuul.org/media/4f523fcd-94d4-45da-85dd-7a086d7b5f76/1312x.jpg"
                        className="w-100 shadow-1-strong mb-4 bw-image"
                        alt=""
                        height="96%"
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery;