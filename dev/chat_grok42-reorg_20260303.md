**1. Repo Purpose: Yes, this repo is intended for `katherineelkins.com` — and yes, the humancenteredailab content was added by mistake.**

Your local folder (`~/code/website_katherineelkins`) + the old `src/` multi-page files (index.html, research.html, etc.) are clearly the **personal academic/professional site** for Katherine Elkins.

The attached file `humancenteredailab-geo-optimized_20260302.html` (and the duplicate in the root) is **100% content for the separate lab site**:
- Title, canonical URL, schema.org (ResearchOrganization + FAQPage), all sections, stats, grants, and people point to `humancenteredailab.org`.
- As of today (March 3, 2026), `https://humancenteredailab.org` is live with exactly this content.
- `https://katherineelkins.com` remains the personal site (bio-first, with lab mentions only as part of her work).

You likely started drafting the new GEO-optimized Lab page inside the personal-site repo by accident. This is common when juggling two related sites.

**Immediate recommendation**: Keep this repo strictly for the personal `katherineelkins.com` site. After we rename it (see #3), we can:
- Delete or archive the Lab HTML, or
- Move it to a new separate repo (`humancenteredailab`).

**2. Best GitHub repo name: `katherineelkins-com` (with hyphen)**

**Use `katherineelkins-com`** (not `katherineelkins.com`).

**Why (March 3, 2026 best practices)**:
- **Kebab-case (hyphens) is the universal standard** for GitHub repos — every major guide, Stack Overflow consensus, and 2026 community recommendations (BC-Gov, GoldenbergLab, Medium articles, GitHub discussions) strongly prefer lowercase + hyphens.
- **Interoperability & safety**:
  - Hyphens are 100% safe in shell scripts, local paths, CI/CD, Netlify/Vercel, GitHub Actions, Docker, etc.
  - Periods (`.`) are technically allowed by GitHub (and work fine on Netlify), but some older OSS tools, document processors (unstruct/docling), Python packaging, or Hugging Face/PyTorch workflows can treat dots specially in filenames/paths/imports → unnecessary friction.
  - `katherineelkins-com.git` looks clean; `katherineelkins.com.git` (double extension) feels slightly odd in logs/URLs.
- Matches the two-repo workflow we discussed earlier (dev vs deploy).
- Still instantly readable and clearly signals the domain.

`katherineelkins.com` works and is fine for very small personal sites, but `katherineelkins-com` is the safer, more professional, future-proof choice in 2026.

**3. Step-by-step instructions to rename (local + remote)**

**Do this in order (takes <5 minutes, zero downtime).**

**Step 1: Rename the remote repo on GitHub (do this FIRST)**
1. Go to https://github.com/jon-chun/website_katherineelkins (or whatever your current repo URL is).
2. Click **Settings** (top tab).
3. In the **Repository name** box, change `website_katherineelkins` → `katherineelkins-com`.
4. Click the green **Rename** button at the bottom.
   - GitHub auto-redirects the old URL forever.

**Step 2: Update your local folder on Mac**
```bash
cd ~/code
mv website_katherineelkins katherineelkins-com
cd katherineelkins-com
```

**Step 3: Update the Git remote URL**
```bash
git remote set-url origin https://github.com/jon-chun/katherineelkins-com.git
```

**Step 4: Verify everything**
```bash
git remote -v          # should show the new .com URL
git pull               # should work cleanly
```

**Step 5: (Optional but recommended) Commit the rename**
```bash
git add .
git commit -m "chore: rename repo/folder to katherineelkins-com (2026 best practice)"
git push
```

**Step 6: Update Netlify (after the rename)**
- In Netlify dashboard → your site → **Site configuration** → **Build & deploy** → **Repository** → **Edit settings** → re-link to the new repo `katherineelkins-com`.
- Trigger a new deploy.

That’s it — your repo, folder, remote, and CI/CD are now perfectly named `katherineelkins-com`.

**Next quick actions (after rename)**  
Reply with “done” and I’ll give you:
- Commands to clean out the accidental Lab HTML and restore the proper personal-site structure.
- Or commands to spin up a brand-new `humancenteredailab` repo for the Lab site (recommended — keep them separate).

Ready when you are!