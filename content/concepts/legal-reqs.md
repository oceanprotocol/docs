---
title: Legal Requirements when Contributing Code
description: If you want to contribute code to Ocean Protocol, then you must read and understand this page.
---

## Ocean Protocol Software Licensing

All Ocean Protocol code (software) is licensed under open source licenses (usually Apache 2.0). This page describes the Ocean Protocol policy to ensure that all contributions to the Ocean Protocol code are also licensed under the appropriate open source license (and that the contributor has the right to license it as such).

If you are:

- contributing code to complete an [Ocean Protocol bounty](/concepts/bounties/) or
- an employee of BigchainDB GmbH or
- an employee of DEX Pte Ltd

then there is nothing extra for you to do: licensing is already handled.

Otherwise, you must do the following:

- At the top of every file you've modified, add license comment lines similar to the following, unless lines like these are already present:

```text
# Copyright Ocean Protocol contributors
# SPDX-License-Identifier: Apache-2.0
```

You can determine the license by looking in the file named `LICENSE` in the root of that file's repository.
The comment lines will begin with different symbols depending on the file type. For example, Python comment lines begin with a `#`.

- Read and understand the [Developer Certificate of Origin](https://developercertificate.org/).
- Put a copy of the Developer Certificate of Origin (text file) in the root of the repository where you are contributing, if one isn't already there.
- Include a Signed-off-by line at the end of all your Git commit messages, like:

```text
Signed-off-by: Joe T Pots <joe.pots@example.org>
```

You must use your real name and email address.

> Tip: You can include a Signed-off-by line automatically by using `git commit --signoff` or `git commit -s`.

## The Future

In the future, the Ocean Protocol Foundation will dissolve and the policy will probably change to work more like the Linux Kernel, where _every_ contributor must include a Signed-off-by line in all Git commits. If you're curious, see the Linux Kernel document "[Submitting patches: the essential guide to getting your code into the kernel](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/process/submitting-patches.rst)" especially the section titled "Sign your work - the Developer's Certificate of Origin."
