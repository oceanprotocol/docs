# Ocean Protocol VSCode Extension

Run compute jobs on Ocean Protocol directly from VS Code. The extension automatically detects your active algorithm file and streamlines job submission, monitoring, and results retrieval. Simply open a python or javascript file and click **Start Compute Job**. You can install the extension from [here](https://marketplace.visualstudio.com/items?itemName=OceanProtocol.ocean-protocol-vscode-extension#:~:text=Run%20compute%20jobs%20on%20Ocean%20Protocol%20directly%20from,or%20javascript%20file%20and%20click%20Start%20Compute%20Job.)


<figure><img src="https://github.com/oceanprotocol/vscode-extension/raw/main/screenshots/main-screenshot.png" alt="Ocean Protocol VSCode Extension"><figcaption>Ocean Protocol VSCode Extension</figcaption></figure>

## Getting Started

Once installed, the extension adds an Ocean Protocol section to your VSCode workspace. Here you can configure your compute settings and run compute jobs using the currently active algorithm file.

1. Install the extension from the VS Code Marketplace
2. Open the Ocean Protocol panel from the activity bar
3. Configure your compute settings:
   - Node URL (pre-filled with default Ocean compute node)
   - Optional private key for your wallet
4. Select your files:
   - Algorithm file (JS or Python)
   - Optional dataset file (JSON)
   - Results folder location
5. Click **Start Compute Job**
6. Monitor the job status and logs in the output panel
7. Once completed, the results file will automatically open in VSCode
8. Watch our step-by-step workshop on using the Ocean Protocol VSCode Extension: [Ocean VS code extension - Discord Algorithm Workshop](https://youtu.be/be5uq4nnZTU?si=slTr4NRAJOCqJtmk)

### Requirements

VS Code 1.96.0 or higher

### Troubleshooting

- Verify your RPC URL, Ocean Node URL, and Compute Environment URL if connections fail.
- Check the output channels for detailed logs.
- For further assistance, refer to the Ocean Protocol documentation or join the Discord community.

### Optional Setup

- Custom Compute Node: Enter your own node URL or use the default Ocean Protocol node
- Wallet Integration: Use auto-generated wallet or enter private key for your own wallet
- Custom Docker Images. If you need a custom environment with your own dependencies installed, you can use a custom docker image. Default is oceanprotocol/algo_dockers (Python) or node (JavaScript)
- Docker Tags: Specify version tags for your docker image (like python-branin or latest)
- Algorithm: The vscode extension automatically detects open JavaScript or Python files. Or alternatively you can specify the algorithm file manually here.
- Dataset: Optional JSON file for input data
- Results Folder: Where computation results will be saved

<figure><img src="https://github.com/oceanprotocol/vscode-extension/raw/main/screenshots/setup-screenshot.png" alt="Ocean Protocol VSCode Extension Optional Setup"><figcaption>Optional Setup Configuration</figcaption></figure>

## Contributing

Your contributions are welcomed! Please check our [GitHub repository](https://github.com/oceanprotocol/vscode-extension) for the contribution guidelines.

## Resources

- [Ocean Protocol Documentation](https://docs.oceanprotocol.com)
- [GitHub Repository](https://github.com/oceanprotocol)
