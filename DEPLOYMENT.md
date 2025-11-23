# Deployment Guide

This guide explains how to host your Hypnotherapy Clinic website for free using **Netlify** or **Vercel**.

## Option 1: Netlify Drop (Easiest)

1.  **Build the Project**:
    Open your terminal in the project folder and run:
    ```bash
    npm run build
    ```
    This creates a `dist` folder with your production-ready website.

2.  **Deploy**:
    - Go to [app.netlify.com/drop](https://app.netlify.com/drop).
    - Drag and drop the `dist` folder onto the page.
    - Your site will be live instantly!

3.  **Note**:
    - We added a `_redirects` file to the `public` folder so that refreshing pages works correctly.

## Option 2: Vercel (Fastest)

1.  **Install Vercel CLI** (Optional but recommended):
    ```bash
    npm i -g vercel
    ```

2.  **Deploy**:
    Run this command in your project folder:
    ```bash
    vercel
    ```
    Follow the prompts (mostly just press Enter).

3.  **Note**:
    - We added a `vercel.json` file to handle routing automatically.

## Option 3: GitHub Pages

If you push this code to GitHub, you can use GitHub Pages, but it requires a bit more configuration for React apps (using `gh-pages` package). Netlify/Vercel are recommended for simplicity.
