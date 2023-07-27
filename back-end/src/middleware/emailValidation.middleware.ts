import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class EmailValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const emailRegex =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";

    if (req.body.email.match(emailRegex)) {
      next();
    }

    res.writeHead(400, { 'content-type': 'application/json' });
    res.write(JSON.stringify({ message: 'Bad request: Invalid Email' }));
    res.end();
    return;
  }
}
