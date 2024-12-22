import React, { useEffect, useState } from 'react';



export const usefecht = (url) => {
    const [Stade, setStade] = useState({
        data: null,
        isloading: true,  // Comienza como true
        haserror: false,
        errormensaje: null,
    });

    useEffect(() => {
        getFetch();
    }, [url]);  // Se agrega `url` como dependencia

    const getFetch = async () => {
        setStade({
            data: null,
            isloading: true,
            haserror: false,
            errormensaje: null,
        });
        
        try {
            const resp = await fetch(url);
            if (!resp.ok) {
                setStade({
                    data: null,
                    isloading: false,
                    haserror: true,
                    errormensaje: {
                        code: resp.status,
                        message: resp.statusText
                    }
                });
                return;
            }
            const data = await resp.json();
            setStade({
                data: data,
                isloading: false,
                haserror: false,
                errormensaje: null
            });
        } catch (error) {
            setStade({
                data: null,
                isloading: false,
                haserror: true,
                errormensaje: error.message
            });
        }
    };

    return {
        data: Stade.data,
        isloading: Stade.isloading,
        haserror: Stade.haserror,
        errormensaje: Stade.errormensaje
    };

    
};
