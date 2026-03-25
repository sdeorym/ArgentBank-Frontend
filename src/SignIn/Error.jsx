import { useState, useEffect } from "react";
import Button from '../general/Button.jsx';

function Error({show}) {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        setIsVisible(show);
    }, [show]);
    if (!isVisible) return null;
    return (
        <div className="errorBox">
            There was an error, check your credentials.
            <Button classname="close" content="Close" type="button" onClick={() => setIsVisible(false)}/>
        </div>
    )
}

export default Error