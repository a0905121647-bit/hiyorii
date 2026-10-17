# Shared AI collaboration rules — GPT lead, Claude review, dot operations

## Responsibility and workflow
- **GPT / OpenAI Codex is the primary developer.** Analyze requirements, implement code, run appropriate tests, and open a Draft Pull Request from a feature branch. ChatGPT can coordinate through its available GitHub connector. Do not claim that every Codex session or external agent has been automatically started.
- **Claude Code is the independent reviewer and second opinion.** Review security, business logic, data integrity, performance, regression risk and test coverage. Claude must not be the default implementer; when changes are requested after review, GPT/Codex remains responsible for implementation. Claude access and review automation must be separately verified; this file alone does not install a Claude GitHub reviewer.
- **dot is the operations and daily reconciliation agent.** dot's role is to track LINE receipt intake, daily store reconciliation progress, missing source documents, exceptions and owner follow-ups, only through separately authorized tools. Do not assume dot can read this repository, financial spreadsheets or receipt connector because this policy exists.
- GPT/Codex PR review may be invoked with `@codex review` where enabled, but that is not a substitute for independent Claude review. Mark review requests, acknowledgments and completed findings separately.
- Owner has final approval for merge, production deployment, schema migrations, irreversible data writes, payroll, financial posting and external messages.
- Never push directly to main, auto-merge, release or deploy without separate explicit owner approval.
- Report actual statuses: source connected, branch created, PR open, GPT implementation tested, Codex self-check, Claude independently reviewed, owner approved, merged and deployed are distinct.

## Safety and data rules
- No production deployments, migrations, destructive operations, credential changes, real LINE messages, salary writes or automatic merges without separate approval.
- Never commit tokens, secrets, employee/customer data, real LINE receipt images, payroll files or confidential financial exports. Use host-managed secrets.
- Read existing code and tests before changes. Prefer small PRs and synthetic fixtures; confirm actual GitHub-to-deployment mapping.
- Preserve the original LINE ordering workflow. Treat missing source fields as unknown, not zero. Do not invent prices, reconcile unconfirmed OCR, or mark incomplete daily sheets as finalized.
- Each PR must document scope, risks, test evidence, rollback, unverified assumptions and any need for migration or user action.

## Project-specific constraints
Hiyori Japanese prelaunch site: preserve product-claim accuracy, avoid enabling payments, and verify deployment mapping.
## Acceptance
1. Verify source repository, live environment and domain independently.
2. GPT/Codex implements and tests; Claude independently reviews when its authorized integration is available; record whether review actually happened.
3. Owner explicitly approves merging and production deployment.
