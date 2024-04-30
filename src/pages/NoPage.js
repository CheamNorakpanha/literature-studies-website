import React, {Link} from "react";

const NoPage = () => {
    return(
        <div>
            <h1>404</h1>
            <p>Sorry, we couldn't find this page. But don't worry, you can find plenty of other things on our <Link to="/home">homepage</Link>.</p>
        </div>
    );
};

export default NoPage;