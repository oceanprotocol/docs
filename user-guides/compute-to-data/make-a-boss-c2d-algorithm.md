---
description: >-
  How to construct the beginnings of an awesome algorithm for C2D compute jobs
  on datasets
---

# Make a Boss C2D Algorithm

<figure><img src="../../.gitbook/assets/like-a-boss.gif" alt=""><figcaption></figcaption></figure>

The beginning of any great algorithm for Compute-to-Data starts by referencing the dataset asset correctly on the Docker container. Read on, anon.

### Open the local dataset file

This code goes at the top of your algorithm file for your algorithm NFT asset to use with Compute-to-Data. It references your data NFT asset file on the Docker container you selected.

{% tabs %}
{% tab title="Python" %}
```python
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
    
# Open the file & run your code
with open(input_filename, 'r') as file:
    # Read the CSV file
    csv_reader = csv.DictReader(file)
    
    <YOUR CODE GOES HERE>
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
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

<YOUR CODE & FUNCTION DEFINITIONS GO HERE>

// Open the file & run your code
processfolder(input_folder);
    
```
{% endtab %}
{% endtabs %}

**Note:** Here are the following Python libraries that you can use in your code:

```python
// Python modules
numpy==1.16.3
pandas==0.24.2
python-dateutil==2.8.0
pytz==2019.1
six==1.12.0
sklearn
xlrd == 1.2.0
openpyxl >= 3.0.3
wheel
matplotlib
```
