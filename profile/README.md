# RiktigRefactor

*Riktig* (Swedish/Norwegian): correct, right, proper.

RiktigRefactor is a family of refactoring tools that **always preserve behavior**, including in weird edge cases, in untested code, and in very large and complicated code.
The bar: select an arbitrary chunk in the middle of a 10,000-line method, extract a new method, and ship to production without worry.

When a tool cannot prove a transformation is safe, it **refuses with a clear reason** instead of guessing.

## Repositories

<!-- repos-table:start -->
| Repo | What it is | Status |
|---|---|---|
| [RiktigRefactor.CPP](https://github.com/RiktigRefactor/RiktigRefactor.CPP) | C++ implementation, built on clang LibTooling | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.CSharp](https://github.com/RiktigRefactor/RiktigRefactor.CSharp) | C# implementation, built on Roslyn | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.Java](https://github.com/RiktigRefactor/RiktigRefactor.Java) | Java implementation, built on the JDK compiler API | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.TypeScript](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript) | TypeScript implementation | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.Python](https://github.com/RiktigRefactor/RiktigRefactor.Python) | Python implementation | ![Status: planned](https://img.shields.io/badge/status-planned-lightgrey) |
| [RiktigRefactor.VSCode](https://github.com/RiktigRefactor/RiktigRefactor.VSCode) | VS Code extension, a thin client over each language server | ![Status: planned](https://img.shields.io/badge/status-planned-lightgrey) |
| [RiktigRefactor.Spec](https://github.com/RiktigRefactor/RiktigRefactor.Spec) | The cross-language specification: principles, refactoring specs, protocol, shared test format |  |
<!-- repos-table:end -->

## Refactorings

### Current

Most languages support most of these refactorings:

- Rename
- Extract Immediately-Executed Function Expression
- Make method static
- Move static member
- Convert static method to instance method

### Future

- Refactorings that make untestable code easier to test
- Refactorings that make confusing code easier to read and understand
- Refactorings for carving independent modules out of shared code

## Get involved

Start with the [specification](https://github.com/RiktigRefactor/RiktigRefactor.Spec), then see the `CONTRIBUTING.md` in the repo for your language.
