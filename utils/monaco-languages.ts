import type { Monaco } from "@monaco-editor/react";
import {
  languages,
  editor,
  Position,
  CancellationToken,
  Range,
} from "monaco-editor";

// Function to load language services and configure IntelliSense
export async function configureMonacoLanguages(monaco: Monaco) {
  await Promise.all([
    loadPythonLanguageService(monaco),
    loadCppLanguageService(monaco),
    loadCSharpLanguageService(monaco),
    loadVBNetLanguageService(monaco),
    loadJavaLanguageService(monaco),
    loadGoLanguageService(monaco),
  ]);
}

// Helper function to create a completion item with a range
function createCompletionItem(
  label: string,
  kind: languages.CompletionItemKind,
  insertText: string,
  documentation: string,
  range: Range
): languages.CompletionItem {
  return {
    label,
    kind,
    insertText,
    insertTextRules: languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation,
    range,
  };
}

// Generic function to load language services
type LanguageConfig = {
  language: string;
  snippets: { label: string; insertText: string; documentation: string }[];
};

async function loadLanguageService(monaco: Monaco, config: LanguageConfig) {
  try {
    monaco.languages.registerCompletionItemProvider(config.language, {
      provideCompletionItems: (
        model: editor.ITextModel,
        position: Position
      ) => {
        const word = model.getWordUntilPosition(position);
        const range = new monaco.Range(
          position.lineNumber,
          word.startColumn,
          position.lineNumber,
          word.endColumn
        );
        const suggestions = config.snippets.map((snippet) =>
          createCompletionItem(
            snippet.label,
            monaco.languages.CompletionItemKind.Snippet,
            snippet.insertText,
            snippet.documentation,
            range
          )
        );
        return { suggestions };
      },
    });
  } catch (error) {
    console.error(`Failed to load ${config.language} language service:`, error);
  }
}

async function loadPythonLanguageService(monaco: Monaco) {
  await loadLanguageService(monaco, {
    language: "python",
    snippets: [
      {
        label: "def",
        insertText: "def ${1:function_name}(${2:params}):\n\t${3:pass}",
        documentation: "Define a new function",
      },
      {
        label: "class",
        insertText:
          "class ${1:ClassName}:\n\tdef __init__(self, ${2:params}):\n\t\t${3:pass}",
        documentation: "Define a new class",
      },
      {
        label: "if",
        insertText: "if ${1:condition}:\n\t${2:pass}",
        documentation: "If statement",
      },
      {
        label: "for",
        insertText: "for ${1:item} in ${2:iterable}:\n\t${3:pass}",
        documentation: "For loop",
      },
    ],
  });
}

async function loadCppLanguageService(monaco: Monaco) {
  await loadLanguageService(monaco, {
    language: "cpp",
    snippets: [
      {
        label: "class",
        insertText:
          "class ${1:ClassName} {\npublic:\n\t${1}(${2});\n\t~${1}();\n};",
        documentation: "Class definition",
      },
      {
        label: "for",
        insertText:
          "for (int ${1:i} = 0; ${1:i} < ${2:count}; ${1:i}++) {\n\t${3}\n}",
        documentation: "For loop",
      },
      {
        label: "if",
        insertText: "if (${1:condition}) {\n\t${2}\n}",
        documentation: "If statement",
      },
      {
        label: "include",
        insertText: "#include <${1:iostream}>",
        documentation: "Include directive",
      },
    ],
  });
}

async function loadCSharpLanguageService(monaco: Monaco) {
  await loadLanguageService(monaco, {
    language: "csharp",
    snippets: [
      {
        label: "class",
        insertText: "public class ${1:ClassName} {\n\t${2}\n}",
        documentation: "Class definition",
      },
      {
        label: "prop",
        insertText: "public ${1:int} ${2:PropertyName} { get; set; }",
        documentation: "Property",
      },
      {
        label: "method",
        insertText:
          "public ${1:void} ${2:MethodName}(${3:parameters}) {\n\t${4}\n}",
        documentation: "Method",
      },
    ],
  });
}

async function loadVBNetLanguageService(monaco: Monaco) {
  await loadLanguageService(monaco, {
    language: "vb",
    snippets: [
      {
        label: "Class",
        insertText: "Public Class ${1:ClassName}\n\t${2}\nEnd Class",
        documentation: "Class definition",
      },
      {
        label: "Property",
        insertText:
          "Public Property ${1:PropertyName} As ${2:Type}\n\tGet\n\t\tReturn ${3}\n\tEnd Get\n\tSet(value As ${2:Type})\n\t\t${4}\n\tEnd Set\nEnd Property",
        documentation: "Property",
      },
      {
        label: "Sub",
        insertText: "Public Sub ${1:SubName}(${2:parameters})\n\t${3}\nEnd Sub",
        documentation: "Subroutine",
      },
    ],
  });
}

async function loadJavaLanguageService(monaco: Monaco) {
  await loadLanguageService(monaco, {
    language: "java",
    snippets: [
      {
        label: "class",
        insertText: "public class ${1:ClassName} {\n\t${2}\n}",
        documentation: "Class definition",
      },
      {
        label: "main",
        insertText: "public static void main(String[] args) {\n\t${1}\n}",
        documentation: "Main method",
      },
      {
        label: "sysout",
        insertText: "System.out.println(${1});",
        documentation: "Print to console",
      },
    ],
  });
}

async function loadGoLanguageService(monaco: Monaco) {
  await loadLanguageService(monaco, {
    language: "go",
    snippets: [
      {
        label: "func",
        insertText:
          "func ${1:funcName}(${2:params}) ${3:returnType} {\n\t${4}\n}",
        documentation: "Function definition",
      },
      {
        label: "struct",
        insertText: "type ${1:StructName} struct {\n\t${2}\n}",
        documentation: "Struct definition",
      },
      {
        label: "if",
        insertText: "if ${1:condition} {\n\t${2}\n}",
        documentation: "If statement",
      },
    ],
  });
}
