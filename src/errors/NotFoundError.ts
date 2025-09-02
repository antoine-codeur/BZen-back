import { ApiError } from './ApiError.js';

export class NotFoundError extends ApiError {
  constructor(message = 'Not found') {
    super(message, 404);
  }
}
