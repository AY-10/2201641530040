import React from 'react';

const StatisticsPage = () => {
    // Sample statistics data
    const statistics = {
        totalUrls: 100,
        totalClicks: 2500,
        uniqueVisitors: 1500,
    };

    return (
        <div>
            <h1>Statistics</h1>
            <ul>
                <li>Total URLs Shortened: {statistics.totalUrls}</li>
                <li>Total Clicks: {statistics.totalClicks}</li>
                <li>Unique Visitors: {statistics.uniqueVisitors}</li>
            </ul>
        </div>
    );
};

export default StatisticsPage;