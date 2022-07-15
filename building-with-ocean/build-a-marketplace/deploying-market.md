---
title: Deployment of Ocean Market
order: 3
hideLanguageSelector: true
description: Step by step guide to a quick deployment of Ocean Market
featuredImage: images/creatures/mantaray/mantaray-full@2x.png
---

# 🔰 Quick deployment of Ocean Market

All that’s left is for you to host your data marketplace and start sharing it with your future users.

## **Build and host your Data Marketplace**

To host your data marketplace, you need to run the build command:

```
npm run build
```

This takes a few minutes to run. While this is running, you can get prepared to host your new data marketplace. You have many options for hosting your data marketplace (including AWS S3, Vercel, Netlify and many more). In this guide, we will demonstrate how to host it with surge, which is completely free and very easy to use.

Open up a new terminal window and run the following command to install surge:

```
npm install --global surge
```

When this is complete, navigate back to the terminal window that is building your finished data marketplace. Once the build is completed, enter the following commands to enter the public directory and host it:

```
cd public
```

```
surge
```

If this is your first time using surge, you will be prompted to enter an email address and password to create a free account. It will ask you to confirm the directory that it is about to publish, check that you are in the market/public/ directory and press enter to proceed. Now it gives you the option to choose the domain that you want your project to be available on. We have chosen formidable-data-market.surge.sh which is a free option. You can also set a CNAME value in your DNS to make use of your own custom domain.

After a few minutes, your upload will be complete, and you’re ready to share your data marketplace. You can view the version we created in this guide here.
