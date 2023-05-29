import { Button, Input } from "antd";
import React from "react";
import "./scss/_comments.scss";

const Comments = () => {
  return (
    <div className="comments-container">
      <h2>Comenta o pregúntale al vendedor</h2>
      <div className="comment-answer">
        <Input
          className="input-comment"
          placeholder="Escribe tu pregunta o comentario sobre el producto..."
        />
        <Button type="primary" htmlType="button" className="login-form-button">
          Preguntar
        </Button>
      </div>
      <div className="comment-users">
        <div className="comment-content">
          <div className="comment-content__header">
            <span>Encabezado del comentario</span>
          </div>
          <div className="comment-content__describe">
            <span> →</span>
            <div>
              RESPUESTA --- Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Voluptatum, suscipit repellendus optio possimus labore fugit
              dolores dolorem. Quae, a maxime, odio totam corrupti natus
              nesciunt modi eos sapiente officia accusamus.
            </div>
          </div>
          <div className="comment-content__header">
            <span>Encabezado del comentario</span>
          </div>
          <div className="comment-content__describe">
            <span> →</span>
            <div>
              RESPUESTA --- Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Voluptatum, suscipit repellendus optio possimus labore fugit
              dolores dolorem. Quae, a maxime, odio totam corrupti natus
              nesciunt modi eos sapiente officia accusamus.
            </div>
          </div>
          <div className="comment-content__header">
            <span>Encabezado del comentario</span>
          </div>
          <div className="comment-content__describe">
            <span> →</span>
            <div>
              RESPUESTA --- Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Voluptatum, suscipit repellendus optio possimus labore fugit
              dolores dolorem. Quae, a maxime, odio totam corrupti natus
              nesciunt modi eos sapiente officia accusamus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
