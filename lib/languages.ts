export const languages = [
  {
    id: "javascript",
    name: "JavaScript",
    extensions: [".js"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    extensions: [".ts"],
  },
  {
    id: "python",
    name: "Python",
    extensions: [".py"],
  },
  {
    id: "java",
    name: "Java",
    extensions: [".java"],
  },
  {
    id: "cpp",
    name: "C++",
    extensions: [".cpp", ".cc", ".h", ".hpp"],
  },
  {
    id: "csharp",
    name: "C#",
    extensions: [".cs"],
  },
  {
    id: "visual basic.net",
    name: "VB.Net",
    extensions: [".vb"],
  },
  {
    id: "go",
    name: "Go",
    extensions: [".go"],
  },
  {
    id: "rust",
    name: "Rust",
    extensions: [".rs"],
  },
  {
    id: "ruby",
    name: "Ruby",
    extensions: [".rb"],
  },
];

// Map Monaco Editor language IDs to Piston API language IDs
export const languageToPistonMap: Record<string, string> = {
  javascript: "javascript",
  typescript: "typescript",
  python: "python3",
  java: "java",
  cpp: "cpp",
  csharp: "csharp",
  go: "go",
  rust: "rust",
  ruby: "ruby",
};

// Editor themes
export const editorThemes = [
  { id: "vs", name: "Light (VS)" },
  { id: "vs-dark", name: "Dark (VS)" },
  { id: "github", name: "GitHub Light" },
  { id: "github-dark", name: "GitHub Dark" },
  { id: "monokai", name: "Monokai" },
  { id: "material-ocean", name: "Material Ocean" },
  { id: "dracula", name: "Dracula" },
  { id: "nord", name: "Nord" },
];

// Default code templates for each language
export const defaultCodeTemplates: Record<string, string> = {
  javascript: `// JavaScript Example
console.log("Hello, SyntaxSpring IDE!");

// A simple function
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Developer"));`,

  typescript: `// TypeScript Example
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("Developer"));

// An interface example
interface User {
  id: number;
  name: string;
  email?: string;
}

const user: User = {
  id: 1,
  name: "John Doe"
};

console.log(user);`,

  python: `# Python Example
print("Hello, SyntaxSpring IDE!")

# A simple function
def greet(name):
    return f"Hello, {name}!"

print(greet("Developer"))

# List comprehension example
numbers = [1, 2, 3, 4, 5]
squares = [n**2 for n in numbers]
print(squares)`,

  java: `// Java Example
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, SyntaxSpring IDE!");
        
        // Call a method
        System.out.println(greet("Developer"));
    }
    
    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
}`,

  cpp: `// C++ Example
#include <iostream>
#include <string>

std::string greet(const std::string& name) {
    return "Hello, " + name + "!";
}

int main() {
    std::cout << "Hello, SyntaxSpring IDE!" << std::endl;
    std::cout << greet("Developer") << std::endl;
    
    return 0;
}`,

  csharp: `// C# Example
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, SyntaxSpring IDE!");
        Console.WriteLine(Greet("Developer"));
    }
    
    static string Greet(string name) {
        return $"Hello, {name}!";
    }
}`,

  go: `// Go Example
package main

import "fmt"

func greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}

func main() {
    fmt.Println("Hello, SyntaxSpring IDE!")
    fmt.Println(greet("Developer"))
}`,

  rust: `// Rust Example
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

fn main() {
    println!("Hello, SyntaxSpring IDE!");
    println!("{}", greet("Developer"));
}`,

  ruby: `# Ruby Example
puts "Hello, SyntaxSpring IDE!"

# A simple method
def greet(name)
  "Hello, #{name}!"
end

puts greet("Developer")

# Array example
numbers = [1, 2, 3, 4, 5]
squares = numbers.map { |n| n**2 }
puts squares.inspect`,
};
