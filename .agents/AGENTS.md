# Project Rules & Workflow Instructions

## 1. Proposal First & Explicit Approval Before Code Edits
- When answering questions, explaining solutions, or proposing fixes:
  - **Step 1:** Explain the proposed resolution and plan.
  - **Step 2:** DO NOT modify any code until receiving explicit user confirmation/approval.
  - **Step 3 (Post-Approval):** After making edits, explicitly show the code changes (using diff format or clear code snippets with added/deleted lines).
  - **Step 4:** Explain what was done and provide clear instructions on how to test, validate, and verify the changes locally.

## 2. Iterative Execution for Multi-Step Tasks
- Any large or multi-step feature implementation must be divided into small, sequential steps.
- For each step:
  1. Explain what will be done in the step.
  2. Wait for user confirmation.
  3. Execute the step.
  4. Present code diffs, explanation, and local testing instructions.
  5. Stop and wait for confirmation before moving to the next step.

## 3. Git Branching & Pull Request (PR) Workflow
- **NEVER PUSH DIRECTLY**: Never execute a `git push` directly to `main` or any remote branch.
- **Branch Strategy**: Work must be performed on dedicated topic/feature branches.
- **PR Approval & Template**:
  - Before creating a PR, deliver a draft PR template for user review containing:
    - **Title**
    - **Assignee**: `yaywiin`
    - **Description**
  - Wait for explicit user confirmation before creating/opening the PR.
- **PR Merging**: All PRs will be merged manually by `yaywiin` unless explicitly instructed otherwise.
