# Abacus Desk — WordPress Hack Fix Landing (Next.js 14 + Tailwind)

Production‑ready landing page with an email API for lead capture.

## Quick Start

```bash
# 1) Install deps
npm i   # or: pnpm i  OR: yarn

# 2) Create env
cp .env.example .env.local
# edit SMTP_* and LEAD_TO_EMAIL

# 3) Run locally
npm run dev

# 4) Build & start
npm run build && npm start
```

## Environment Variables

Create `.env.local`:

```
SMTP_HOST=smtp.yourhost.com
SMTP_PORT=587
SMTP_USER=alerts@abacusdesk.com
SMTP_PASS=your_smtp_password
LEAD_TO_EMAIL=security@abacusdesk.com
```

The contact form posts to `/api/lead` which uses Nodemailer to email the details.

## Deploy

### Vercel (easiest)
- Push this repo to GitHub
- Import into Vercel, add the env vars above
- Build command: `next build` (default)
- Node 18+ runtime

### Any Node server / cPanel
- Build: `npm run build`
- Start: `npm start` (serves on port 3000)
- Reverse proxy with Nginx/Apache to `http://127.0.0.1:3000`
- Ensure env vars are set (systemd or hosting panel)

### Docker
```
docker build -t abacus-wp-landing .
docker run -p 3000:3000 --env-file .env.local abacus-wp-landing
```

## Customisation

- Brand color is `#ef9b11` (Tailwind color `brand`).
- Edit content in `app/page.tsx`.
- Update footer contact info.
- Replace favicon at `public/favicon.ico`.

## Security Notes

- Consider adding reCAPTCHA/Turnstile on the form if you expect spam.
- Never commit `.env.local` to Git.
- Add rate limiting on `/api/lead` if hosting publicly.
# abacus-website-hack-LP
