# Operational Guidelines

### Table of Contents

* [Overview](./#overview)
  * [Operational Model](./#operational-model)
* [User Directory Management](user-directory-management/)
  * [User Enrollment in Authentik](user-directory-management/user-enrolment-in-authentik/)
    * [Create Invitation](user-directory-management/user-enrolment-in-authentik/create-an-invitation/)
  * [User Group Management](user-directory-management/user-group-management/)
    * [Create Admin User Group](user-directory-management/user-group-management/create-admin-user-group.md)
    * [Modify User Group](user-directory-management/user-group-management/assign-user-to-group.md)
    * [Delete User Group](user-directory-management/user-group-management/delete-user-group.md)
  * [Modify User Claim Values](user-directory-management/modify-user-claim-values.md)
  * [Updating User Password](user-directory-management/updating-user-password.md)
  * [User Deactivation](user-directory-management/user-deactivation.md)
  * [User Removal](user-directory-management/user-removal.md)

***

This section depicts operational procedures for user directory administration and federated authentication in the Ocean Enterprise User Management deployment.

The supplied Authentik configuration uses:

* Data Space Operator Authentik as the central identity provider and identity broker;
* Data Space Participant Authentik as the Participant identity provider;
* invitation-based local user enrollment;
* a custom recovery flow for password updates;
* OE-specific user attributes and OAuth scope mappings;
* OIDC federation between Participant and Operator Authentik instances;
* JIT creation of a local shadow user on the Data Space Operator for federated identities.

The repository provisions the required Authentik flows, stages, mappings and providers. Routine lifecycle operations such as creating groups, changing group membership, deactivating a user or deleting a user are performed through the Authentik administration interface and are not automated by repository scripts.
