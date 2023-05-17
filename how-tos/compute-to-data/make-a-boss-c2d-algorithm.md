---
description: >-
  How to construct the beginnings of an awesome algorithm for C2D compute jobs
  on datasets
---

# Make a Boss C2D Algorithm

{% embed url="https://media3.giphy.com/media/cub3pntkz8muQ/giphy.gif?cid=ecf05e47o9fdrqco4jqpeyh7899whqgw5tnd43elr023rykr&ep=v1_gifs_search&rid=giphy.gif" %}

The beginning of any great algorithm for Compute-to-Data first starts by referencing the dataset file correctly on the Docker container. Here is the code in both Python and Javascript for how to correctly reference the dataset file that's local on the Docker container for your compute job:

### Python

```
import csv
import json
import os

def get_input(local=False):

    dids = os.getenv("DIDS", None)

    if not dids:
        print("No DIDs found in the environment. Aborting.")
        return

    dids = json.loads(dids)

    for did in dids:
        filename = f"data/inputs/{did}/0"  # 0 for metadata service
        print(f"Reading asset file {filename}.")
        return filename

# Get the input filename using the get_input function
input_filename = get_input()

if not input_filename:
    # No input filename returned
    exit()
    
# Call the Function
with open(input_filename, 'r') as file:
    # Read the CSV file
    csv_reader = csv.DictReader(file)
    
    <YOUR CODE GOES HERE>
```

### Javascript

```
const fs = require("fs");

var input_folder = "/data/inputs";
var output_folder = "/data/outputs";

async function processfolder(Path) {
    var files = fs.readdirSync(Path);
    for (var i =0; i < files.length; i++) {
        var file = files[i];
        var fullpath = Path + "/" + file;
        if (fs.statSync(fullpath).isDirectory()) {
            await processfolder(fullpath);
        } else {
            <YOUR CODE GOES HERE>
        }
    }
}

<YOUR CODE GOES HERE>

processfolder(input_folder);
    
```
