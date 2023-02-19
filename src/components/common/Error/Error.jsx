import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

const TIME_TO_HIDE = 5000;

export const Error = () => {
    const { error } = useSelector(({app: {error}}) => ({error}));
    const [open, setOpen] = useState(false);
    let timerId;

    useEffect(()=> {
        if(error) {
            setOpen(true);
            timerId = setTimeout(()=> {
                setOpen(false);
                clearTimeout(timerId);
            }, TIME_TO_HIDE);
        }
    }, [error]);

    return open && <div>{error}</div>;
}