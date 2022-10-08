---
title: How to see the emails of each Plex user you added to your server
authors: [npgy]
tags: [tech, plex, media, api]
---

## The Problem
After a semi-recent Plex update, you may have noticed that you are no longer able to see the emails of the users to whom you've granted access to your libraries. Now it only shows the usernames of these users instead.

If your situation is anything like mine, I was not able to tell who was who based on the usernames.

## The Solution
First, you will need your Plex token.  
The following are [instructions](https://support.plex.tv/articles/204059436-finding-an-authentication-token-x-plex-token/) from Plex's support site on how to get your token.

### Finding the Token
1. [Sign in to your Plex account](https://support.plex.tv/articles/200933616-plex-account/) in Plex Web App
2. Browse to a library item and [view the XML](https://support.plex.tv/articles/201998867-investigate-media-information-and-formats/) for it
3. Look in the URL and find the token as the `X-Plex-Token` value

Once you have your Plex token you can now use it in a URL to retrieve the list of users and their associated usernames and emails. This is just an API call and will return XML data.

Put this URL into your browser, replacing `YOUR_TOKEN_HERE` with the token you found in the previous steps.  
https://plex.tv/api/users/?X-Plex-Token=YOUR_TOKEN_HERE

What you can do now is search through the resulting XML for the username you want to find the email for. `CTRL`+`F` is a handy shortcut to search through text in the browser.

The XML should look something like this. You'll see their username, which you already know from the Plex dashboard. Right next to it you'll see `email=`. Right there will be their email address!
```xml
<User id="12345678" title="username123" username="username123" email="username123@gmail.com" other-attrs...">
</User>
```

## Conclusion
Hopefully you found this guide helpful! Someday it might be a cool project to try and make this more user-friendly, but for now it does the trick just fine.