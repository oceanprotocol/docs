# Ocean Protocol VSCode Extension

The Ocean Protocol VSCode extension enables you to run compute jobs seamlessly within Visual Studio Code using Ocean Protocol's secure compute-to-data network. Execute your algorithms (JavaScript or Python) on data without ever exposing the raw data.

## Getting Started

Once installed, the extension adds an Ocean Protocol section to your VSCode workspace. Here you can configure your compute settings and run compute jobs using the currently active algorithm file.

### Optional Setup

Feel free to use the default setup options or you also have the option to customise your compute settings:
1. **RPC URL** – Your blockchain connection endpoint.
2. **Ocean Node URL** – The node managing compute jobs.
3. **Private Key** – For signing transactions (stored securely).
4. **Compute Environment URL** – The URL (including port) of the compute environment.

### Compute-to-Data Operations

1. Open a JavaScript or Python file that contains your compute algorithm.
2. Optionally select a dataset file if your job requires it.
3. Choose a results folder for the output.
4. Click **Start Compute Job** to begin processing.
5. Monitor the job status and view logs in the output panel.
6. Once complete, your results are automatically saved and opened in VSCode.

## Troubleshooting

- Verify your RPC URL, Ocean Node URL, and Compute Environment URL if connections fail.
- Check the output channels for detailed logs.
- For further assistance, refer to the Ocean Protocol documentation or join the Discord community.

## Contributing

Your contributions are welcomed! Please check our GitHub repository for the contribution guidelines.

## Resources

- [Ocean Protocol Documentation](https://docs.oceanprotocol.com)
- [GitHub Repository](https://github.com/oceanprotocol)