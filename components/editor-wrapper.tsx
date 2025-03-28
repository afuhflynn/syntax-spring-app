"use client";

import { Suspense } from "react";
import { MainLoader } from "./loader";
import { TestCodeEditor } from "./user-code-editor";

export function EditorWrapper() {
  return (
    <Suspense fallback={<MainLoader />}>
      <TestCodeEditor />
    </Suspense>
  );
}
