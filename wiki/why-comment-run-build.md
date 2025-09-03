# Why comment out `RUN npm run build` in the Dockerfile?

In this project, the `npm run build` command is already executed in the CI/CD pipeline before the Docker image is created. This means the compiled files (e.g., the `dist/` folder) are already present in the Docker build context.

**Benefits of commenting out this line:**
- Avoids rebuilding unnecessarily, which speeds up image creation.
- Reduces resource usage during the Docker build.
- Ensures the compiled code is the one validated by CI, making deployments more reliable.

**Summary:**
Building in CI ensures consistency and faster deployments. It is recommended to comment out or remove `RUN npm run build` from the Dockerfile if the build is already done upstream.
