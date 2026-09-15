# Pack a clean buyer ZIP for Gumroad (excludes node_modules, .next, .git, sell/)
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$dist = Join-Path $root "dist"
$stage = Join-Path $dist "nexlify-saas-landing"
$zip = Join-Path $dist "nexlify-saas-landing.zip"

if (Test-Path $dist) {
  Remove-Item $dist -Recurse -Force
}
New-Item -ItemType Directory -Path $stage | Out-Null

$include = @(
  "src",
  "public",
  "package.json",
  "package-lock.json",
  "tsconfig.json",
  "next.config.mjs",
  "postcss.config.mjs",
  "tailwind.config.ts",
  ".eslintrc.json",
  ".gitignore",
  "README.md",
  "CUSTOMIZE.md",
  "LICENSE.md",
  "next-env.d.ts"
)

foreach ($item in $include) {
  $src = Join-Path $root $item
  if (Test-Path $src) {
    $dest = Join-Path $stage $item
    Copy-Item -Path $src -Destination $dest -Recurse -Force
  }
}

if (Test-Path $zip) {
  Remove-Item $zip -Force
}

Compress-Archive -Path $stage -DestinationPath $zip -Force
Write-Host "Created: $zip"
Write-Host "Upload this ZIP to Gumroad product content."
