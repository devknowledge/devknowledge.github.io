---
permalink: nginx/rotate-nginx-logs-by-date
layout: post
title: 'Rotate Nginx logs by date'
tags: nginx
category: nginx
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1572061487787-3cd4292f12bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80
---

In this post, I'm going to share with you the technique that I have used to rotate Nginx logs by date

## Step 1

I defined a custom variable based on the `$time_iso8601` variable in the `conf/nginx.conf` file

```shell
map $time_iso8601 $custom_date {
  ~(?<YYYY>\d+)-(?<MM>\d+)-(?<DD>\d+) ${YYYY}${MM}${DD};
}
```

**Example**

| \$time_iso8601            | \$custom_date |
| :------------------------ | :------------ |
| 2020-09-27T01:49:30+00:00 | 20200927      |

## Step 2

I used this new variable in the `access_log` directive

```shell
access_log logs/access_log.${custom_date}.log;
```

## Result

After restarting the server, the log files will be organized by date

```shell
logs/access_log.20200927.log
logs/access_log.20200928.log
logs/access_log.20200929.log
```

## Go further

If we want, we can change the rotation frequency to every hour with the same technique :

```shell
map $time_iso8601 $custom_date {
   ~(?<YYYY>\d+)-(?<MM>\d+)-(?<DD>\d+)T(?<HH>\d+) ${YYYY}${MM}${DD}_${HH}00;
}
```

I hope it was useful :)

## References

- [Logging milliseconds in ISO8601 format](https://thatsamguy.com/nginx-iso8601-time-format/)
- [How To Configure Logging and Log Rotation in Nginx](https://www.digitalocean.com/community/tutorials/how-to-configure-logging-and-log-rotation-in-nginx-on-an-ubuntu-vps)
