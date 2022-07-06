import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";

console.log(opcoes);

export default function Ordenador() {
  return (
    <button className={styles.ordenador}>
      <span>Ordenar por: </span>
      <div className={styles.ordenador__options}>
        {opcoes.map((opcao) => (
          <div className={styles.ordenador__options} key={opcao.value}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
