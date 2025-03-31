"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Moon, Sun, Monitor } from "lucide-react";

export default function AppearanceSettings() {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const [fontScale, setFontScale] = useState(100);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [colorScheme, setColorScheme] = useState("blue");

  // Apply theme changes to the entire application
  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", `${fontScale}%`);

    if (reducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }

    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }

    document.documentElement.setAttribute("data-color-scheme", colorScheme);
  }, [fontScale, reducedMotion, highContrast, colorScheme]);

  const handleAppearanceUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appearance updated",
      description: "Your appearance settings have been updated successfully.",
    });
  };

  const colorSchemes = [
    { name: "Blue", value: "blue" },
    { name: "Purple", value: "purple" },
    { name: "Green", value: "green" },
    { name: "Orange", value: "orange" },
    { name: "Red", value: "red" },
  ];

  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Appearance</h2>
        <p className="text-muted-foreground">
          Customize how Syntax Spring looks and feels.
        </p>
      </div>

      <Separator />

      <form onSubmit={handleAppearanceUpdate}>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>
                Choose your preferred theme for Syntax Spring.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className={`relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    theme === "light"
                      ? "border-primary bg-primary/10"
                      : "border-muted hover:border-primary/50"
                  }`}
                  onClick={() => setTheme("light")}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Sun className="h-5 w-5" />
                    {theme === "light" && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-slate-200"></div>
                    <div className="h-2 w-3/4 rounded-full bg-slate-200"></div>
                    <div className="h-2 w-1/2 rounded-full bg-slate-200"></div>
                  </div>
                  <p className="mt-2 font-medium text-center">Light</p>
                </div>

                <div
                  className={`relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    theme === "dark"
                      ? "border-primary bg-primary/10"
                      : "border-muted hover:border-primary/50"
                  }`}
                  onClick={() => setTheme("dark")}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Moon className="h-5 w-5" />
                    {theme === "dark" && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-slate-700"></div>
                    <div className="h-2 w-3/4 rounded-full bg-slate-700"></div>
                    <div className="h-2 w-1/2 rounded-full bg-slate-700"></div>
                  </div>
                  <p className="mt-2 font-medium text-center">Dark</p>
                </div>

                <div
                  className={`relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    theme === "system"
                      ? "border-primary bg-primary/10"
                      : "border-muted hover:border-primary/50"
                  }`}
                  onClick={() => setTheme("system")}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Monitor className="h-5 w-5" />
                    {theme === "system" && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-gradient-to-r from-slate-700 to-slate-200"></div>
                    <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-slate-700 to-slate-200"></div>
                    <div className="h-2 w-1/2 rounded-full bg-gradient-to-r from-slate-700 to-slate-200"></div>
                  </div>
                  <p className="mt-2 font-medium text-center">System</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Color Scheme</CardTitle>
              <CardDescription>
                Choose a color scheme for the interface.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={colorScheme}
                onValueChange={setColorScheme}
                className="grid grid-cols-2 md:grid-cols-5 gap-4"
              >
                {colorSchemes.map((scheme) => (
                  <div
                    key={scheme.value}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      value={scheme.value}
                      id={`color-${scheme.value}`}
                    />
                    <Label
                      htmlFor={`color-${scheme.value}`}
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`mr-2 h-4 w-4 rounded-full bg-${scheme.value}-500`}
                        style={{ backgroundColor: `var(--${scheme.value})` }}
                      ></span>
                      {scheme.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
              <CardDescription>
                Customize accessibility settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="font-scale">Font Size ({fontScale}%)</Label>
                <Slider
                  id="font-scale"
                  min={75}
                  max={150}
                  step={5}
                  value={[fontScale]}
                  onValueChange={(value) => setFontScale(value[0])}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="reduced-motion">Reduced Motion</Label>
                  <p className="text-sm text-muted-foreground">
                    Minimize animations and transitions.
                  </p>
                </div>
                <Switch
                  id="reduced-motion"
                  checked={reducedMotion}
                  onCheckedChange={setReducedMotion}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="high-contrast">High Contrast</Label>
                  <p className="text-sm text-muted-foreground">
                    Increase contrast for better visibility.
                  </p>
                </div>
                <Switch
                  id="high-contrast"
                  checked={highContrast}
                  onCheckedChange={setHighContrast}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex justify-end">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}
