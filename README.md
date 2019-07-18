## init project
```bash
docker run -it --rm -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app node:11 /bin/sh
```
inside docker container run
```bash
cd app && yarn install
```
## within the host machine
run in terminal
```bash
docker run -it --rm -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app node:11 node app/index.js
```