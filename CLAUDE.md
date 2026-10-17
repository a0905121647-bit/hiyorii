# CLAUDE.md — Development collaboration

Read [AGENTS.md](AGENTS.md) before making changes. This repository participates in a proposed Claude Code + OpenAI Codex collaboration workflow.

- First inspect the repo, current branch, existing PRs, actual deployment mapping and tests. Never assume `main` is live or safe to deploy.
- Make changes only on a dedicated feature branch and create a PR; do not push directly to protected/production branches.
- Include a concise description, changed files, tests run (or explicitly not run), risks, data migration requirements and rollback steps.
- Ask Codex for independent review via PR. Address findings on the same PR, request re-review, and wait for the owner's explicit merge/deployment approval.
- Never access, export, change, reset or seed live customer/employee/payroll/order data, secrets or credentials without specific authorization.
- Do not merge PRs, modify Railway/Manus/other hosting configurations, accept staged changes, enable automatic production deployment, or perform database migrations without explicit owner approval.
- For this project: Hiyori Japanese pet brand website: preserve prelaunch status, product claim accuracy, accessible navigation and responsive UI. Deployment status must be verified in the hosting dashboard before any release; the repository README says Railway deployment is unverified. Do not assume this repository is currently deployed. No checkout or payments are currently authorized.
