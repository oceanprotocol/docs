# Dataspace Topologies

## Introduction

The structural topology of an Ocean Enterprise-enabled dataspace is fundamentally modular. Because modern data ecosystems must adapt to diverse operational, security, and compliance requirements, there is no single "one-size-fits-all" deployment model. Instead, the underlying system architecture dynamically scales and evolves based on the specific feature sets enabled within your deployment.

For instance, a baseline dataspace that focuses primarily on secure data exchange uses a streamlined, lightweight footprint. However, activating advanced features, such as SSI verification, user authentication, or account abstraction, changes the system's topology.

This chapter details the primary architectural variations supported by Ocean Enterprise software, mapping out how your chosen feature configurations alter component interactions, data flows, and security boundaries. For each architectural pattern, the required configuration steps are also provided, enabling you to implement the selected design end‑to‑end.

<mark style="background-color:$info;">**Note:**</mark> <mark style="background-color:$info;"></mark><mark style="background-color:$info;">In the diagrams throughout this chapter, various components of the OE software stack appear under the environments of two dataspace actors:</mark> <mark style="background-color:$info;"></mark><mark style="background-color:$info;">**Dataspace Operator**</mark> <mark style="background-color:$info;"></mark><mark style="background-color:$info;">and</mark> <mark style="background-color:$info;"></mark><mark style="background-color:$info;">**Dataspace Participant**</mark><mark style="background-color:$info;">. This placement indicates which actor is responsible for deploying each component to realize the illustrated configuration.</mark>

If you are not yet familiar with the roles and responsibilities of these actors in an OE‑enabled dataspace, refer to the chapter [Dataspace Actors and Roles](../dataspace-actors-and-roles.md) before continuing.



Here are the architectural variations detailed in this chapter:

* [Basic Dataspace Topologies](basic-dataspace-topologies.md)
  * Single-node dataspace
  * Multiple nodes dataspace
* &#x20;[Dataspaces with SSI-based access control enabled](dataspaces-with-ssi-based-access-control-enabled.md)
* [Dataspaces with market-level authentication](dataspaces-with-market-level-authentication.md)
  * Dataspaces with centralized market-level authentication
  * Dataspaces with federated market-level authentication
* [Dataspaces with basic account abstraction enabled](dataspaces-with-basic-account-abstraction.md)



