
# Instalação do Script no PC

Para instalar o script em seu computador, siga os passos abaixo.

### 1. Criação de um local para o script

Escolha um diretório no seu computador para armazenar o script. Por exemplo, recomenda-se criar uma pasta no disco **C:**, como `C:\meus-scripts`.

### 2. Adicionar a pasta ao PATH

Para poder rodar o script de qualquer lugar no terminal, você precisa adicionar o diretório `C:\meus-scripts` à variável de ambiente **PATH**. Siga os passos abaixo para isso:

#### No Windows:

1. **Abrir as Variáveis de Ambiente**:
   - Abra o menu **Iniciar** e pesquise por **Editar as variáveis de ambiente do sistema**.
   
2. **Acessar as Variáveis de Ambiente**:
   - Clique em **Variáveis de Ambiente**.

3. **Editar o PATH**:
   - Na seção **Variáveis do Sistema**, selecione a variável **Path** e clique em **Editar**.

4. **Adicionar o Novo Caminho**:
   - Clique em **Novo** e adicione o caminho da pasta onde está o script (por exemplo, `C:\meus-scripts`).

5. **Salvar as Alterações**:
   - Clique em **OK** em todas as janelas para salvar as mudanças.

#### No PowerShell:

Se preferir adicionar o caminho do script no PowerShell, siga os passos abaixo:

1. Abra o **PowerShell** (ou o terminal do VSCode).

2. Execute o seguinte comando:

```powershell
$env:Path += ";C:\meus-scripts"
```
OU

```powershell
[System.Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\meus-scripts", [System.EnvironmentVariableTarget]::User)
```
