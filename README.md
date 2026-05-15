# Fadi Kazaan Website

A responsive personal barber and hairstyling website for Fadi Kazaan. The site presents Fadi's brand, services, business hours, social links, and a booking/contact form.

## Live Preview

Because this is mostly a static HTML/CSS site, you can preview the pages directly in a browser:

```text
index.html
contact.html
```

For a better development preview, run a local server from the project folder:

```powershell
python -m http.server 5500
```

Then open:

```text
http://localhost:5500/index.html
http://localhost:5500/contact.html
```

To preview the site as a phone screen, open Chrome or Edge DevTools and press `Ctrl + Shift + M`.

## Pages

- `index.html` - Home page with hero section, about content, premium services, business hours, and social links.
- `contact.html` - Contact and booking page with a form, profile media, and social links.

## Features

- Responsive layout for desktop, tablet, and phone screens.
- Mobile navigation menu.
- Hero image slides.
- About section for Fadi Kazaan.
- Service highlights for location, VIP haircut, duration, and clean tools.
- Instagram and WhatsApp links.
- Contact form connected to `/api/contact`.

## Tech Stack

- HTML
- CSS
- JavaScript
- Vercel-style serverless API function
- Resend email API

## Project Structure

```text
.
|-- index.html
|-- contact.html
|-- style.css
|-- api/
|   `-- contact.js
|-- img/
|   |-- bg/
|   `-- ...
|-- icones/
|   `-- ...
`-- README.md
```

## Contact Form Setup

The contact page sends form submissions to:

```text
/api/contact
```

The API handler uses Resend, so the deployed project needs these environment variables:

```text
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_destination_email
```

The form will not fully send email when opened directly as a local file. For the API route to work, deploy the project to a platform that supports serverless functions, such as Vercel.

## Deployment Notes

- Static pages can be hosted on GitHub Pages, Netlify, or Vercel.
- The current contact API is written for a serverless environment, so Vercel is the simplest match.
- If hosting on GitHub Pages, replace the API contact form with a static form service such as Formspree or EmailJS.

## Author

shady-web-design
