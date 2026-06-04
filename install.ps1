#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$scriptPath = $PSCommandPath
while ($true) {
    $item = Get-Item -LiteralPath $scriptPath -Force
    if (-not $item.LinkType) { break }
    $targetPath = $item.Target
    if ($targetPath -is [array]) { $targetPath = $targetPath[0] }
    if (-not $targetPath) { break }
    if (-not [System.IO.Path]::IsPathRooted($targetPath)) {
        $targetPath = Join-Path -Path $item.DirectoryName -ChildPath $targetPath
    }
    $scriptPath = [System.IO.Path]::GetFullPath($targetPath)
}

$scriptDir = Split-Path -Parent $scriptPath
$installerScript = Join-Path -Path (Join-Path -Path $scriptDir -ChildPath 'scripts') -ChildPath 'install-apply.js'
& node $installerScript @args
exit $LASTEXITCODE
