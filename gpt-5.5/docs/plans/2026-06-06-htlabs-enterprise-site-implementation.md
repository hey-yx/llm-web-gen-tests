# HTLabs Enterprise Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a no-dependency static preview project with three complete corporate website visual directions for 上海宏途数创科技有限公司.

**Architecture:** The site is a set of standalone HTML files with embedded CSS. `index.html` acts as a visual selector, while `dark.html`, `light.html`, and `oriental.html` each render a complete one-page enterprise site with the same content model and different design language.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript only for no runtime dependency.

---

### Task 1: Static Verification

**Files:**
- Create: `tests/check-static-site.js`

**Step 1: Write the failing test**

Create a Node.js script that checks for `index.html`, `dark.html`, `light.html`, `oriental.html`, `README.md`, and both plan documents. It should also verify that each HTML file includes the company name and expected style keywords.

**Step 2: Run test to verify it fails**

Run: `node tests/check-static-site.js`

Expected: FAIL with missing `index.html` before implementation.

**Step 3: Write minimal implementation**

Create all required static files and include the required page copy.

**Step 4: Run test to verify it passes**

Run: `node tests/check-static-site.js`

Expected: PASS with `Static site files verified.`

### Task 2: Preview Entry

**Files:**
- Create: `index.html`

Build a polished selector page with three large option panels linking to the three variants. Keep copy concise and make the differences obvious.

### Task 3: Three Variants

**Files:**
- Create: `dark.html`
- Create: `light.html`
- Create: `oriental.html`

Create three standalone one-page corporate sites with shared sections and distinct aesthetics.

### Task 4: Documentation

**Files:**
- Create: `README.md`
- Create: `docs/plans/2026-06-06-htlabs-enterprise-site-design.md`
- Create: `docs/plans/2026-06-06-htlabs-enterprise-site-implementation.md`

Document purpose, pages, local usage, and verification.
