# RiktigRefactor

*Riktig* (Swedish/Norwegian): correct, right, proper.

RiktigRefactor is a family of refactoring tools that **always preserve behavior**, including in weird edge cases, in untested code, and in very large and complicated code.
The bar: select an arbitrary chunk in the middle of a 10,000-line method, extract it, and ship to production without worry.

When a tool cannot prove a transformation is safe, it **refuses with a clear reason** instead of guessing.
A conservative tool that is always right beats a clever one that is right 99.9% of the time.

## Repositories

| Repo | What it is |
|---|---|
| [RiktigRefactor.Spec](https://github.com/RiktigRefactor/RiktigRefactor.Spec) | The cross-language specification: principles, refactoring specs, protocol, shared test format |
| [RiktigRefactor.CSharp](https://github.com/RiktigRefactor/RiktigRefactor.CSharp) | C# implementation, built on Roslyn |
| [RiktigRefactor.Java](https://github.com/RiktigRefactor/RiktigRefactor.Java) | Java implementation, built on the JDK compiler API |
| [RiktigRefactor.TypeScript](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript) | TypeScript implementation |
| [RiktigRefactor.CPP](https://github.com/RiktigRefactor/RiktigRefactor.CPP) | C++ implementation, built on clang LibTooling |
| RiktigRefactor.Python | Python implementation (planned) |
| RiktigRefactor.VSCode | VS Code extension, a thin client over each language server (planned) |

## Refactorings

Rename, Extract IIFE, Make method static, Move static member, Move static method to instance method, and more.
Each language implements the shared specification, so behavior and refusal reasons are consistent across languages.

## Status

Early development.
The goal is to cover every language people care about.

## Get involved

Start with the [specification](https://github.com/RiktigRefactor/RiktigRefactor.Spec), then see the `CONTRIBUTING.md` in the repo for your language.
