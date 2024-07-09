import "./ContatoFormulario.css";

function ContatoFormulario() {
  return (
    <>
      <section className="contato-formulario">
        <form className="form">
          <div>
            <label>Nome</label>
            <input type="text" placeholder="Seu nome" />
          </div>
          <div>
            <label>Telefone</label>
            <input type="text" placeholder="(48) 9999-9999" />
          </div>
          <div className="col-2">
            <label>Email</label>
            <input type="email" placeholder="contato@email.com" />
          </div>
          <div className="col-2">
            <label>Mensagem</label>
            <textarea rows={5} placeholder="O que você precisa?"></textarea>
          </div>
          <button className="botao col-2">Enviar Mensagem</button>
        </form>
      </section>
    </>
  );
}

export default ContatoFormulario;
