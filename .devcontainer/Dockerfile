FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-16

# fix for hot reload with React Scripts 5.0 => old webpack version
# ENV CHOKIDAR_USEPOLLING=true

# fix for hot reload with React Scripts 5.0 => new webpack version
ENV WATCHPACK_POLLING=true

# fix websocket connection for hot reload
ENV WDS_SOCKET_PORT=3001

EXPOSE 3001