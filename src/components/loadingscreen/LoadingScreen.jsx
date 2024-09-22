import React from "react";
import RingLoader from "react-spinners/RingLoader";

const LoadingScreen = ({ loading }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Takes the full height of the viewport
        }}>
            <RingLoader color={'#000'} loading={loading} size={150} />
        </div>
    );
};

export default LoadingScreen;
