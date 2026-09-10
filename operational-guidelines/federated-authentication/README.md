# Federated Authentication

### Table of Contents

* [Overview](./#overview)
* [Onboarding Data Space Participant in Data Space Operator Authentik](onboarding-data-space-participant-in-data-space-operator-authentik.md)

### Overview

This section depicts the operational procedures for Federated Authentication between a Data Space Participant Authentik instance (Federated Identity Provider) and the Data Space Operator Authentik instance (Central Identity Provider).

The supplied federation model uses:

* Data Space Participant Authentik as the external Identity Provider;
* Data Space Operator Authentik as the central identity broker;
* OIDC discovery between Authentik instances;
* a central OAuth Source in the Operator;
* JIT enrollment based on invitations for the Operator shadow user;
* source-property mappings for OE attributes.
