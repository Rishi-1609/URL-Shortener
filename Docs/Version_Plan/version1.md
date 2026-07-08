# Version 1 - Foundation

## 1. Url Shortening

* Description - User enters a url on the website and the website will return the user a shortened url that is completely different from the original url. 
* Architecture -
1. User enters url on the website
2. Url recevied by the backend
3. Backend scans/validates if the given text is actually a url
4. Url Generator program generates a url for the given original url that now redirects new url to original url
5. Generated url is then sent back to the website 
6. User can now use the shortened url

## 2. URL Generator Program

* Description - Generates the shortened url, maps it to the original url
* Architecture -
1. Uses MurmurHash to generate a 32 bit integer for the originalUrl
2. Check whether the number exists in DB or not.
3. If exists add extra constant or salt and hash again
4. Encode that value to Base62
5. return a json object -> {shortCode : encoded value, shortUrl : structured short url}

## 3. REST API

* Description - A Rest Api for the website

Url-Shortener Endpoints
(Need Authorization)
1. Post - "/shorten-url"
2. Get - "/get-short-url"
3. Put - "/edit-short-url/:shortCode"
4. Delete - "/delete-short-url"

Auth Endpoints
1. Post (Register) - "/register"
2. Post (Login)  - "/login"