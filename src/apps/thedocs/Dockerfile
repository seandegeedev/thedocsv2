# Stage 1: Build
# Start with a base image that has Node.js installed
FROM oven/bun:latest AS builder

WORKDIR /usr/local/src/thedocs

# Copy the application code
COPY . .

# Install the dependencies for the application
RUN bun install

# Build the application
WORKDIR /usr/local/src/thedocs
RUN bun run build

# Stage 2: Run
FROM oven/bun:1.2.19 AS runner

WORKDIR /usr/local/src/thedocs

COPY --from=builder /usr/local/src/thedocs/.output ./.output

# Start the application
ENTRYPOINT ["bun", "/usr/local/src/thedocs/.output/server/index.mjs"]