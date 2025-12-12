# MEXC SDK Fork - Security Fix Guide

## Overview

This guide documents how to fix the `form-data` vulnerability (CVE-2025-7783) in the forked `mexc-api-sdk` repository.

## Background

### The Vulnerability
- **Package**: `form-data` < 2.5.4
- **Severity**: Critical (CVSS 10)
- **CVE**: CVE-2025-7783
- **Issue**: `form-data` uses `Math.random()` to select boundary values for multipart form-encoded data, which is predictable and can be exploited.

### Why Standard Fixes Don't Work
The `mexc-api-sdk` package has `sync-request` listed in `bundledDependencies`, which means the vulnerable `form-data@2.5.1` is shipped inside the npm package tarball. npm overrides cannot fix bundled dependencies.

## Your Fork

- **Fork URL**: https://github.com/Mizan-X/mexc-api-sdk
- **Original**: https://github.com/mxcdevelop/mexc-api-sdk

---

## Step-by-Step Fix Instructions

### Step 1: Clone Your Fork

```bash
cd ~/Desktop/xtend
git clone https://github.com/Mizan-X/mexc-api-sdk.git
cd mexc-api-sdk
```

### Step 2: Update form-data in package.json

Open `package.json` and find the dependencies section. Update `form-data` to a safe version:

```json
{
  "dependencies": {
    "form-data": "^4.0.0"
  }
}
```

If `form-data` is not a direct dependency but comes through `sync-request`, you need to add an override. Add this to `package.json`:

```json
{
  "overrides": {
    "form-data": ">=2.5.4"
  }
}
```

### Step 3: Remove bundledDependencies (Important!)

In `package.json`, find and **remove** the `bundledDependencies` section:

```json
// REMOVE THIS ENTIRE SECTION:
"bundledDependencies": [
  "sync-request",
  "@types/node"
],
```

This allows npm to resolve dependencies normally instead of using the bundled vulnerable versions.

### Step 4: Regenerate Lock File

```bash
rm -rf node_modules package-lock.json
npm install
```

### Step 5: Verify the Fix

```bash
npm audit
# Should show form-data vulnerability is fixed
```

### Step 6: Update Version

In `package.json`, update the version to indicate it's a patched fork:

```json
{
  "name": "@mizan-x/mexc-api-sdk",
  "version": "1.0.4-security.1"
}
```

### Step 7: Commit and Push

```bash
git add .
git commit -m "fix: update form-data to fix CVE-2025-7783 vulnerability

- Remove bundledDependencies to allow proper dependency resolution
- Add override for form-data >= 2.5.4
- Fixes critical security vulnerability in form-data < 2.5.4"

git push origin main
```

### Step 8: Create a Release/Tag (Optional but Recommended)

```bash
git tag v1.0.4-security.1
git push origin v1.0.4-security.1
```

---

## Using the Fork in mizanX-scripts

### Option A: Install from GitHub (Recommended)

In your main project's `package.json`, replace:

```json
"mexc-api-sdk": "1.0.3"
```

With:

```json
"mexc-api-sdk": "github:Mizan-X/mexc-api-sdk"
```

Or with a specific tag:

```json
"mexc-api-sdk": "github:Mizan-X/mexc-api-sdk#v1.0.4-security.1"
```

### Option B: Publish to npm under your scope

1. Login to npm: `npm login`
2. Publish: `npm publish --access public`
3. Use in project: `"@mizan-x/mexc-api-sdk": "^1.0.4-security.1"`

Then update the import in `shared/src/exchanges/plugins/sdks/mexcSdk.ts`:

```typescript
// Change from:
import * as Mexc from 'mexc-api-sdk';

// To (if using scoped package):
import * as Mexc from '@mizan-x/mexc-api-sdk';
```

---

## After Fixing the Fork

Once you've fixed and pushed the fork, come back to `mizanX-scripts` and run:

```bash
cd /Users/mustafafahmy/Desktop/xtend/mizanX-scripts_main

# Update package.json to use the fork (see Option A above)
# Then reinstall:
rm -rf node_modules package-lock.json
npm install

# Verify the vulnerability is fixed:
npm audit
```

---

## Files to Modify in the Fork

| File | Change |
|------|--------|
| `package.json` | Remove `bundledDependencies`, add `overrides` for form-data, update version |
| `package-lock.json` | Regenerate with `npm install` |

---

## Expected Outcome

After completing these steps:
1. The `form-data` vulnerability (CVE-2025-7783) should be resolved
2. Your Dependabot alert #19 can be closed
3. `npm audit` should no longer report the form-data critical vulnerability

---

## Questions?

If you encounter issues:
1. Check that `bundledDependencies` is completely removed
2. Verify `form-data` version with: `npm ls form-data`
3. Make sure you're using the fork URL correctly in your main project
