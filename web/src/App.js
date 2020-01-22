import React, { useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
// componente = bloco isolado de html , css, js no qual nao interfere no restante da aplicacao.
// estado  = informacoes mantidas pelo componente (imutabilidade)
// propriedade = atributo  / informacoes que o componente pai passa para o componente filho

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>

        <ul>
          <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/39173306?s=460&v=4" alt="FernandoGuide"/>
              </header>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
