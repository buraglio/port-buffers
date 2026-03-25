# Packet Buffer Reference

A static reference site cataloging packet buffer sizes, buffer architectures, and QoS characteristics across networking hardware — switches, routers, and line cards.

Built with [Eleventy](https://www.11ty.dev/) and deployed via [Netlify](https://www.netlify.com/).

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [Local Development Setup](#local-development-setup)
4. [How to Add a New Platform](#how-to-add-a-new-platform)
   - [Step 1: Add a YAML entry to the data file](#step-1-add-a-yaml-entry-to-the-data-file)
   - [Step 2: Create a switch detail page](#step-2-create-a-switch-detail-page)
   - [Step 3: Create a concept page (optional)](#step-3-create-a-concept-page-optional)
   - [Step 4: Test locally](#step-4-test-locally)
   - [Step 5: Submit a pull request](#step-5-submit-a-pull-request)
5. [YAML Field Reference](#yaml-field-reference)
6. [PR Guidelines](#pr-guidelines)
7. [Build and Deploy](#build-and-deploy)

---

## Project Overview

The main table at `/` is driven entirely by `content/_data/switches.yaml`. Every row in the table is one YAML entry. Entries are grouped by the `section` field, and sections appear in the order they first appear in the YAML file.

Detail pages at `/switches/<slug>/` provide additional context for individual platforms. Concept pages at `/concepts/<slug>/` explain architectural topics (shared memory, VOQ, deep buffer, etc.) that apply to multiple platforms.

---

## Repository Structure

```
buffers-site/
├── .eleventy.js                  # Eleventy config: YAML extension, filters, paths
├── netlify.toml                  # Netlify build config
├── package.json
│
├── _includes/
│   ├── base.njk                  # HTML shell, site nav, header, footer
│   └── page.njk                  # Page layout wrapper (wraps content in .page-content)
│
├── assets/
│   └── css/
│       └── style.css             # Site styles
│
└── content/                      # Eleventy input directory
    ├── index.njk                 # Homepage: renders the main buffer table
    ├── summary.md                # /summary/ — buffer sizing overview
    │
    ├── _data/
    │   └── switches.yaml         # THE DATA FILE — one entry per platform/line card
    │
    ├── concepts/                 # Architectural concept pages
    │   ├── microburst.md
    │   ├── trident-plus.md
    │   ├── trident-ii.md
    │   ├── deep-buffer.md
    │   ├── nanog-thread.md
    │   ├── nokia-sr-platform.md  # Nokia FP4/FP5 architecture
    │   └── nokia-access-agg.md  # Nokia 7210/7250/7705/7730 comparison
    │
    └── switches/                 # Per-platform detail pages
        ├── arista-7050s.md
        ├── nokia-7750-sr.md
        ├── nokia-7210-sas.md
        └── ...                   # One file per platform with a detail page
```

---

## Local Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) 16 or later
- [Git](https://git-scm.com/)
- A GitHub account

### Steps

**1. Fork the repository**

Click **Fork** in the top-right corner of the GitHub repository page. This creates a copy under your own account.

**2. Clone your fork**

```bash
git clone https://github.com/YOUR-USERNAME/buffers-site.git
cd buffers-site
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm start
```

The site will be available at `http://localhost:8080`. Eleventy watches for file changes and rebuilds automatically.

**5. Create a branch for your changes**

```bash
git checkout -b add-platform-vendor-modelname
```

Use a descriptive branch name, e.g., `add-platform-cisco-nexus-9000` or `add-platform-juniper-qfx5200`.

---

## How to Add a New Platform

Adding a platform fully to the site involves up to three files:

| File | Required | Purpose |
|------|----------|---------|
| `content/_data/switches.yaml` | **Yes** | Adds the platform to the main table |
| `content/switches/<slug>.md` | Recommended | Detail page with notes and context |
| `content/concepts/<topic>.md` | Optional | Architecture overview (for a new silicon family or buffer technology) |

---

### Step 1: Add a YAML entry to the data file

Open `content/_data/switches.yaml` and add your entry. Entries are grouped by `section`. If your platform fits an existing section, add it within that section's block. If it represents a new architecture category, add a new section comment and entries at the end of the file.

**Format:**

```yaml
- model: "Vendor Model-Name"
  vendor: "Vendor"
  section: "Section Name"
  port_type: "48 SFP+ and 4 QSFP"
  rx_queue: "8Q"
  tx_queue: ""
  total_buffer: "9 MB"
  rx_buffer: ""
  tx_buffer: "5 MB"
  notes: "Any caveats or extra context"
  detail_page: "vendor-model-name"
```

See the [YAML Field Reference](#yaml-field-reference) below for descriptions of every field.

**Example — adding a new entry in an existing section:**

```yaml
# ─────────────────────────────────────────────
# Trident+ (BCM56840) – Shared Memory, 9 MB on-chip
# ─────────────────────────────────────────────

- model: "Acme 1000X"
  vendor: "Acme"
  section: "Trident+"
  port_type: "48 SFP+ and 4 QSFP"
  rx_queue: "8Q"
  tx_queue: ""
  total_buffer: "9 MB"
  rx_buffer: ""
  tx_buffer: "5 MB"
  notes: ""
  detail_page: "acme-1000x"
```

**Example — adding a new section for a new architecture:**

```yaml
# ─────────────────────────────────────────────
# Acme DeepQ ASIC – 256 MB on-chip shared buffer
# ─────────────────────────────────────────────

- model: "Acme 5000"
  vendor: "Acme"
  section: "Acme DeepQ"
  port_type: "32 QSFP28"
  rx_queue: "16Q"
  tx_queue: "16Q"
  total_buffer: "256 MB"
  rx_buffer: "shared"
  tx_buffer: "shared"
  notes: "First platform on Acme's DeepQ ASIC"
  detail_page: "acme-5000"
```

Sections appear in the table **in the order they first appear in the YAML file**. New sections at the end of the file will appear as new table sections at the bottom of the homepage.

---

### Step 2: Create a switch detail page

If you set a `detail_page` slug in your YAML entry, create a corresponding file at `content/switches/<slug>.md`. The slug in the YAML must exactly match the filename (without `.md`).

**File:** `content/switches/acme-5000.md`

```markdown
---
title: "Acme 5000"
layout: page.njk
description: "Buffer notes for the Acme 5000 (DeepQ ASIC)"
---

The Acme 5000 is built on the **Acme DeepQ** ASIC.

| Field | Value |
|-------|-------|
| Ports | 32 QSFP28 (100G) |
| RX Queues | 16Q |
| TX Queues | 16Q |
| Total Buffer | 256 MB |
| Buffer Model | Fully shared on-chip |

Brief description of buffer architecture, key behaviors, and any known quirks.

## See Also

- [Relevant concept page](/concepts/related-topic/) if applicable

[← Back to the main buffer table](/)
```

**Frontmatter fields:**

| Field | Required | Notes |
|-------|----------|-------|
| `title` | Yes | Shown as the `<h1>` and in the browser tab |
| `layout` | Yes | Always `page.njk` |
| `description` | Recommended | Used as the `<meta name="description">` tag |

---

### Step 3: Create a concept page (optional)

Concept pages explain a buffer architecture, ASIC family, or technology that applies across multiple platforms. If your platform introduces a new silicon family or a fundamentally different buffer model, a concept page is appropriate.

**File:** `content/concepts/acme-deepq.md`

```markdown
---
title: "Acme DeepQ ASIC Architecture"
layout: page.njk
description: "Overview of the Acme DeepQ shared buffer architecture"
---

Description of the architecture, how buffering works, key tradeoffs, and what use cases it targets.

## Platforms Using This Architecture

- [Acme 5000](/switches/acme-5000/)

## See Also

- [Back to the main buffer table](/)
```

Concept pages are not automatically linked in the site nav. Link to them from relevant switch detail pages and from other concept pages where appropriate.

> **Note:** To add a concept page to the top nav bar, edit `_includes/base.njk` and add an `<a>` tag to the `<nav class="site-nav">` block.

---

### Step 4: Test locally

With the dev server running (`npm start`), verify:

1. **Main table** (`http://localhost:8080/`) — your platform appears in the correct section with all columns populated correctly
2. **Detail page** (`http://localhost:8080/switches/your-slug/`) — page renders, table is readable, back-link works
3. **Concept page** (`http://localhost:8080/concepts/your-topic/`) — if created, page renders and links are correct
4. **No broken links** — all internal links (`/switches/...`, `/concepts/...`, `/`) resolve correctly

**Build check** (recommended before submitting a PR):

```bash
npm run build
```

A successful build produces output in `_site/`. Check for any errors or warnings in the build output.

---

### Step 5: Submit a pull request

**1. Stage and commit your changes**

```bash
git add content/_data/switches.yaml
git add content/switches/your-slug.md          # if created
git add content/concepts/your-topic.md         # if created
git commit -m "Add Acme 5000 (DeepQ ASIC) to buffer table"
```

Commit only the files you intentionally changed. Do not commit `_site/` (the build output) — it is generated automatically by Netlify.

**2. Push to your fork**

```bash
git push origin add-platform-vendor-modelname
```

**3. Open a pull request**

Go to the original repository on GitHub. GitHub will usually prompt you with a "Compare & pull request" banner after a push. Click it, or navigate to **Pull requests → New pull request** and select your fork and branch.

**PR title format:**

```
Add <Vendor> <Model> to buffer table
```

Examples:
- `Add Cisco Nexus 9300 to buffer table`
- `Add Nokia 7250 IXR to buffer table`
- `Add Juniper QFX5200 (Tomahawk) to buffer table`

**PR description — include:**

- **Platform name and vendor**
- **Silicon / ASIC** (if known)
- **Buffer size(s)** and model (shared, VOQ, fixed-segment, etc.)
- **Source** — where the data came from (datasheet, vendor docs, lab measurement, etc.)
- **Confidence level** — this site's data has always included estimates and extrapolations; note if values are uncertain
- **Files changed** — briefly list what you added

**Example PR description:**

```
## Platform
Cisco Nexus 9300 (Cloudscale ASIC)

## Buffer Data
- Total buffer: 40 MB on-chip shared
- Architecture: fully shared, unified ingress/egress
- Queues: 12 per port
- Source: Cisco Nexus 9000 Series NX-OS QoS Configuration Guide, Release 10.x

## Confidence
Buffer size is from official Cisco documentation. Queue details are from the same source.

## Files Changed
- `content/_data/switches.yaml` — added entry in new "Cloudscale" section
- `content/switches/cisco-nexus-9300.md` — new detail page
```

---

## YAML Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `model` | string | Yes | Full platform name as it appears in the table (e.g., `"Arista 7050S-64"`) |
| `vendor` | string | Yes | Manufacturer name (e.g., `"Arista"`, `"Nokia"`, `"Cisco"`) |
| `section` | string | Yes | Table group heading. Controls which section the row appears under and in what order sections appear. Must be identical across all entries in the same section. |
| `port_type` | string | Yes | Physical port configuration (e.g., `"48 SFP+ and 4 QSFP"`, `"32 QSFP28"`) |
| `rx_queue` | string | No | RX queue count or scheme (e.g., `"8Q"`, `"2q4t"`, `"128k ingress queues"`) |
| `tx_queue` | string | No | TX queue count or scheme. Leave blank if not documented or same as RX. |
| `total_buffer` | string | No | Total packet buffer. Include units. Use `"~"` for approximations (e.g., `"9 MB"`, `"~64 GB per line card"`) |
| `rx_buffer` | string | No | RX buffer if separately documented. Use `"shared"` if part of a unified pool. Leave blank if not documented. |
| `tx_buffer` | string | No | TX buffer, or maximum a single port can claim. Use `"VoQ"` for virtual output queue architectures. |
| `notes` | string | No | Caveats, extra context, architecture flags, or anything notable |
| `detail_page` | string | No | Slug for the detail page at `/switches/<slug>/`. Omit (leave blank) if no detail page exists. Must match the filename exactly (without `.md`). |

**Notes on values:**

- Use `""` (empty string) for unknown or undocumented fields — do not omit the field entirely
- Approximate values should be prefixed with `~` (e.g., `"~200–300 MB per adapter card"`)
- If a value is a best guess or unverified, note that in the `notes` field
- The site has always included estimates; be honest about uncertainty rather than omitting data

---

## PR Guidelines

- **One platform per PR** — keeps review focused. Multiple closely related entries (e.g., several line cards from the same ASIC family) in one PR is fine.
- **Source your data** — include where the numbers came from in the PR description. Datasheets, vendor docs, and lab measurements are all acceptable. Note when data is extrapolated or uncertain.
- **Do not commit build output** — the `_site/` directory is generated by Netlify; never commit it.
- **Do not modify the site nav** in `_includes/base.njk` unless the PR specifically discusses it — nav changes affect all pages and warrant separate review.
- **Keep notes concise** — the `notes` field in YAML is a single line; longer context belongs in a detail page.

---

## Build and Deploy

**Local build:**

```bash
npm run build
```

Output goes to `_site/`. This directory is gitignored.

**Deploy:**

The site deploys automatically via Netlify on every merge to `main`. No manual deploy step is needed. Netlify runs `npm run build` and serves the output.

The build command and publish directory are configured in `netlify.toml`.
