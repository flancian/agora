# Autofs

- I use this to automount SD cards.
  - In /etc/auto.master: ```/media /etc/auto.removable --timeout=2,sync```
  - In /etc/auto.removable: sd -fstype=vfat,uid=$my_user_id :/dev/mmcblk0p1
