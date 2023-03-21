# Data Farming FAQ

_Q: I staked for just one day. What rewards might I expect?_

At least 50 snapshots are randomly taken throughout the week. If you’ve staked just one day, and all else being equal, you should expect 1/7 the rewards compared to the full 7 days.

_Q: The datatoken price may change throughout the week. What price is taken in the DCV calculation?_

The price is taken at the same time as each consume. E.g. if a data asset has three consumes, where price was 1 OCEAN when the first consume happened, and the price was 10 OCEAN when the other consumes happened, then the total DCV for the asset is 1 + 10 + 10 = 21.

_Q: Can the reward function change during a given week?

No. At the beginning of a new DF round (DF1, DF2, etc), rules are laid out, either implicitly if no change from previous round, or explicitly in a blog post if there are new rules. This is: reward function, bounds, etc. Then teams stake, buy data, consume, etc. And LPs are given DF rewards based on staking, DCV, etc at the end of the week. Overall cycle time is one week.

Caveat: it’s no at least in theory! Sometimes there may be tweaks if there is community consensus, or a bug.

