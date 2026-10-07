# DNS Cutover Handoff — goldenarmsecurity.ph

Captured: 2026-10-07 UTC. Public DNS was cross-checked through Google DNS and Cloudflare DNS public resolvers.

Public DNS cannot expose Cloudflare-hidden origin values or enumerate every private zone record. Before making changes, export or screenshot the full Cloudflare DNS zone and preserve all email/TXT/verification records.

## Current authoritative nameservers

```text
NS  goldenarmsecurity.ph  ashley.ns.cloudflare.com
NS  goldenarmsecurity.ph  moura.ns.cloudflare.com
```

## Current website records — replace only at cutover

```text
A     goldenarmsecurity.ph       104.21.12.165        TTL 300
A     goldenarmsecurity.ph       172.67.132.50        TTL 300
AAAA  goldenarmsecurity.ph       2606:4700:3031::ac43:8432  TTL 300
AAAA  goldenarmsecurity.ph       2606:4700:3036::6815:ca5   TTL 300
A     www.goldenarmsecurity.ph   104.21.12.165        TTL 300
A     www.goldenarmsecurity.ph   172.67.132.50        TTL 300
AAAA  www.goldenarmsecurity.ph   2606:4700:3031::ac43:8432  TTL 300
AAAA  www.goldenarmsecurity.ph   2606:4700:3036::6815:ca5   TTL 300
```

## Current email records — do not change

```text
MX  goldenarmsecurity.ph  1   aspmx.l.google.com        TTL 300
MX  goldenarmsecurity.ph  5   alt1.aspmx.l.google.com   TTL 300
MX  goldenarmsecurity.ph  5   alt2.aspmx.l.google.com   TTL 300
MX  goldenarmsecurity.ph  10  aspmx2.googlemail.com     TTL 300
MX  goldenarmsecurity.ph  10  aspmx3.googlemail.com     TTL 300
```

## Cutover instructions for DNS admin

1. Do not change MX, SPF/TXT, DKIM, DMARC, provider-verification, or unrelated subdomain records.
2. In Vercel, add `goldenarmsecurity.ph` and `www.goldenarmsecurity.ph` to the imported project.
3. Copy the exact values shown in the Vercel domain cards.
4. Replace the root/apex website A records with Vercel's exact A value.
5. Remove old root/apex AAAA records unless Vercel explicitly provides IPv6 guidance for this project.
6. Replace `www` website records with the exact Vercel CNAME target.
7. In Cloudflare, set the Vercel website records to DNS only / gray cloud unless a Cloudflare reverse proxy has been deliberately chosen.
8. Send screenshots/export of the changed rows after saving.
9. Keep the old website values available for rollback.

## Public lookup returned no answers for these common records

```text
TXT  goldenarmsecurity.ph
CAA  goldenarmsecurity.ph
TXT  _dmarc.goldenarmsecurity.ph
TXT  default._domainkey.goldenarmsecurity.ph
TXT  google._domainkey.goldenarmsecurity.ph
TXT  selector1._domainkey.goldenarmsecurity.ph
TXT  selector2._domainkey.goldenarmsecurity.ph
```

This does not prove those records are absent in Cloudflare. Preserve any existing TXT/DKIM/DMARC/provider records in the authoritative DNS zone.
