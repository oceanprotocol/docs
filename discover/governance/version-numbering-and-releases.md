---
description: >-
  This page includes the standardised versioning system and release process used
  by OEC to ensure updates to the code base don't unexpectedly break existing
  workflows.
---

# Version Numbering & Releases

## 1. Version Numbering Strategy

#### Semantic Versioning

Versions of OE software are named and numbered according to MAJOR.MINOR.PATCH format (e.g., 2.3.1):

* MAJOR: Breaking changes, incompatible API modifications
* MINOR: New features, backward-compatible additions
* PATCH: Bug fixes, security patches

## 2. Release Cadence&#x20;

#### Feature-Based Releases

* A new release will occur when specific features are complete, typically about every 6 months

## 3. Release Preparation Process

#### Phase 1: Planning&#x20;

* Typically 3-4 months prioir to release
* Roadmap review: Maintainer meeting to finalize features for release
* Issue triage: Label and milestone assignment
* Communication: Announce upcoming release and feature freeze date
* Documentation planning: Identify docs needing updates

#### Phase 2: Development Window

* Active development: Contributors work on milestoned features
* Regular check-ins: Progress updates in public channels, typically weekly
* Pull request reviews: Prioritize release-targeted PRs
* Testing infrastructure: Ensure Continuous Iteration (CI) / Continuous Delivery (CD) pipelines are healthy

#### Phase 3: Feature Freeze

* typically 1 month before scheduled release
* Code freeze: No new features, only bug fixes
* Beta release: Deploy beta version for community testing
* Bug bash: Organized testing period with contributor participation
* Translation updates: Coordinate with localization teams
* Documentation completion: Finalize release notes, changelog, upgrade guides

#### Phase 4: Release Candidate

* Release Candidate deployment: Publish release candidate (RC)
* Final testing: Regression testing, security audit
* Sign-off process: Maintainer approval required
* Announcement draft: Prepare blog posts, social media content

#### Phase 5: Release Day

* Tag creation: Create git tag with version number
* Build artifacts: Generate and sign release binaries/packages
* Distribution: Upload to package managers, registries, download sites
* Announcement: Publish release notes, blog post, social media
* Support preparation: Ensure maintainers are available for issues

#### Phase 6: Post-Release Activities

* Monitor issue tracker for critical bugs
* Prepare hotfix releases if needed
* Gather community feedback
* Update documentation based on user questions
* Retrospective meeting with contributors
* Document lessons learned
* Update release process based on feedback
* Begin planning next release cycle
