# SQLSkrypter

**The Enterprise-Grade Orchestrator for SQL Server DBAs.**

![GitHub release (latest by date)](https://img.shields.io/github/v/release/rotgamedev/SQLSkrypter?style=for-the-badge&color=gold)
![Edition-Standard](https://img.shields.io/badge/Edition-Standard-lightgrey?style=for-the-badge)
![Edition-PRO](https://img.shields.io/badge/Edition-PRO-gold?style=for-the-badge)
![Privacy-Local](https://img.shields.io/badge/Privacy-100%25%20Local-green?style=for-the-badge)

[English Version](#english) | [Polska Wersja](#polski)

---

<div align="center">
  <img src="img/Main Workspace.png" alt="SQLSkrypter Main Workspace" width="800">
  <p><i>Professional T-SQL orchestration across hundreds of databases.</i></p>
</div>

---

<a name="english"></a>
## 🌍 English

**SQLSkrypter** is a high-performance desktop orchestrator designed for the safe, asynchronous management of T-SQL scripts across complex SQL Server environments. Built for compliance-heavy industries, it delivers unprecedented speed without compromising on data privacy.

### 🚀 Core Value Proposition

*   **Asynchronous Parallel Processing**: Execute scripts on hundreds of databases simultaneously using the PRO-only parallel engine.
*   **Zero-Risk Simulation (Dry Run)**: Validate scripts using transactional rollbacks. Test on production with 0% risk to data.
*   **Hierarchical Management**: Organize huge fleets into logical, color-coded environment groups.
*   **Privacy-First Architecture**: No cloud, no telemetry, no leaks. Everything stays on your local machine.

### 📸 Visual Interface

<table border="0">
  <tr>
    <td>
      <img src="img/EnvConf.png" alt="Environment Configuration" width="400"><br>
      <b>Environment Management</b><br>
      Hierarchical infrastructure control.
    </td>
    <td>
      <img src="img/ParOpTi.png" alt="Parallel Execution" width="400"><br>
      <b>Parallel Optimization</b><br>
      Blazing fast multi-server execution.
    </td>
  </tr>
</table>

### 💎 Edition Matrix

| Feature | Standard (Free) | PRO Edition |
| :--- | :---: | :---: |
| **Max Servers** | 10 Servers | **Unlimited** |
| **Max Environments** | 3 Groups | **Unlimited** |
| **Execution Mode** | Sequential | **Parallel (Asynchronous)** |
| **Dry Run Simulation** | ❌ | **✅ Full Support** |
| **Tree Sessions** | ❌ | **✅ Save/Restore XML** |
| **Config Export/Import** | ❌ | **✅ Encrypted Portability** |

---

<a name="polski"></a>
## 🇵🇱 Polski

**SQLSkrypter** to profesjonalny orchestrator T-SQL, stworzony do bezpiecznego i wydajnego zarządzania skryptami w rozproszonych środowiskach SQL Server. To potężne narzędzie dla administratorów DBA, którzy zarządzają setkami instancji jednocześnie.

### 🚀 Dlaczego SQLSkrypter?

*   **Potężna Wydajność**: Uruchamiaj zmiany na setkach baz danych jednocześnie dzięki silnikowi asynchronicznemu (PRO).
*   **Bezpieczeństwo (Dry Run)**: Symuluj zmiany w ramach transakcji SQL, które są automatycznie wycofywane. 0% ryzyka dla danych.
*   **Przejrzysta Struktura**: Organizuj infrastrukturę w logiczne, kolorowane grupy środowisk (Production, Stage, Dev).
*   **Prywatność (Zero-Trust)**: Brak chmury i telemetrii. Każde hasło i skrypt pozostaje wyłącznie na Twoim komputerze.

### 🛡️ Bezpieczeństwo i Prywatność
*   **DPAPI Encryption**: Twoje dane połączeń są chronione przez systemowe szyfrowanie sprzętowe Microsoft.
*   **AST Discovery**: SQLSkrypter analizuje zapytania za pomocą `ScriptDom`, gwarantując, że przeglądanie baz danych jest zawsze operacją tylko do odczytu.
*   **Local-Only Philosophy**: Aplikacja nie wymaga i nie inicjuje żadnych połączeń zewnętrznych poza Twoją siecią SQL.

---

## ☕ Support & Contact
Help us maintain this project and support further development:

[**Official Releases**](https://github.com/rotgamedev/SQLSkrypter)

**Support & Sales**: [sqlskrypter@gmail.com](mailto:sqlskrypter@gmail.com)

---
*Note: This software utilizes Microsoft SMO and ScriptDom for industrial-grade SQL Server interaction.*
