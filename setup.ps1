# NIBT Next.js website installer for Windows PowerShell
# Run from C:\NIBT after extracting the project.
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
Write-Host 'NIBT website setup (Next.js)' -ForegroundColor Cyan
$nodeVersion = & node --version
if ($LASTEXITCODE -ne 0) { throw 'Node.js is not installed. Install Node.js 22 LTS or newer before continuing.' }
$major = [int]([regex]::Match($nodeVersion, '\d+').Value)
if ($major -lt 22) { throw "Node.js $nodeVersion detected. Node.js 22 or newer is required." }
if (-not (Test-Path '.env.local')) {
    $secret = New-Object byte[] 32
    $rng = [System.Security.Cryptography.RandomNumberGenerator]::Create()
    try { $rng.GetBytes($secret) } finally { $rng.Dispose() }
    $hex = -join ($secret | ForEach-Object { $_.ToString('x2') })
    $text = "NIBT_DATA_KEY=$hex`r`nNEXT_PUBLIC_LMS_URL=`r`nNEXT_PUBLIC_SITE_READY=false`r`n"
    $encoding = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllText((Join-Path $PSScriptRoot '.env.local'),$text,$encoding)
    Write-Host 'Created local encryption key in .env.local (keep it private).' -ForegroundColor Green
}
Write-Host 'Installing Node.js dependencies...' -ForegroundColor Cyan
& npm install
if ($LASTEXITCODE -ne 0) { throw 'Dependency installation failed. Check the internet connection and run npm install again.' }
Write-Host 'Checking website source content...' -ForegroundColor Cyan
& npm run check:content
if ($LASTEXITCODE -ne 0) { throw 'Content verification failed.' }
Write-Host 'Setup complete. To launch, run: npm run dev' -ForegroundColor Green
Write-Host 'Then visit http://localhost:3000' -ForegroundColor Green
