# Contributing to Syntax Spring

Thank you for your interest in contributing to Syntax Spring! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
  - [Fork the Repository](#fork-the-repository)
  - [Clone Your Fork](#clone-your-fork)
  - [Set Up Development Environment](#set-up-development-environment)
- [Development Workflow](#development-workflow)
  - [Create a Branch](#create-a-branch)
  - [Make Your Changes](#make-your-changes)
  - [Commit Your Changes](#commit-your-changes)
  - [Push to Your Fork](#push-to-your-fork)
  - [Create a Pull Request](#create-a-pull-request)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Issue Reporting](#issue-reporting)
- [Review Process](#review-process)
- [Community and Support](#community-and-support)
- [License](#license)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## Getting Started

### Fork the Repository

1. Visit the [Syntax Spring repository](https://github.com/afuhflynns/syntax-spring-app) on GitHub.
2. Click the "Fork" button in the top-right corner.
3. Wait for GitHub to create a copy of the repository in your account.

### Clone Your Fork

```bash
# Clone your fork to your local machine
git clone https://github.com/afuhflynns/syntax-spring-app.git

# Navigate to the project directory
cd syntax-spring

# Add the original repository as an upstream remote
git remote add upstream https://github.com/afuhflynns/syntax-spring-app.git
```

### Set Up Development Environment

Ensure you have the required dependencies installed:

- **Node.js** (latest stable version recommended)
- **MongoDB** (for backend services)
- **Docker** (optional for containerized development)
- **VS Code** (recommended editor)
- **pnpm or npm** (for package management)

To install dependencies, run:

```bash
pnpm install  # or npm install
```

## Development Workflow

### Create a Branch

```bash
git checkout -b feature-branch-name
```

### Make Your Changes

Make changes in the appropriate files. Follow the [coding standards](#coding-standards).

### Commit Your Changes

```bash
git add .
git commit -m "Describe your changes here"
```

### Push to Your Fork

```bash
git push origin feature-branch-name
```

### Create a Pull Request

1. Go to your fork on GitHub.
2. Click "Compare & pull request."
3. Provide a meaningful description.
4. Submit the pull request.

## Pull Request Guidelines

- Keep pull requests focused on a single issue or feature.
- Provide a clear description of changes.
- Follow the project's coding style and linting rules.
- Ensure tests pass before submitting.

## Coding Standards

- Use **Next.js** with **TypeScript** for frontend.
- Follow **MongoDB + Mongoose** standards for database interactions.
- Ensure code is **modular, reusable, and well-documented**.

## Testing

Run tests before submitting a pull request:

```bash
pnpm test  # or npm test
```

## Documentation

Update relevant documentation when making changes:

- **API Documentation** (if applicable)
- **Code comments** to explain logic
- **README updates** for major changes

## Issue Reporting

Report issues via GitHub [Issues](https://github.com/afuhflynns/syntax-spring-app/issues):

- Provide a **clear, concise** description.
- Include **steps to reproduce** if it's a bug.
- Suggest potential **solutions** if possible.

## Review Process

- Reviews are conducted by maintainers and contributors.
- Feedback must be addressed before merging.
- Code must pass all tests before approval.

## Community and Support

Join our **Discord** or **GitHub Discussions** for help and collaboration.

## License

This project is licensed under the **GNU GENERAL PUBLIC LICENSE**. See [LICENSE](LICENSE) for details.
