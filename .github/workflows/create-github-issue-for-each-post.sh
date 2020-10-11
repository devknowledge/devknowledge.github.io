#!/bin/sh

echo -e "\\033[1;36mgrep permalink _posts/* | cut -d' ' -f2 | tr '/' '-'\\033[0;02m"
grep permalink _posts/* | cut -d' ' -f2 | tr '/' '-'
