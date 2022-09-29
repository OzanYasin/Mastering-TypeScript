// !! TypeScript Compiler

// To create tsconfig.json
`tsc --init`;

// --------------------------

// !! Watch mode !!
`tsc -w index.ts`;
`tsc --watch index.ts`;

// It watch for changes to compile it on every changes.

// --------------------------

// !! Working with Multiple Files !!

// No need to `tsc multiFile.ts && tsc index.ts`

// Instead of compile every file one by one,
// only `tsc` command will do the same.
// It will automatically compile every .ts file in the dir.

// Also, same rules applied for `tsc -w`
// YEY!

// --------------------------

// !! The Files Compiler Option !!
// https://www.typescriptlang.org/tsconfig

// Specifies an allowlist of files to include in the program.
// Set of settings to edit tsconfig.json

`{
  "compilerOptions": {},
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
}`;

// "files" will set specific ts files to compile.
// * Anything else will be ignored by TypeScript.

// --------------------------

// !! Include & Exclude Options !!

// * Include:
// Specifies an array of filenames or patterns to include in the program. These filenames are resolved relative to the directory containing the tsconfig.json file.

`{
  "include": ["src/**/*", "tests/**/*"]
}`;

// * Exclude:
// Specifies an array of filenames or patterns that should be skipped when resolving include.

// Node modules excluded on default.
