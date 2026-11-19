# Corrupt State RP — Official Website

A responsive Arabic-first (RTL) landing page and project/company portal for Corrupt State RP.

## Deploy with GitHub Pages
1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **GitHub Actions**.
3. Pushes to `main` run the included Pages workflow.
4. The site will be published at the GitHub Pages URL shown in Settings → Pages.

## Current support form status
The support form currently creates a local reference and stores it in the visitor's browser only. It does **not** transmit tickets to a support team. Connect a secure backend (for example a database + authenticated admin dashboard + server-side mail/notifications) before announcing centralized account recovery. Never collect passwords or one-time verification codes.

## Content
The game story, citizen onboarding, factions, jobs, institutions, and world regions are based on the Corrupt State RP project brief. Photography is loaded from Unsplash image CDN URLs. Replace with licensed in-game screenshots as they become available.


## Dynamic site API and administration

- Cloudflare Worker: `corrupt-state-site-api.irdreed95.workers.dev`
- D1 database: `corrupt-state-site` (dedicated to this website).
- Admin page: `/admin.html`
- The public news, announcements, hiring cards, and hero video URL are loaded from the API.
- Support tickets are stored centrally in D1.

### Required secrets before opening the admin panel and Discord notifications

In Cloudflare Dashboard → Workers & Pages → `corrupt-state-site-api` → Settings → Variables and Secrets, add these as **Secrets** (not plain text variables):

1. `ADMIN_PASSWORD` — choose a strong, unique admin password.
2. `DISCORD_WEBHOOK_URL` — create a new Discord webhook after revoking the previously exposed webhook URL, then paste the new URL here.

Do not commit these values to GitHub or place them in website JavaScript. The support API can store tickets before Discord is configured; Discord notifications remain inactive until the second secret is set.

### Admin capabilities

- Publish news, announcements, developer recruitment posts, and image cards.
- Set the cinematic hero background using a direct HTTPS MP4 URL.
- Review support tickets and update their statuses.
- Admin sessions expire after 12 hours.
