import React, { useState, useEffect } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

// componente = bloco isolado de html , css, js no qual nao interfere no restante da aplicacao.
// estado  = informacoes mantidas pelo componente (imutabilidade)
// propriedade = atributo  / informacoes que o componente pai passa para o componente filho

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithunUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);

        // console.log(position);
      },
      error => {
        console.log(error);
      },
      {
        timeout: 30000
      }
    );
  }, []);


  async function handleAddDev(e){
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="username_github"
              required
              value={github_username}
              onChange={e => setGithunUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/39173306?s=460&v=4"
                alt="FernandoGuide"
              />
              <div className="user-info">
                <strong>FernandoGuide</strong>
                <span>Java,Angular,ReactJS,React-Native,Node.JS</span>
              </div>
            </header>
            <p>Apaixonado por tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/fernandoguide">
              Acessa Perfil no github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/39173306?s=460&v=4"
                alt="FernandoGuide"
              />
              <div className="user-info">
                <strong>FernandoGuide</strong>
                <span>Java,Angular,ReactJS,React-Native,Node.JS</span>
              </div>
            </header>
            <p>Apaixonado por tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/fernandoguide">
              Acessa Perfil no github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/39173306?s=460&v=4"
                alt="FernandoGuide"
              />
              <div className="user-info">
                <strong>FernandoGuide</strong>
                <span>Java,Angular,ReactJS,React-Native,Node.JS</span>
              </div>
            </header>
            <p>Apaixonado por tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/fernandoguide">
              Acessa Perfil no github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/39173306?s=460&v=4"
                alt="FernandoGuide"
              />
              <div className="user-info">
                <strong>FernandoGuide</strong>
                <span>Java,Angular,ReactJS,React-Native,Node.JS</span>
              </div>
            </header>
            <p>Apaixonado por tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/fernandoguide">
              Acessa Perfil no github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
