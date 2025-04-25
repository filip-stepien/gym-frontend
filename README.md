# Gym Frontend 🏋️

## Running

To run the project, install the dependencies:

```bash
npm i
```

Then, to start the application:

```bash
npm start
```

Or run in the development mode:

```bash
npm run dev
```
## Backend 

https://github.com/rafal11ck/gym-api

### How API client is maintained

```mermaid
sequenceDiagram
  title How API client is maintained
  participant gym-api as gym-api repo
  participant renovate
  participant gym-frontend


  loop Every some time
    renovate ->> gym-api: Get latest release
    gym-api -->> renovate: releases

  end

  opt is there new release
    renovate ->> gym-frontend: Create PR updating API spec URL 
    gym-frontend ->> gym-frontend: generate SDK in workflow
    gym-frontend ->> gym-frontend: commit new SDK
  end

  actor maintainer
  
  maintainer->>gym-frontend: Merge PR
```