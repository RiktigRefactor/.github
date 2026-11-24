# RiktigRefactor

*Riktig* (Swedish/Norwegian): correct, right, proper.

RiktigRefactor is a family of refactoring tools that **always preserve behavior**, including in weird edge cases, in untested code, and in very large and complicated code.
The bar: select an arbitrary chunk in the middle of a 10,000-line method, extract it, and ship to production without worry.

When a tool cannot prove a transformation is safe, it **refuses with a clear reason** instead of guessing.
A conservative tool that is always right beats a clever one that is right 99.9% of the time.

## Repositories

<!-- repos-table:start -->
| Repo | What it is | Build | Status |
|---|---|---|---|
| [RiktigRefactor.Java](https://github.com/RiktigRefactor/RiktigRefactor.Java) |  | [![Build and test](https://github.com/RiktigRefactor/RiktigRefactor.Java/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.Java/actions/workflows/build-and-test.yml) | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.Spec](https://github.com/RiktigRefactor/RiktigRefactor.Spec) |  |  |  |
| [RiktigRefactor.TypeScript](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript) |  | [![Build and test](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript/actions/workflows/build-and-test.yml) | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
<!-- repos-table:end -->

## Refactorings

Rename, Extract IIFE, Make method static, Move static member, Move static method to instance method, and more.
Each language implements the shared specification, so behavior and refusal reasons are consistent across languages.

## Status

Early development.
The goal is to cover every language people care about.

## Get involved

Start with the [specification](https://github.com/RiktigRefactor/RiktigRefactor.Spec), then see the `CONTRIBUTING.md` in the repo for your language.
