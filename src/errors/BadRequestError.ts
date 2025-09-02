import { ApiError } from './ApiError.js';

export class BadRequestError extends ApiError {
  constructor(message = 'Bad request') {
    super(message, 400);
  }
}
