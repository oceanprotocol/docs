---
title: Quickstart
description: Do a quick test drive of Ocean.
---

Developers can run and try every [Ocean software component](/concepts/components/) on their local machine, all at once, using Docker Compose. Ocean Protocol software developers do this often, to test their code against all the other Ocean components.

```bash
git clone https://github.com/oceanprotocol/barge.git
cd barge/
./start_ocean.sh
```

Seeing the dolphin means it's working:

![Output of start_ocean.sh](images/dolphin.png)

Once everything is up and running, you can interact with the components. E.g. once [Commons](/concepts/components/#commons) is running, you can interact with it at:

- [http://localhost:3000/](http://localhost:3000/)

For the details of what components are running, see the [`barge` repository](https://github.com/oceanprotocol/barge).

<repo name="barge"></repo>
