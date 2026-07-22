import { body, validationResult } from 'express-validator';
export const validate = (schema) => [...schema, (req, res, next) => { const errors = validationResult(req); if (!errors.isEmpty()) return 400; next(); }];
