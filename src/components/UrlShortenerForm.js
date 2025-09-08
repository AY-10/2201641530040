import React, { useState } from 'react';

const UrlShortenerForm = () => {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to shorten the URL goes here
        // For now, we'll just simulate a shortened URL
        setShortenedUrl(`short.ly/${btoa(url)}`);
    };

    return (
        <div>
            <h2>URL Shortener</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL to shorten"
                    required
                />
                <button type="submit">Shorten</button>
            </form>
            {shortenedUrl && (
                <div>
                    <p>Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>
                </div>
            )}
        </div>
    );
};

export default UrlShortenerForm;