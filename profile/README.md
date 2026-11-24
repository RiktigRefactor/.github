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
| [RiktigRefactor.CPP](https://github.com/RiktigRefactor/RiktigRefactor.CPP) | C++ implementation, built on clang LibTooling | [![Build and test](https://github.com/RiktigRefactor/riktigrefactor.cpp/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/RiktigRefactor/riktigrefactor.cpp/actions/workflows/build-and-test.yml) | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.CSharp](https://github.com/RiktigRefactor/RiktigRefactor.CSharp) | C# implementation, built on Roslyn | [![Build and test](https://github.com/RiktigRefactor/RiktigRefactor.CSharp/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.CSharp/actions/workflows/build-and-test.yml) | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.Java](https://github.com/RiktigRefactor/RiktigRefactor.Java) | Java implementation, built on the JDK compiler API | [![Build and test](https://github.com/RiktigRefactor/RiktigRefactor.Java/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.Java/actions/workflows/build-and-test.yml) | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.Python](https://github.com/RiktigRefactor/RiktigRefactor.Python) | Python implementation |  | ![Status: planned](https://img.shields.io/badge/status-planned-lightgrey) |
| [RiktigRefactor.Spec](https://github.com/RiktigRefactor/RiktigRefactor.Spec) | The cross-language specification: principles, refactoring specs, protocol, shared test format |  |  |
| [RiktigRefactor.TypeScript](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript) | TypeScript implementation | [![Build and test](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript/actions/workflows/build-and-test.yml) | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.VSCode](https://github.com/RiktigRefactor/RiktigRefactor.VSCode) | VS Code extension, a thin client over each language server |  | ![Status: planned](https://img.shields.io/badge/status-planned-lightgrey) |
<!-- repos-table:end -->

## Refactorings

Rename, Extract IIFE, Make method static, Move static member, Move static method to instance method, and more.
Each language implements the shared specification, so behavior and refusal reasons are consistent across languages.

## Status

Early development.
The goal is to cover every language people care about.

## Get involved

Start with the [specification](https://github.com/RiktigRefactor/RiktigRefactor.Spec), then see the `CONTRIBUTING.md` in the repo for your language.
