# Lists your Gumroad products via API (counts toward "Command line" onboarding).
# Usage:
#   $env:GUMROAD_ACCESS_TOKEN = "your_token"
#   powershell -File scripts/gumroad-list-products.ps1

$ErrorActionPreference = "Stop"

if (-not $env:GUMROAD_ACCESS_TOKEN) {
  Write-Host "Set GUMROAD_ACCESS_TOKEN first:"
  Write-Host '  $env:GUMROAD_ACCESS_TOKEN = "YOUR_TOKEN"'
  Write-Host "Create a token: Gumroad → Settings → Advanced → Application credentials / Access token"
  exit 1
}

$uri = "https://api.gumroad.com/v2/products?access_token=$($env:GUMROAD_ACCESS_TOKEN)"
$response = Invoke-RestMethod -Uri $uri -Method Get

if (-not $response.success) {
  Write-Error "Gumroad API error: $($response | ConvertTo-Json -Depth 6)"
  exit 1
}

Write-Host "Success. Products:"
$response.products | ForEach-Object {
  [PSCustomObject]@{
    Name   = $_.name
    Price  = $_.formatted_price
    Short  = $_.short_url
    Published = $_.published
  }
} | Format-Table -AutoSize
