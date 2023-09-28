# Setting environment variables

To successfully configure the CLI tool, two essential steps must be undertaken: the setting of the account's private key and the definition of the desired RPC endpoint. These actions are pivotal in enabling the CLI tool to function effectively.

**Private Key Configuration**: The CLI tool necessitates the configuration of the account's private key. This private key serves as the means by which the CLI tool establishes a connection to the associated wallet. It plays a crucial role in authenticating and authorizing operations performed by the tool.

```bash
export MNEMONIC="XXXX"
```

**RPC Endpoint Specification**: Additionally, it is imperative to specify the RPC endpoint that corresponds to the desired network for executing operations. The CLI tool relies on this user-provided RPC endpoint to connect to the network required for its functions. This connection to the network is vital as it enables the CLI tool to interact with the blockchain and execute operations seamlessly.

```bash
export RPC='XXXX'
```

Furthermore, there are additional environment variables that can be configured to enhance the flexibility and customization of the environment. These variables include options such as the metadataCache URL and Provider URL, which can be specified if you prefer to utilize a custom deployment of Aquarius or Provider in contrast of the default settings. Moreover, you have the option to provide a custom address file path if you wish to use customized smart contracts or deployments for your specific use case. Remeber setting the next envariament variables is optional.

```bash
export AQUARIUS_URL='XXXX'
export PROVIDER_URL='XXXX'
export ADDRESS_FILE='../path/to/your/address-file'
```
