import React from 'react';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
    return (
        <Typography
                component="span"
                variant="h6"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
               <div>A React Webpack Material boilerplate typically includes React for UI development, Webpack for bundling, and Material-UI (MUI) for styling. Below is an introduction to what such a boilerplate might include:</div>
               Overview

               <div>This boilerplate provides a solid foundation for building modern React applications with Webpack and Material-UI. It includes optimized configurations for development and production, ensuring a fast and scalable setup.</div>
                <br />
                <div>Features</div>

                <ul>
                    <li>✅ React 18 – The latest React framework for building interactive UIs.</li>
                    <li>✅ Webpack 5 – Efficient module bundling with hot reloading.</li>
                    <li>✅ Material-UI (MUI) – Beautiful and customizable React components.</li>
                    <li>✅ Babel – ES6+ support for cleaner JavaScript code.</li>
                </ul>
              </Typography>
    )
}

export default Dashboard;
