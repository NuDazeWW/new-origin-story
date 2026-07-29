## Overview

Renaming a Lovable project and connecting GitHub two-way sync are both done from the Lovable editor UI — they can't be triggered from chat tools. Below are the exact steps to run, followed by a verification checklist.

Note: this works with your current project (renamed to **DIS ORIGIN**). Lovable doesn't support creating a brand-new project from inside a chat; new projects are created from the dashboard.

## Step 1 — Rename the project to "DIS ORIGIN"

Desktop:
1. Click the project name/logo in the top-left of the editor.
2. Choose **Rename project**.
3. Enter `DIS ORIGIN` and confirm.

Mobile: tap the project name → **Rename project** → enter `DIS ORIGIN`.

## Step 2 — Connect GitHub (private repo named "DIS ORIGIN")

Desktop:
1. In the chat input, click the **Plus (+)** menu (bottom left).
2. Select **GitHub → Connect project**.
3. Authorize the **Lovable GitHub App** if prompted.
4. Select the GitHub account/organization that should own the repo.
5. Set repository name to `DIS-ORIGIN` (GitHub replaces the space with a hyphen).
6. Set visibility to **Private**.
7. Click **Create Repository**.

Mobile: Chat mode → Plus (+) → **GitHub → Connect project** → same flow.

After creation, Lovable pushes the current codebase and enables two-way sync (Lovable ↔ GitHub in real time).

## Step 3 — Verification checklist

Run through these once the flow above completes:

- [ ] Editor top-left shows the project name **DIS ORIGIN**.
- [ ] Plus (+) → GitHub now shows **Manage project** (not Connect project), with the repo name `DIS-ORIGIN`.
- [ ] Opening the repo on GitHub shows it as **Private** (lock icon next to repo name).
- [ ] The latest commit on GitHub matches the latest change in Lovable (message and timestamp align).
- [ ] Repo contents include `package.json`, `src/`, `vite.config.ts`, and `README.md`.
- [ ] Make a trivial edit in Lovable (e.g., tweak a string) → within seconds a new commit appears on GitHub `main`.
- [ ] Make a trivial edit on GitHub (edit a file in the web UI, commit to `main`) → Lovable preview reflects it after a moment.

## Notes

- Only one GitHub account can be connected to a Lovable account at a time.
- Importing an existing GitHub repo into Lovable is not supported; this flow creates a fresh repo from the current project.
- Head metadata still says "Lovable App" / "Lovable Generated Project" in `src/routes/__root.tsx`. Not required for rename/sync, but happy to update it in a follow-up so the published site's title/description reflect DIS ORIGIN.
