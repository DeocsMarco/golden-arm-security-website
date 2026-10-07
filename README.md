# Golden Arm Security Website

Static website export for `goldenarmsecurity.ph`.

This repository is a fork-ready copy of the complete static website currently packaged for production. It contains the built HTML, CSS, JavaScript, images, video, `robots.txt`, `sitemap.xml`, and static route folders. No server-side code, database, credentials, or Vercel account files are required.

## How to preview locally

From the repository root:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

## How to deploy on Vercel

1. Fork this repository or import it into the client's GitHub account.
2. In Vercel, choose **Add New Project** and import the forked repository.
3. Use these settings:
   - Framework preset: **Other / Static**
   - Build command: **None / leave blank**
   - Output directory: `.`
   - Install command: **None / leave blank**
4. Deploy the project.
5. After the Vercel deployment is ready, open **Project Settings → Domains** and add:
   - `goldenarmsecurity.ph`
   - `www.goldenarmsecurity.ph`
6. Use the exact DNS values shown in Vercel's domain cards. Do not guess the CNAME target.

## DNS cutover reminder

Current public DNS uses Cloudflare nameservers. Preserve all email and verification records, especially MX, SPF/TXT, DKIM, DMARC, and unrelated subdomains.

For Vercel with third-party DNS, the usual pattern is:

- Apex/root `goldenarmsecurity.ph`: A record to the exact Vercel value shown in the domain card. Vercel commonly uses `76.76.21.21`, but the card is the source of truth.
- `www.goldenarmsecurity.ph`: CNAME to the exact Vercel target shown in the domain card.
- Remove old conflicting A/AAAA records for the website hostnames during cutover.
- In Cloudflare, use **DNS only / gray cloud** for Vercel records unless the client intentionally chooses a Cloudflare reverse-proxy setup.

See `docs/DNS-CUTOVER.md` for the current public records and handoff steps.

## Rollback

Keep a screenshot/export of the current Cloudflare DNS zone before changing anything. If cutover fails, restore the prior website records listed in `docs/DNS-CUTOVER.md` while keeping mail records unchanged.

## Ownership and rights

This website is for Golden Arm Security's use. Do not treat this repository as open-source licensed software unless Golden Arm explicitly adds a license.
