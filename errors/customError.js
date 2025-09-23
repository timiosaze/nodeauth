import { StatusCodes } from "http-status-codes";

export class BadRequestError extends Error {
  constructor(messages = "bad request") {
    super(Array.isArray(messages) ? messages[0] : messages);
    this.name = "BadRequestError";
    this.statusCode = 400;
    this.messages = Array.isArray(messages) ? messages : [messages];
  }
}

export class NotFoundError extends Error {
  constructor(messages = "not found") {
    super(Array.isArray(messages) ? messages[0] : messages);
    this.name = "NotFoundError";
    this.statusCode = 404;
    this.messages = Array.isArray(messages) ? messages : [messages];
  }
}

export class UnauthorizedError extends Error {
  constructor(message = "not authorized") {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = 401;
    this.messages = [message];
  }
}

export class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthenticatedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
