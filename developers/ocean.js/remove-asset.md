# Asset Visibility

In the Ocean Protocol ecosystem, each asset is associated with a state that is maintained by the NFT (Non-Fungible Token) contract. The [state of an asset](../ddo-specification.md#state) determines its visibility and availability for different actions on platforms like Ocean Market, as well as its appearance in user profiles. The following table outlines the possible states and their characteristics:

| State | Description                      | Discoverable in Ocean Market | Ordering Allowed | Listed Under Profile |
| ----- | -------------------------------- | ---------------------------- | ---------------- | -------------------- |
| `0`   | Active                           | Yes                          | Yes              | Yes                  |
| `1`   | End-of-life                      | No                           | No               | No                   |
| `2`   | Deprecated (by another asset)    | No                           | No               | No                   |
| `3`   | Revoked by publisher             | No                           | No               | No                   |
| `4`   | Ordering is temporarily disabled | Yes                          | No               | Yes                  |
| `5`   | Asset unlisted                   | No                           | Yes              | Yes                  |

Now let's explain each state in more detail:

1. **Active**: Assets in the "Active" state are fully functional and available for discovery in Ocean Market, and other components. Users can search for, view, and interact with these assets. Ordering is allowed, which means users can place orders to purchase or access the asset's services.
2. **End-of-life**: Assets in the "End-of-life" state are no longer discoverable. They are typically deprecated or outdated and are no longer actively promoted or maintained. Users cannot place orders or interact with these assets, and they are not listed under the owner's profile.
3. **Deprecated (by another asset)**: This state indicates that another asset has deprecated the current asset. Deprecated assets are not discoverable, and ordering is not allowed. Similar to the "End-of-life" state, deprecated assets are not listed under the owner's profile.
4. **Revoked by publisher**: When an asset is revoked by its publisher, it means that the publisher has explicitly revoked access or ownership rights to the asset. Revoked assets are not discoverable, and ordering is not allowed.
5. **Ordering is temporarily disabled**: Assets in this state are still discoverable, but ordering functionality is temporarily disabled. Users can view the asset and gather information, but they cannot place orders at that moment. However, these assets are still listed under the owner's profile.
6. **Asset unlisted**: Assets in the "Asset unlisted" state are not discoverable. However, users can still place orders for these assets, making them accessible. Unlisted assets are listed under the owner's profile, allowing users to view and access them.

By assigning specific states to assets, Ocean Protocol enables a structured approach to asset management and visibility. These states help regulate asset discoverability, ordering permissions, and the representation of assets in user profiles, ensuring a controlled and reliable asset ecosystem.
