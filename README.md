# Canvas Animation with Capture Feature

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

This web-based application generates a dynamic canvas of colored columns and allows users to genereate, capture, preview, and download screenshots of the animation. The application uses: [➡️ HTML Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) for rendering and [➡️ MediaDevices API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) for the screen capturing feature.

## Features

✴️ **Dynamic Color Curtain Animation:**

- Renders vertical columns with random positions and RGB colors on an HTML5 Canvas.
- Columns are semi-transparent (25% opacity) and drawn continuously until a maximum of 120 columns is reached.
- Columns are generated at random x-coordinates within the canvas bounds, with a fixed width and full canvas height.
  
✴️ **Capture Feature:**

- Users can capture a screenshot of the entire screen (or monitor) using the browser's MediaDevices API.
- The captured screenshot is displayed in a preview overlay for review.
  
✴️ **Interactive Controls:**

- The canvas is initialized with a 2D context and 25% global opacity.
- A `Column` class defines each column's properties (x-position, color, width, height) and a method to draw it.
- The `produceIt` function generates columns with random x-positions and RGB colors, adding them to an array and drawing them on the canvas.


