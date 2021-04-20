---
title: Ways to Contribute
description: Help to improve and develop Ocean core software.
---

## Report a bug

To report a bug that isn't a vulnerability, go to the relevant GitHub repository, click on the _Issues_ tab and select _Bug report_.

Before reporting a bug, search existing open and closed issues and PRs to see if something has already been reported. If not, then go ahead and create a new bug report, following the structure suggested in the issue template.

To report a vulnerability, you may do so in a [less public manner](/concepts/vulnerabilities/).

## Suggest a new feature

Use the _Issues_ section of each repository and select _Feature request_ to suggest and discuss any features you would like to see added.

As with bug reports, search existing open and closed issues and PRs to see if something has already been reported.

## Fix or improve core software

We'd love to have you contribute to any repository within the `oceanprotocol` GitHub organization!

Before you start coding right away, please follow those basic guidelines:

- If no issue for your case is present, open one first before starting to work on something, so it can be discussed.
- Make yourself familiar with eventual repository-specific contribution requirements and code style requirements.
- Because of the weird world of intellectual property, we need you to follow the [legal requirements](/concepts/legal-reqs/) for contributing code.
- Be excellent to each other, as outlined in our [Contributor Code of Conduct](/concepts/code-of-conduct/).

### Workflow

A typical code contribution in any Ocean Protocol repository would go as follows:

1. As an external developer, fork the respective repo and push to your own fork. Ocean core developers push directly on the repo under `oceanprotocol` org.
2. You should create a new branch for your changes. The naming convention for branches is: `issue-001-short-feature-description`. The issue number `issue-001` needs to reference the GitHub issue that you are trying to fix. The short feature description helps to quickly distinguish your branch among the other branches in play.
3. To get visibility and Continuous Integration feedback as early as possible, open your Pull Request as a `Draft`.
4. Give it a meaningful title, and at least link to the respective issue in the Pull Request description, like `Fixes #23`. Describe your changes, mention things for reviewers to look out for, and for UI changes screenshots and videos are helpful.
5. Once your Pull Request is ready, mark it as `Ready for Review`, in most repositories code owners are automatically notified and asked for review.
6. Get all CI checks green and address eventual change requests.
7. If your PR stays open for longer and merge conflicts are detected, merge or rebase your branch against the current `main` branch.
8. Once a Pull Request is approved, you can merge it.

Depending on the release management of each repository, your contribution will be either included in a next release, or is put live automatically.

Except for GitHub, you can find most Ocean Protocol core developers in [Discord](https://discord.gg/TnXjkR5) if you have further development questions.

## Develop an app or integration on top of Ocean Protocol

Create an app with one of Ocean Protocol's interface points:

<repo name="react"></repo>
<repo name="ocean.js"></repo>
<repo name="ocean.py"></repo>
<repo name="contracts"></repo>

Ocean documentation will help. And... you're here:)

## Improve these docs

These docs can always be improved. Every content page has an edit link at its end linking you to the content source on GitHub for simple copy editing.

If you found a technical bug or have an improvement suggestion, head over to the repo's _Issues_ section:

<repo name="docs"></repo>

## Apply for a developer job

Really love building on Ocean and want to dive deeper? Consider joining us full time. Our openings are listed at https://github.com/oceanprotocol/devjobs.

## Other ways to get involved

Please go to the [Ocean Community Page](https://www.oceanprotocol.com/community) for more ideas on how to get involved.
