# FCC Backend Project - Request Header Parser Details:

1. I can get the IP address, preferred languages (from header Accept-Language)
and system infos (from header User-Agent) for my device.

## What I Learned:

1. Learned using `app.enable('trust proxy');` in Express.js allows me to use `req.ip` to get client's ip address

2. Learned how to properly use `app.get()` to return the specified HTTP request header field

[You can access the project online here:](https://neveon-req-header.glitch.me/api/whoami/)
