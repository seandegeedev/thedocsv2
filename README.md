Made with ❤️ by [Sean De Gee](https://github.com/SeanDeGeeDev) for [Sintrex Integration Services](https://www.sintrex.com/)

# Sintrex Development - The Docs

## Current Versions

- OS: Ubuntu 24.04.1 LTS
- Bun: 1.2.19
- Docker: 28.3.2

## Getting Started - Production

### Prerequisites

On you production machine, the following prerequisites will need to be installed

- Docker: 28.3.1

### Production Server Setup

You can run the provided bash script `util/server_setup_prod.sh` on a fresh installation of Ubuntu 24.04.1 to setup the production server environment or run the commands therein manually if desired.

### Clone this repository

Within your user of choice's `/home` directory, clone this repository. ⚠️ Be sure to replace `[username]` and `[development_token]` with your GitHub username and development token:
```bash
git clone https://[username]:[development_token]@gitlab.sintrex.com/thedocs.git
```

### Create a `.env` file

Within the `src` folder, using the provided `template.env` create a `.env` file and define/change any needed environment variables within.

> ⚠️ Note: All variables within the `.env` file are required. Most variables are defined for you, but there are a few that are left blank or have used placeholders (marked with and 👈) and will need to be defined