// src/utils/errors.js
export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export const NotFound = (msg = 'Not Found') => new HttpError(404, msg);
export const BadRequest = (msg = 'Bad Request') => new HttpError(400, msg);
export const Conflict = (msg = 'Conflict') => new HttpError(409, msg);
export const Internal = (msg = 'Internal Server Error') => new HttpError(500, msg);
