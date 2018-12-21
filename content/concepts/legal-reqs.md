---
title: Legal Requirements when Contributing Code
description: If you want to contribute code to Ocean Protocol, then you must read and understand this page.
---

## Ocean Protocol Software Licensing

All Ocean Protocol code (software) is licensed under open source licenses (usually Apache 2.0). This page describes our policy to ensure that all contributions to the Ocean Protocol code are also licensed under the appropriate open source license (and that the contributor has the right to license it as such).

There are three different cases:

1. If you're an employee of BigchainDB GmbH or DEX Pte Ltd then the copyright in your code contribution belongs to your employer. BigchainDB and DEX, in turn, are contributing to Ocean Protocol under contract with the Ocean Protocol Foundation Ltd, and all the code they contribute to Ocean Protocol is licensed under appropriate open source licenses. There's nothing extra for you to do.
1. If you're contributing code to complete a [bounty](/concepts/bounties/), then you agreed to terms and conditions such that your contributed code can be licensed under appropriate open source licenses. There's nothing extra for you to do.
1. Otherwise, you must do the following:
   - At the top of every file you've modified, add license comment lines similar to the following, unless lines like these are already present:

   ```text
   # Copyright Ocean Protocol contributors
   # SPDX-License-Identifier: Apache-2.0
   ```

   You can determine the license by looking in the file named `LICENSE` in the root of that file's repository.
   The comment lines will begin with different symbols depending on the file type. For example, Python comment lines begin with a `#`.
   - Read and understand the [Developer Certificate of Origin](https://developercertificate.org/).
   - Include a Signed-off-by line at the end of all your Git commit messages, like:

   ```text
   Signed-off-by: Joe T Pots <joe.pots@example.org>
   ```

   You must include your real name and a real email address. Fake people can't hold or license copyrights.

> Tip: You can include a Signed-off-by line automatically by using `git commit --signoff` or `git commit -s`.

## The Future

In the future, the Ocean Protocol Foundation will dissolve and the policy will probably change to work more like the Linux Kernel, where _every_ contributor must include a Signed-off-by line in all Git commits. If you're curious, see the Linux Kernel document "[Submitting patches: the essential guide to getting your code into the kernel](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/process/submitting-patches.rst)" especially the section titled "Sign your work - the Developer's Certificate of Origin."
