---
title: "Contributing"
layout: page.njk
description: "How to contribute new platforms, detail pages, and concept pages to the Packet Buffer Reference site."
---

Contributions are welcome and encouraged. This site is maintained by the community and grows by people adding platforms they work with or have data for.

> [!TIP]
> **Easiest way to add a switch:** Use our [guided GitHub Issue Form](https://github.com/buraglio/port-buffers/issues/new?template=new_switch_addition.yml&title=%5BNew+Switch%5D%3A+) to submit the details directly from your browser! You just fill in the blanks, and we'll format the YAML for you.

---

## What You Can Contribute

| Contribution | Description |
|---|---|
| New platform entry | Add a row to the main buffer table via `switches.yaml` |
| Switch detail page | A dedicated page with notes, specs, and context for a platform |
| Concept page | An architecture overview covering a silicon family or buffer technology |
| Corrections | Fix incorrect data — include your source in the PR |

---

## Local Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) 16 or later
- [Git](https://git-scm.com/)
- A GitHub account

### Steps

**1. Fork the repository**

Click **Fork** in the top-right corner of the [GitHub repository page](https://github.com/buraglio/port-buffers). 

**2. Clone your fork**

```bash
git clone https://github.com/YOUR-USERNAME/buffers-site.git
cd buffers-site
```
To run the site locally and verify that changes are working: 

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm start
```

The site will be available at `http://localhost:8080`. the Eleventy framework watches for file changes and rebuilds automatically.

**5. Create a branch for your changes**

```bash
git checkout -b add-platform-vendor-modelname
```

Use a descriptive branch name, e.g., `add-platform-cisco-nexus-9000` or `add-platform-juniper-qfx5200`.

---

## How to Add a New Platform

Adding a platform fully to the site involves up to three files:

| File | Required | Purpose |
|---|---|---|
| `content/_data/switches.yaml` | **Yes** | Adds the platform to the main table |
| `content/switches/<slug>.md` | Recommended | Detail page with notes and context |
| `content/concepts/<topic>.md` | Optional | Architecture overview for a new ASIC family or buffer technology |

---

### Step 1: Add a YAML entry

Open `content/_data/switches.yaml` and add your entry. Place it within the appropriate `section` block. If your platform belongs to a new architecture category, add a new section comment and entries at the end of the file.

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

Sections appear in the table **in the order they first appear in the YAML file**. New sections added at the end will appear at the bottom of the homepage table.

See the [YAML Field Reference](#yaml-field-reference) below for descriptions of every field.

---

### Step 2: Create a switch detail page

If you set a `detail_page` slug in your YAML entry, create a corresponding file at `content/switches/<slug>.md`. The slug must exactly match the filename (without `.md`).

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
|---|---|---|
| `title` | Yes | Shown as the `<h1>` and in the browser tab |
| `layout` | Yes | Always `page.njk` |
| `description` | Recommended | Used as the `<meta name="description">` tag |

---

### Step 3: Create a concept page (optional)

Concept pages explain a buffer architecture, ASIC family, or technology that applies across multiple platforms. Create one if your platform introduces a new silicon family or a fundamentally different buffer model.

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

Concept pages are not automatically added to the site nav. Link to them from relevant switch detail pages and from other concept pages where appropriate.

> **Note:** To add a concept page to the top nav bar, edit `_includes/base.njk` and add an `<a>` tag to the `<nav class="site-nav">` block.

---

### Step 4: Test locally

With the dev server running (`npm start`), verify:

1. **Main table** (`http://localhost:8080/`) — your platform appears in the correct section with all columns populated
2. **Detail page** (`http://localhost:8080/switches/your-slug/`) — page renders, table is readable, back-link works
3. **Concept page** (`http://localhost:8080/concepts/your-topic/`) — if created, page renders and all links resolve
4. **No broken links** — all internal links resolve correctly

**Build check (recommended before submitting a PR):**

```bash
npm run build
```

A successful build produces output in `_site/` with no errors.

---

### Step 5: Submit a pull request

**1. Stage and commit your changes**

```bash
git add content/_data/switches.yaml
git add content/switches/your-slug.md          # if created
git add content/concepts/your-topic.md         # if created
git commit -m "Add Acme 5000 (DeepQ ASIC) to buffer table"
```

Do not commit `_site/` — it is generated automatically by Netlify on deploy.

**2. Push to your fork**

```bash
git push origin add-platform-vendor-modelname
```

**3. Open a pull request**

Go to the original repository on GitHub. Click the **Compare & pull request** banner, or navigate to **Pull requests → New pull request**.

**PR title format:**

```
Add <Vendor> <Model> to buffer table
```

Examples:
- `Add Cisco Nexus 9300 to buffer table`
- `Add Nokia 7250 IXR to buffer table`
- `Add Juniper QFX5200 (Tomahawk) to buffer table`

**Include in your PR description:**

- Platform name and vendor
- Silicon / ASIC (if known)
- Buffer size(s) and model (shared, VOQ, fixed-segment, etc.)
- Source — datasheet, vendor docs, lab measurement, etc.
- Confidence level — note if values are estimates or unverified
- Files changed

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

| Field | Required | Description |
|---|---|---|
| `model` | Yes | Full platform name as it appears in the table (e.g., `"Arista 7050S-64"`) |
| `vendor` | Yes | Manufacturer name (e.g., `"Arista"`, `"Nokia"`, `"Cisco"`) |
| `section` | Yes | Table group heading. Must be identical across all entries in the same section. Controls row grouping and section order. |
| `port_type` | Yes | Physical port configuration (e.g., `"48 SFP+ and 4 QSFP"`, `"32 QSFP28"`) |
| `rx_queue` | No | RX queue count or scheme (e.g., `"8Q"`, `"2q4t"`) |
| `tx_queue` | No | TX queue count or scheme. Leave blank if not documented or same as RX. |
| `total_buffer` | No | Total packet buffer. Include units. Use `~` for approximations (e.g., `"9 MB"`, `"~64 GB per line card"`) |
| `rx_buffer` | No | RX buffer if separately documented. Use `"shared"` if part of a unified pool. |
| `tx_buffer` | No | TX buffer or max a single port can claim. Use `"VoQ"` for virtual output queue architectures. |
| `notes` | No | Caveats, extra context, architecture flags, or anything notable. Keep to a single line. |
| `detail_page` | No | Slug for the detail page at `/switches/<slug>/`. Must match the filename exactly (without `.md`). |

**Notes on values:**

- Use `""` for unknown or undocumented fields — do not omit the field entirely
- Approximate values should be prefixed with `~`
- If a value is a best guess or unverified, note that in the `notes` field
- The site has always included estimates — honesty about uncertainty is preferred over omitting data

---

## PR Guidelines

- **One platform per PR** — keeps review focused. Multiple closely related entries (e.g., several line cards from the same ASIC family) in one PR is fine.
- **Source your data** — include where the numbers came from. Datasheets, vendor docs, and lab measurements are all acceptable. Note when data is extrapolated or uncertain.
- **Do not commit `_site/`** — the build output directory is generated by Netlify; never commit it.
- **Do not modify the site nav** in `_includes/base.njk` unless the PR specifically discusses it — nav changes affect all pages and warrant separate review.
- **Keep notes concise** — the `notes` field in YAML is a single line; longer context belongs in a detail page.

---

[← Back to the main buffer table](/)
