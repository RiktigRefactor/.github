# RiktigRefactor

*Riktig* (Swedish/Norwegian): correct, right, proper.

RiktigRefactor is a family of refactoring tools that **always preserve behavior**, including in weird edge cases, in untested code, and in very large and complicated code.
The bar: select an arbitrary chunk in the middle of a 10,000-line method, extract a new method, and ship to production without worry.

When a tool cannot prove a transformation is safe, it **refuses with a clear reason** instead of guessing.

## Languages

Each language implements the [RiktigRefactor specification](https://github.com/RiktigRefactor/RiktigRefactor.Spec), which defines the principles, refactoring specs, protocol, and shared test format.

<!-- repos-table:start -->
| Repo | What it is | Status |
|---|---|---|
| [RiktigRefactor.CPP](https://github.com/RiktigRefactor/RiktigRefactor.CPP) | C++ implementation, built on clang LibTooling | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.CSharp](https://github.com/RiktigRefactor/RiktigRefactor.CSharp) | C# implementation, built on Roslyn | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.Java](https://github.com/RiktigRefactor/RiktigRefactor.Java) | Java implementation, built on the JDK compiler API | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.TypeScript](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript) | TypeScript implementation | ![Status: early development](https://img.shields.io/badge/status-early%20development-orange) |
| [RiktigRefactor.VSCode](https://github.com/RiktigRefactor/RiktigRefactor.VSCode) | VS Code extension, a thin client over each language server | ![Status: early](https://img.shields.io/badge/status-early-orange) |
| [RiktigRefactor.Python](https://github.com/RiktigRefactor/RiktigRefactor.Python) | Python implementation | ![Status: planned](https://img.shields.io/badge/status-planned-lightgrey) |
<!-- repos-table:end -->

## Refactorings

### Current

Most languages support most of these refactorings:

- Rename
- Extract Immediately-Executed Function Expression
- Make method static
- Move static member
- Convert static method to instance method

### Future direction

- Refactorings that make untestable code easier to test
- Refactorings that make confusing code easier to read and understand
- Refactorings for carving independent modules out of shared code

## Get involved

Start with the [specification](https://github.com/RiktigRefactor/RiktigRefactor.Spec), then see the `CONTRIBUTING.md` in the repo for your language.

<!-- build-status:start -->
<details>
<summary>Build status</summary>

| Repo | Workflow | Status |
|---|---|---|
| [.github](https://github.com/RiktigRefactor/.github) | Update org README | [![Update org README](https://github.com/RiktigRefactor/.github/actions/workflows/update-readme.yml/badge.svg)](https://github.com/RiktigRefactor/.github/actions/workflows/update-readme.yml) |
| [RiktigRefactor.CPP](https://github.com/RiktigRefactor/RiktigRefactor.CPP) | Build and Test | [![Build and Test](https://github.com/RiktigRefactor/RiktigRefactor.CPP/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.CPP/actions/workflows/build-and-test.yml) |
| [RiktigRefactor.CPP](https://github.com/RiktigRefactor/RiktigRefactor.CPP) | Dependabot auto-merge | [![Dependabot auto-merge](https://github.com/RiktigRefactor/RiktigRefactor.CPP/actions/workflows/dependabot-auto-merge.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.CPP/actions/workflows/dependabot-auto-merge.yml) |
| [RiktigRefactor.CPP](https://github.com/RiktigRefactor/RiktigRefactor.CPP) | Check links | [![Check links](https://github.com/RiktigRefactor/RiktigRefactor.CPP/actions/workflows/link-check.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.CPP/actions/workflows/link-check.yml) |
| [RiktigRefactor.CPP](https://github.com/RiktigRefactor/RiktigRefactor.CPP) | Tidy Code | [![Tidy Code](https://github.com/RiktigRefactor/RiktigRefactor.CPP/actions/workflows/tidy-code.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.CPP/actions/workflows/tidy-code.yml) |
| [RiktigRefactor.CSharp](https://github.com/RiktigRefactor/RiktigRefactor.CSharp) | Build and Test | [![Build and Test](https://github.com/RiktigRefactor/RiktigRefactor.CSharp/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.CSharp/actions/workflows/build-and-test.yml) |
| [RiktigRefactor.CSharp](https://github.com/RiktigRefactor/RiktigRefactor.CSharp) | Dependabot auto-merge | [![Dependabot auto-merge](https://github.com/RiktigRefactor/RiktigRefactor.CSharp/actions/workflows/dependabot-auto-merge.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.CSharp/actions/workflows/dependabot-auto-merge.yml) |
| [RiktigRefactor.CSharp](https://github.com/RiktigRefactor/RiktigRefactor.CSharp) | Check links | [![Check links](https://github.com/RiktigRefactor/RiktigRefactor.CSharp/actions/workflows/link-check.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.CSharp/actions/workflows/link-check.yml) |
| [RiktigRefactor.CSharp](https://github.com/RiktigRefactor/RiktigRefactor.CSharp) | Tidy Code | [![Tidy Code](https://github.com/RiktigRefactor/RiktigRefactor.CSharp/actions/workflows/tidy-code.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.CSharp/actions/workflows/tidy-code.yml) |
| [RiktigRefactor.Java](https://github.com/RiktigRefactor/RiktigRefactor.Java) | Build and Test | [![Build and Test](https://github.com/RiktigRefactor/RiktigRefactor.Java/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.Java/actions/workflows/build-and-test.yml) |
| [RiktigRefactor.Java](https://github.com/RiktigRefactor/RiktigRefactor.Java) | Dependabot auto-merge | [![Dependabot auto-merge](https://github.com/RiktigRefactor/RiktigRefactor.Java/actions/workflows/dependabot-auto-merge.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.Java/actions/workflows/dependabot-auto-merge.yml) |
| [RiktigRefactor.Java](https://github.com/RiktigRefactor/RiktigRefactor.Java) | Check links | [![Check links](https://github.com/RiktigRefactor/RiktigRefactor.Java/actions/workflows/link-check.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.Java/actions/workflows/link-check.yml) |
| [RiktigRefactor.Java](https://github.com/RiktigRefactor/RiktigRefactor.Java) | Tidy Code | [![Tidy Code](https://github.com/RiktigRefactor/RiktigRefactor.Java/actions/workflows/tidy-code.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.Java/actions/workflows/tidy-code.yml) |
| [RiktigRefactor.Python](https://github.com/RiktigRefactor/RiktigRefactor.Python) | | |
| [RiktigRefactor.Spec](https://github.com/RiktigRefactor/RiktigRefactor.Spec) | Dependabot auto-merge | [![Dependabot auto-merge](https://github.com/RiktigRefactor/RiktigRefactor.Spec/actions/workflows/dependabot-auto-merge.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.Spec/actions/workflows/dependabot-auto-merge.yml) |
| [RiktigRefactor.Spec](https://github.com/RiktigRefactor/RiktigRefactor.Spec) | Check links | [![Check links](https://github.com/RiktigRefactor/RiktigRefactor.Spec/actions/workflows/link-check.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.Spec/actions/workflows/link-check.yml) |
| [RiktigRefactor.TypeScript](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript) | Build and Test | [![Build and Test](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript/actions/workflows/build-and-test.yml) |
| [RiktigRefactor.TypeScript](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript) | Dependabot auto-merge | [![Dependabot auto-merge](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript/actions/workflows/dependabot-auto-merge.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript/actions/workflows/dependabot-auto-merge.yml) |
| [RiktigRefactor.TypeScript](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript) | Check links | [![Check links](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript/actions/workflows/link-check.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript/actions/workflows/link-check.yml) |
| [RiktigRefactor.TypeScript](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript) | Tidy Code | [![Tidy Code](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript/actions/workflows/tidy-code.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.TypeScript/actions/workflows/tidy-code.yml) |
| [RiktigRefactor.VSCode](https://github.com/RiktigRefactor/RiktigRefactor.VSCode) | Build and Test | [![Build and Test](https://github.com/RiktigRefactor/RiktigRefactor.VSCode/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.VSCode/actions/workflows/build-and-test.yml) |
| [RiktigRefactor.VSCode](https://github.com/RiktigRefactor/RiktigRefactor.VSCode) | Dependabot auto-merge | [![Dependabot auto-merge](https://github.com/RiktigRefactor/RiktigRefactor.VSCode/actions/workflows/dependabot-auto-merge.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.VSCode/actions/workflows/dependabot-auto-merge.yml) |
| [RiktigRefactor.VSCode](https://github.com/RiktigRefactor/RiktigRefactor.VSCode) | Check links | [![Check links](https://github.com/RiktigRefactor/RiktigRefactor.VSCode/actions/workflows/link-check.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.VSCode/actions/workflows/link-check.yml) |
| [RiktigRefactor.VSCode](https://github.com/RiktigRefactor/RiktigRefactor.VSCode) | Tidy Code | [![Tidy Code](https://github.com/RiktigRefactor/RiktigRefactor.VSCode/actions/workflows/tidy-code.yml/badge.svg)](https://github.com/RiktigRefactor/RiktigRefactor.VSCode/actions/workflows/tidy-code.yml) |

</details>
<!-- build-status:end -->
