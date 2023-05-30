# Ocean.py



Attention all data enthusiasts! Are you an inquisitive data scientist intrigued by the world of Web3 and blockchain, but unsure of where to begin? Have you developed a groundbreaking AI algorithm and desire to transform it into profitable success? Perhaps you're engaged in training a highly lucrative model (LLM) and seek to define precise licensing terms for your valuable data. Or maybe you simply wish to sell your data while maintaining utmost privacy and control.

Well, brace yourselves for some exhilarating news! Introducing ocean.py, a Python library that possesses a touch of magic. 🎩🐍 It empowers you to discreetly and securely publish, exchange, and effortlessly consume data. 🐙💦 Collaborating with the Ocean Protocol 🌊, it unlocks a plethora of advantages mentioned earlier. So get ready to take the plunge into the vast ocean of data with a resounding splash of excitement! 💦🌊

<figure><img src="../../.gitbook/assets/ocean_py.png" alt="" width="375"><figcaption><p>ocean.py library</p></figcaption></figure>

### Overview

ocean.py serves as a connection layer bridging the V4 smart contracts and various components such as Provider, Aquarius, and Compute to Data engine within Ocean Protocol. This pythonic library brings all these elements together, facilitating seamless integration and interaction. By acting as an intermediary, ocean.py enables developers to easily leverage the functionalities offered by Ocean Protocol, making it a valuable tool in building applications and solutions that utilize decentralized data marketplaces. Its purpose is to simplify the process of connecting with smart contracts and accessing services provided by Provider, Aquarius, and Compute to Data engine, providing a convenient and efficient development experience for users.

#### Architectural point of view

Oh, the wondrous world of ocean.py! Imagine a playful octopus with eight arms, each one specialized in a unique task. 🐙

At its heart, ocean.py is like the conductor of an underwater orchestra, guiding different marine creatures (modules) to work together harmoniously. It's an open-source library that makes swimming in the vast sea of data a breeze! 🌊

The head of our octopus is the "Ocean" class. It oversees everything and keeps track of the data flow. It's like the brain of our underwater friend! 🧠

Now, let's take a closer look at those amazing arms:

1. Data Sources Arm: This arm gathers data from various sources, like CSV files, databases, or even streaming platforms. It dives deep to bring us the precious information we seek.
2. Data Cleaning Arm: Ah, the tidy arm! It takes messy data and polishes it, removing any inconsistencies or errors. It's like our octopus's personal cleaner, making sure everything is spotless.
3. Data Transformation Arm: This arm is like a shape-shifter! It takes the cleaned data and transforms it into a more suitable format for analysis. It can pivot, filter, or aggregate the data, molding it like clay.
4. Model Training Arm: Time for some deep learning! This arm is responsible for training machine learning models on the transformed data. It uses powerful algorithms to find patterns and make predictions, just like a clever cephalopod.
5. Model Evaluation Arm: Our octopus likes to double-check its work! This arm evaluates the trained models to see how accurate and reliable they are. It helps ensure our models are as reliable as an expert swimmer.
6. Model Deployment Arm: Ready to release our models into the ocean? This arm takes the trained models and deploys them, making them accessible for real-time predictions. It's like releasing beautiful sea creatures back into their natural habitat.
7. Model Monitoring Arm: Once the models are swimming freely, this arm keeps an eye on them. It checks their performance, detects any anomalies, and helps our octopus make timely adjustments if needed. Safety first!
8. Visualization Arm: Last but not least, our octopus has a creative side too! This arm helps create stunning visualizations of the data and model results. It turns numbers into beautiful underwater artworks.

So there you have it, the playful world of ocean.py, where an octopus and its eight specialized arms dive into the depths of data to unravel its mysteries. Happy swimming! 🌊🐙

### ocean.py Strengths 💪

ocean.py lets you do the following things:

* Publish data services: downloadable files or compute-to-data. Create an ERC721 data NFT for each service, and ERC20 datatoken for access (1.0 datatokens to access).
* Sell datatokens via for a fixed price. Sell data NFTs.
* Transfer data NFTs & datatokens to another owner, and all other ERC721 & ERC20 actions using  Brownie.

If you prefer video format, please check this video below, otherwise let's move forward.

{% embed url="https://youtu.be/8uZC6PC9PBM" %}



### ocean.py Quickstart 🚀

To kickstart your adventure with ocean.py, we set out the following steps to get you zooming ahead in no time!

1. Install Ocean 📥
2. Setup 🛠️ — Remote (Win, MacOS, Linux) — or Local (Linux only)
3. Walk through main flow 🚶‍♂️: publish asset, post for free / for sale, dispense it / buy it, and consume it

After these quickstart steps, the main [README](https://github.com/oceanprotocol/ocean.py/blob/main/README.md) points to several other use cases, such as [Predict-ETH](https://github.com/oceanprotocol/predict-eth), [Data Farming](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/df.md), on-chain key-value stores ([public](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/key-value-public.md) or [private](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/key-value-private.md)), and other types of data assets ([REST API](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/publish-flow-restapi.md), [GraphQL](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/publish-flow-graphql.md), [on-chain](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/publish-flow-onchain.md)).
