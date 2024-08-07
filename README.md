This is a starter template using docker to host sveltekit and pocketbase

`make up` to start the container
`make down` to stop the container

# pocketbase

- pb_data is where your app data will be stored at when you run the docker container
  - only the folder will be preserved, remove the gitignore statement for 'pb_data' to save your whole database to the branch,
- pb_hooks contains an example to add an additional api to the pocketbase server
  - check [here](https://pocketbase.io/docs/js-overview/) for more info

# sveltekit

- WIP
