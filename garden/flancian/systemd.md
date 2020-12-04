# Systemd

- How to keep a user process running:
  - https://jimsaunders.net/2017/08/03/simple-per-user-systemd.html
- Scripts go in .config/systemd/user/, add an example.service file and then: 
  - systemctl --user enable example
  - systemctl --user start example