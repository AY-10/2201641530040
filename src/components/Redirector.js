import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Redirector = () => {
    const { shortUrl } = useParams();

    useEffect(() => {
        const redirectToOriginalUrl = async () => {
            try {
                const response = await fetch(`/api/redirect/${shortUrl}`);
                if (response.ok) {
                    const { originalUrl } = await response.json();
                    window.location.href = originalUrl;
                } else {
                    console.error('Failed to redirect: URL not found');
                }
            } catch (error) {
                console.error('Error during redirect:', error);
            }
        };

        redirectToOriginalUrl();
    }, [shortUrl]);

    return (
        <div>
            <h2>Redirecting...</h2>
        </div>
    );
};

export default Redirector;