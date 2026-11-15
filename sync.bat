@echo off
echo ===================================================
echo   CodeCraft Academy - One-Click GitHub Sync
echo ===================================================
echo.
git status
echo.
git add .
git commit -m "chore: sync CodeCraft Academy curriculum and student data"
git push origin main
echo.
echo [SUCCESS] Everything has been uploaded and synced to GitHub!
echo https://github.com/luwmarin-dev/teaching-path-htmlcss
pause
