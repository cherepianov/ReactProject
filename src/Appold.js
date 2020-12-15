import logo from './logo.svg';
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Sidebar() {
return (
  <aside className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
    <a className="nav-link" id="v-pills-vkladka-tab" data-toggle="pill" href="#v-pills-vkladka" role="tab" aria-controls="v-pills-vkladla" aria-selected="false">вкладка</a>
  </aside>
);
}
function Topmenu() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
  );
}

class Article extends React.Component {

  render() {
    if (this.props.shouldBeGreen) {
      return (
        <div className="main-content" style={{ background: "#666" }}>
          <h2>{this.props.title}</h2>
          <content>{this.props.children}</content>
        </div>
      );
    } else {
      return (
        <div className="main-content">
          <h2>{this.props.title}</h2>
          <content>{this.props.children}</content>
        </div>
      );
    }
  }

}

function Bodybody() {
  return (
      <main className="tab-content" id="v-pills-tabContent">
        <div className="tab-pane fade show active content-container" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
          <div className="main-content">
            <h2>Команда энтузиастов выпустила P2P-браузер Beaker 1.0 после двух лет разработки</h2>

            <content>
              <p>Пару лет назад стало известно, что группа энтузиастов разрабатывает P2P-браузер с поддержкой протокола Hypercore. Этот браузер получил название Beaker 1.0. Цель проекта — предоставить возможность пользователям разрабатывать и размещать свои сайты не где-то там, а «прямо в браузере». То есть можно создать локальную папку и поделиться URL-адресом, который откроет доступ сторонним пользователям к новому ресурсу.</p>

              <p>Узлы сети в этом случае — сами пользователи браузера. Beaker базируется на JavaScript c использованием движка Chromium и платформы Electron. Распространияется Beaker под лицензией MIT. Разработчики подготовили сборки для Linux, macOS и Windows</p>
            </content>
          </div>
        </div>
        <div className="tab-pane fade content-container" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
          <Article title="Команда энтузиастов выпустила P2P-браузер Beaker 1.0 после двух лет разработки" shouldBeGreen="true">
            <p>Aas das asdasdas</p>
            <p>Ioi joijojo ioj</p>
            <p>kljl jlkkljllk</p>
          </Article>
        </div>
        <div className="tab-pane fade content-container" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
          OIknmnJK kjn nm b nnMBnm nmbnmb NB M
        </div>
        <div className="tab-pane fade content-container" id="v-pills-vkladka" role="tabpanel" aria-labelledby="v-pills-vkladka-tab">.doo..</div>
        <div className="tab-pane fade content-container" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
      </main>
  )
}


function App() {
  return (
    <div className="App">
      <Topmenu />
      <Sidebar />
      <Bodybody />
    </div>
  );
}

export default App;
