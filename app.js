const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Interfejs CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Wyświetlenie instrukcji
console.log(`
📁 Kreator struktury projektu
====================================
Program tworzy strukturę katalogów i plików na podstawie schematu drzewa.
Dostępne tryby:
1 - Utwórz projekt od nowa (nadpisuje istniejące pliki)
2 - Dodaj warstwę (nie nadpisuje plików i katalogów, pomija istniejące)

Przykład struktury:
newsletter-app/
\tpublic/
\t\tindex.html
\t\tscript.js
\tsubscribers.json
\tserver.js
\tpackage.json

Wklej strukturę po podaniu ścieżki. Wpisz "END", aby zakończyć.
`);

rl.question('Wybierz tryb (1 lub 2): ', (mode) => {
    if (mode !== '1' && mode !== '2') {
        console.log('❌ Nieprawidłowy wybór. Program zakończony.');
        rl.close();
        return;
    }

    rl.question('Podaj ścieżkę do folderu głównego projektu (np. C:/projekty): ', (projectPath) => {
        rl.question('Podaj nazwę folderu głównego projektu: ', (projectName) => {
            const basePath = path.join(projectPath, projectName);

            if (!fs.existsSync(basePath)) {
                fs.mkdirSync(basePath, { recursive: true });
                console.log(`📂 Utworzono folder główny projektu: ${basePath}`);
            }

            console.log('\n🧱 Wklej strukturę drzewa katalogów i plików. Wpisz "END" aby zakończyć:');
            let structure = '';

            rl.on('line', (input) => {
                if (input.trim() === 'END') {
                    try {
                        if (mode === '1') {
                            createStructureOverwrite(basePath, structure);
                        } else {
                            createStructureAppend(basePath, structure);
                        }
                        console.log('✅ Struktura projektu została przetworzona.');
                    } catch (error) {
                        console.error('❌ Błąd:', error.message);
                    }
                    rl.close();
                } else {
                    structure += input + '\n';
                }
            });
        });
    });
});

// Tryb 1 – Tworzy pliki i katalogi od nowa, nadpisuje pliki
function createStructureOverwrite(basePath, structure) {
    const lines = structure.trim().split('\n');
    const stack = [basePath];

    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;

        const depth = (line.match(/^\t+/) || [''])[0].length;
        const name = trimmed.replace(/\t/g, '');
        const currentPath = path.join(stack[depth], name);

        if (trimmed.includes('.')) {
            fs.writeFileSync(currentPath, ''); // Nadpisuje
            console.log(`📝 Plik utworzony (lub nadpisany): ${currentPath}`);
        } else {
            fs.mkdirSync(currentPath, { recursive: true });
            console.log(`📁 Folder utworzony: ${currentPath}`);
            stack[depth + 1] = currentPath;
        }
    });
}

// Tryb 2 – Dodaje warstwę, pomija istniejące pliki i katalogi
function createStructureAppend(basePath, structure) {
    const lines = structure.trim().split('\n');
    const stack = [basePath];

    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;

        const depth = (line.match(/^\t+/) || [''])[0].length;
        const name = trimmed.replace(/\t/g, '');
        const currentPath = path.join(stack[depth], name);

        if (trimmed.includes('.')) {
            if (!fs.existsSync(currentPath)) {
                fs.writeFileSync(currentPath, '');
                console.log(`🆕 Plik utworzony: ${currentPath}`);
            } else {
                console.log(`⏭️ Plik pominięty (już istnieje): ${currentPath}`);
            }
        } else {
            if (!fs.existsSync(currentPath)) {
                fs.mkdirSync(currentPath, { recursive: true });
                console.log(`📂 Folder utworzony: ${currentPath}`);
            } else {
                console.log(`⏭️ Folder pominięty (już istnieje): ${currentPath}`);
            }
            stack[depth + 1] = currentPath;
        }
    });
}
