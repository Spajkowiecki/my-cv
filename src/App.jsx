import style from "./styles/App.module.css";

export default function App() {
  return (
    <>
      <div id="wrapper" className={style.wrapper}>
        <div className={style.container}>
          <div id="container-left">left xd</div>
          <div id="container-right">
            <div id="document-header" className={style.header}>
              <p id="header-title" className={style.title}>
                FULLSTACK
              </p>
              <h2 id="header-subtitle" className={style.subtitle}>
                PATRYK KAROLCZAK
              </h2>
            </div>
            <div id="document-content" className={style.content}>
              <ul>
                <li>
                  <p id="content-intro" className={style.myIntro}>
                    Początkujący programista z solidnym fundamentem w HTML, CSS
                    i JavaScript, zdobytym podczas realizacji projektów w
                    trakcie kursu oraz studiów. Moją pasją jest tworzenie
                    intuicyjnych współczesnych, interfejsów a przede wszystkim
                    nauka nowych technologii, takich jak React i TypeScript.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
