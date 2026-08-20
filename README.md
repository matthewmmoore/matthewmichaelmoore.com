# Matthew Moore consulting website

An Astro static site for `matthewmichaelmoore.com`. All business identity values live in `src/config/brand.ts`; update that file (and replace `public/icon.png`) if the business name or legal entity changes. Page copy is organized in `src/data/`.

## Local development

```bash
npm install
npm run dev
npm run check
npm run build
```

## GitHub Pages deployment

1. Create a GitHub repository and push this project to its `main` branch.
2. In GitHub: **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys every push to `main`. The first deployment creates the Pages environment.
4. In **Settings → Pages → Custom domain**, enter `matthewmichaelmoore.com` and enable **Enforce HTTPS** once GitHub offers it. The repository also includes the required `public/CNAME` file.

## Namecheap DNS

At Namecheap, open **Domain List → Manage → Advanced DNS** for `matthewmichaelmoore.com`. Remove conflicting parking/redirect records and add GitHub Pages records:

| Type | Host | Value |
| --- | --- | --- |
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| CNAME Record | `www` | `<your-github-username>.github.io` |

DNS propagation can take time. Confirm the custom domain in GitHub Pages before relying on it. GitHub’s current domain instructions remain the source of truth if their IP addresses change.

## Google Analytics 4

Analytics is disabled by default. To enable it, add a repository secret or GitHub Pages environment variable named `PUBLIC_GA_MEASUREMENT_ID` with your real GA4 measurement ID (`G-...`), then ensure the build step exposes it as an environment variable. Add this to the workflow build step:

```yaml
env:
  PUBLIC_GA_MEASUREMENT_ID: ${{ secrets.PUBLIC_GA_MEASUREMENT_ID }}
```

The analytics component runs only in production and only with a configured ID. Do not pass names, email addresses, or other personally identifiable information to Analytics.

## Future contact form

Set `contactFormEndpoint` in `src/config/brand.ts` to a form provider endpoint to show the form. The form posts a `redirect` value for `/thank-you/`; confirm your selected provider supports that field/redirect convention before enabling it.

## Legal note

The included Privacy Policy is a plain-language starting template, not legal advice. Have it reviewed if the business expands, introduces new tracking, or collects more information.
