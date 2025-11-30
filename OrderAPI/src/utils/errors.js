// src/utils/errors.js

// Classe base para erros HTTP personalizados
// Estende a classe padrão Error do JavaScript
export class HttpError extends Error {
  constructor(status, message) {
    super(message);      // Chama o construtor da classe Error para definir a mensagem
    this.status = status; // Adiciona o código de status HTTP ao erro
  }
}

// Função auxiliar para criar erro 404 (Not Found)
// Usada quando um recurso não é encontrado
export const NotFound = (msg = 'Not Found') => new HttpError(404, msg);

// Função auxiliar para criar erro 400 (Bad Request)
// Usada quando os dados enviados pelo cliente são inválidos
export const BadRequest = (msg = 'Bad Request') => new HttpError(400, msg);

// Função auxiliar para criar erro 409 (Conflict)
// Usada quando há conflito, por exemplo, ao tentar criar algo que já existe
export const Conflict = (msg = 'Conflict') => new HttpError(409, msg);

// Função auxiliar para criar erro 500 (Internal Server Error)
// Usada para erros inesperados no servidor
export const Internal = (msg = 'Internal Server Error') => new HttpError(500, msg);
