import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validatoinErrors: Errors = {};

  err.inner.forEach(error => {
    if (error.path) validatoinErrors[error.path] = error.message;
  });

  return validatoinErrors;
}
