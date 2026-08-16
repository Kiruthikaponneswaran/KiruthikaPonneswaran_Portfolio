# ============================================
# Download Simple Icons v14
# ============================================

$iconNames = @(
    "angular",
    "react",
    "typescript",
    "javascript",
    "python",
    "django",
    "nodedotjs",
    "html5",
    "css3",
    "sass",
    "bootstrap",
    "tailwindcss",

    "firebase",
    "mysql",
    "git",
    "github",
    "npm",
    "yarn",
    "webpack",
    "vite",

    "figma",
    "gmail",
    "instagram",
    "linkedin",
    "leetcode"
)

# Simple Icons v14 CDN
$baseUrl = "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons"

# Angular public assets folder
$outputDir = "public/assets/simple-icons"

# Create folder if it doesn't exist
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

foreach ($icon in $iconNames) {

    $url = "$baseUrl/$icon.svg"
    $outputFile = Join-Path $outputDir "$icon.svg"

    Write-Host "Downloading $icon.svg ..." -ForegroundColor Cyan

    try {
        Invoke-WebRequest `
            -Uri $url `
            -OutFile $outputFile `
            -UseBasicParsing

        Write-Host "  OK: $icon.svg" -ForegroundColor Green
    }
    catch {
        Write-Host "  FAILED: $icon.svg" -ForegroundColor Red
        Write-Host "  $url" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "All icons downloaded to:" -ForegroundColor Green
Write-Host "$outputDir" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green