Overview
Welcome to SproutCast – an intuitive podcast platform crafted with Next.js, TypeScript, and styled using Tailwind CSS. Designed to provide podcast lovers with an immersive experience, SproutCast allows users to explore, play, and organize their favorite podcasts seamlessly across desktop and mobile devices.

Built on the reliability of TypeScript, SproutCast ensures high code consistency while leveraging React Context and useState to manage dynamic state changes. Whether you're browsing episodes, creating playlists, or enjoying uninterrupted playback, SproutCast streamlines podcast discovery with a modern, user-friendly interface.

View the live version here: https://sproutcast.netlify.app/

IMPORTANT
Feature Limitation:
The confirmation prompt when closing a page while audio is playing could not be implemented due to limitations with the Next.js App Router. You can find more information about this issue here: [Next.js Forum.](https://www.reddit.com/r/nextjs/s/aclHWP3Kyz)

Running the App
To get started locally, follow these steps:

Install dependencies:
bash
npm install   
Start the development server:
bash
npm run dev
Open your browser and visit http://localhost:3000 to interact with the app.
App Architecture
Public Folder: Houses all static assets such as images and logos.
src Folder:
components: Contains all the reusable React components.
types: Defines TypeScript types for better code safety and maintainability.
Routing & Navigation
SproutCast leverages Next.js's App Router for file-based routing. Each page.tsx file directly maps to a corresponding URL, allowing for clear and efficient routing.

Rendering Strategy
Client-Side Rendering: Content is dynamically rendered on the browser, providing a responsive experience.
Server-Side Rendering: Pages are pre-rendered server-side for improved loading performance, ensuring a faster initial render.
State Management
Global State: Managed with React Context, ensuring consistency and persistence of data across different pages. For example, the audioContext.tsx manages the state of the audio player, so it remains uninterrupted as users navigate through different pages.
Local State: Local states are managed using useState, which handles component-specific states like sorting podcasts. This isolates changes to individual components without affecting others.
React Hooks:
useEffect: Helps initialize data and trigger side effects when components load, making it ideal for preloading data on page visits.
How to Use SproutCast
SproutCast supports various interactive features, such as dynamic sorting, episode search, and audio playback. Here are a few key functionalities:

Sorting Episodes: Episodes are initially shown in chronological order. Users can adjust the sort order using useState, either ascending or descending.
Persistent Audio Playback: The audio player’s state is managed globally via audioContext.tsx, so users can continue listening without interruption, even when switching pages.

Contact Me: allyazra2003@gmail.com
            +27837710786