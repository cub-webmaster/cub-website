FROM mcr.microsoft.com/devcontainers/typescript-node:24

COPY ./yarn.lock /workspaces/cub-website/yarn.lock
COPY ./package.json /workspaces/cub-website/package.json
RUN corepack enable && cd /workspaces/cub-website && yarn install