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
