# SQLSkrypter

**Szybki i bezpieczny SQL Runner dla baz MSSQL (SQL Server).**

![GitHub release (latest by date)](https://img.shields.io/github/v/release/rotgamedev/SQLSkrypter?style=for-the-badge&color=gold)
![Edition-Standard](https://img.shields.io/badge/Edition-Standard-lightgrey?style=for-the-badge)
![Edition-PRO](https://img.shields.io/badge/Edition-PRO-gold?style=for-the-badge)
![Privacy-Local](https://img.shields.io/badge/Privacy-100%25%20Offline-green?style=for-the-badge)

[English Version](#english) | [Polska Wersja](#polski)

---

<div align="center">
  <img src="img/Main Workspace.png" alt="SQLSkrypter Workpace" width="800">
  <p><i>Bezpieczne wykonywanie skryptów T-SQL na wielu bazach danych MSSQL jednocześnie.</i></p>
</div>

---

<a name="polski"></a>
## 🇵🇱 Polski

**SQLSkrypter** to lekkie i wydajne narzędzie typu **SQL Runner**, stworzone do masowego uruchamiania skryptów T-SQL w środowiskach **Microsoft SQL Server (MSSQL)**. To idealne rozwiązanie, gdy musisz szybko i bezpiecznie wdrożyć zmiany na dziesiątkach lub setkach baz danych.

### 🚀 Kluczowe Funkcjonalności

*   **Równoległe Wykonywanie (Parallel)**: Wykonuj skrypty na wielu serwerach jednocześnie, oszczędzając czas przy dużych wdrożeniach (dostępne w wersji PRO).
*   **Symulacja (Dry-run)**: Sprawdź poprawność skryptu bez ryzyka dla danych. SQLSkrypter uruchamia kod w transakcji, która jest automatycznie wycofywana.
*   **Analityka i Statystyki**: Po każdym uruchomieniu otrzymasz szczegółowe podsumowanie – dowiesz się, która baza odpowiedziała najszybciej, a która była najwolniejsza.
*   **Prywatność i Offline**: Aplikacja działa w 100% lokalnie. Twoje hasła i skrypty nigdy nie opuszczają Twojego komputera (szyfrowanie DPAPI).

### 📸 Galeria

<table border="0">
  <tr>
    <td>
      <img src="img/EnvConf.png" alt="Konfiguracja Środowisk" width="400"><br>
      <b>Zarządzanie Środowiskami</b><br>
      Grupuj serwery w logiczne struktury.
    </td>
    <td>
      <img src="img/ParOpTi.png" alt="Tryb Parallel" width="400"><br>
      <b>Optymalizacja Równoległa</b><br>
      Maksymalna prędkość wykonywania.
    </td>
  </tr>
</table>

### 💎 Porównanie Edycji

| Funkcja | Edycja Standard (Free) | Edycja PRO |
| :--- | :---: | :---: |
| **Limit Serwerów** | 10 serwerów | **Bez limitu** |
| **Grupy Środowisk** | 3 grupy | **Bez limitu** |
| **Tryb Parallel** | ❌ Brak | **✅ Tak** |
| **Symulacja Dry-run** | ❌ Brak | **✅ Tak** |
| **Zapis sesji drzewa** | ❌ Brak | **✅ Tak** |
| **Eksport/Import konfiguracji** | ❌ Brak | **✅ Tak** |

---

<a name="english"></a>
## 🌍 English

**SQLSkrypter** is a fast and lightweight **SQL Runner** designed for DBAs and developers to execute T-SQL scripts across multiple **MSSQL (SQL Server)** instances. Focus on speed, safety, and 100% data privacy.

### 🚀 Key Features

*   **Parallel Execution**: Run scripts on multiple servers simultaneously to minimize deployment time (PRO feature).
*   **Dry-run Simulation**: Verify your T-SQL code with zero risk to production data using automatic transaction rollbacks.
*   **Execution Statistics**: Get instant feedback on performance. Identify bottleneck databases with the fastest/slowest execution summary.
*   **Offline Privacy**: 100% local operation. Your credentials and scripts are never shared or sent to the cloud.

---

## 🔗 Linki / Links
*   🌐 **[Oficjalna Strona / Website](https://rotgamedev.github.io/SQLSkrypter/)**
*   🎁 **[Pobierz wersją Trial / Download Trial](https://rotgamedev.github.io/SQLSkrypter/#download)**
*   📜 **[Lista Zmian / Changelog](https://github.com/rotgamedev/SQLSkrypter/releases)**

---

## 📧 Kontakt / Contact
*   **Email**: [sqlskrypter@gmail.com](mailto:sqlskrypter@gmail.com)

---
*Note: SQLSkrypter uses Microsoft SMO and ScriptDom for reliable MSSQL interaction.*
