---
layout: post
title: 'Rotate Nginx logs by date'
date: 2020-10-04 16:06:43 +0200
tags: nginx
categories: nginx
---

Here is the technique that I have used to rotate Nginx logs by date :

Firstly, I have defined a custom variable based on the `$time_iso8601` Nginx variable
in the `conf/nginx.conf` file

```
map $time_iso8601 $custom_date {
  ~(?<YYYY>\d+)-(?<MM>\d+)-(?<DD>\d+) ${YYYY}${MM}${DD};
}
```

Here is an example of `$time_iso8601` variable

```
2020-09-27T01:49:30+00:00
```

In this case, our custom variable will be

```
20200927
```

After that, I have used this new variable in the `access_log` directive

```
access_log logs/access_log.${custom_date}.log;
```

After restarting the server, the log files will be organized by date :

```
logs/access_log.20200927.log
logs/access_log.20200928.log
logs/access_log.20200929.log
```

If we want, we can change the rotation frequency to every hour with the same technique :

```
map $time_iso8601 $custom_date {
   ~(?<YYYY>\d+)-(?<MM>\d+)-(?<DD>\d+)T(?<HH>\d+) ${YYYY}${MM}${DD}_${HH}00;
}
```

I hope it was useful :)
