# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Deployment repo for [katherineelkins.com](https://katherineelkins.com) — the personal/professional website for Katherine Elkins, AI safety researcher, author, and co-founder of the Human-Centered AI Lab. Hosted on Netlify.

## Architecture

**Static HTML site with no build system** — no bundler, no package.json, no framework. Edit HTML/CSS directly.

### Directory Structure

- `public/` — **Netlify publish directory**. Everything here is deployed to production.
  - Multi-page site: `index.html`, `research.html`, `books.html`, `speaking.html`, `policy.html`, `blog.html`
  - Shared stylesheet: `style.css` (all pages link to this via `<link>`)
  - Pages with additional page-specific `<style>` blocks: index (hero layout), books (book cards), speaking (talk groups), blog (coming-soon section)
  - GEO assets: `llms.txt`, `robots.txt`, `sitemap.xml`
  - Config: `netlify.toml` (clean URLs, security headers, caching), `_redirects`
- `public/assets/` — Asset directories (`css/`, `js/`, `images/`).
- `src_20260302-1016est/` — Timestamped snapshot of the original source before CSS refactoring. Reference only.
- `dev/` — Development notes and AI coding chat logs. Not deployed.

## Deployment

- **Host**: Netlify
- **Publish directory**: `public/`
- **Domain**: katherineelkins.com
- **Deploy trigger**: Push to `main` branch on GitHub
- No build command — Netlify serves static files directly from `public/`.

## CSS Architecture

- **Shared styles**: `public/style.css` — loaded via `<link rel="stylesheet" href="/style.css">` in all pages.
- **Fonts**: Cormorant Garamond (serif headings) + Libre Franklin (sans body), loaded via Google Fonts `<link>` tags in HTML `<head>`.
- **Page-specific styles**: Small inline `<style>` blocks in pages that need them (index, books, speaking, blog). Keep these inline — they're small and page-specific.
- **Design palette**: `--color-accent: #7B2D3B` (deep rose), `--color-bg: #FAF9F6` (warm off-white). Full variables in `:root` block of `style.css`.
- **Design ethos**: "Editorial literary minimalism — warm, authoritative, distinctive."

## GEO/SEO

The site is optimized for AI search visibility (Generative Engine Optimization):

- **JSON-LD schema**: Inline in each page's `<head>` — Person, CollectionPage, Book, ScholarlyArticle, FAQPage types. Rich structured data for AI extraction.
- **llms.txt**: Plain-text AI-readable summary at `/llms.txt`.
- **robots.txt**: Explicitly allows all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, etc.).
- **sitemap.xml**: Standard XML sitemap covering all 6 pages + llms.txt.
- **netlify.toml**: Clean URLs (e.g., `/research` serves `research.html`), security headers, asset caching.

## Multi-page > SPA

This site intentionally uses a multi-page architecture (not SPA) for GEO/SEO:
- Each page has its own URL, meta tags, canonical link, and JSON-LD schema.
- AI crawlers and search engines can index each page independently.
- No JavaScript routing — direct HTML navigation.
