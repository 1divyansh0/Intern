export const isAlpha = (v) => /^[A-Za-z ]+$/.test(v.trim());

// Alphanumeric + allowed specials . _ - @ #
export const isUserOrPass = (v) => /^[A-Za-z0-9._@#-]+$/.test(v);

export const isGmail = (v) =>
  /^[A-Za-z0-9._%+-]+@gmail\.com$/.test(v.trim());

// +<countryCode><number> e.g., +919876543210, +14155552671
export const isIntlPhone = (v) => /^\+\d{1,3}\d{7,12}$/.test(v.trim());

export function validateSignup(values) {
  const errors = {};

  if (!values.name) errors.name = "Name is required.";
  else if (!isAlpha(values.name)) errors.name = "Only alphabets allowed.";

  if (!values.username) errors.username = "Username is required.";
  else if (!isUserOrPass(values.username))
    errors.username = "Use letters, numbers or . _ - @ # only.";

  if (!values.email) errors.email = "Email is required.";
  else if (!isGmail(values.email)) errors.email = "Use a valid Gmail address.";

  if (!values.phone) errors.phone = "Phone is required.";
  else if (!isIntlPhone(values.phone))
    errors.phone = "Use +<countrycode><number> format.";

  if (!values.password) errors.password = "Password is required.";
  else if (!isUserOrPass(values.password))
    errors.password = "Invalid password characters.";
  else if (values.password === values.username)
    errors.password = "Password must differ from username.";

  if (!values.confirm) errors.confirm = "Confirm your password.";
  else if (values.confirm !== values.password)
    errors.confirm = "Passwords do not match.";

  return errors;
}

export function validateLogin(values) {
  const errors = {};
  if (!values.username) errors.username = "Username or email is required.";
  if (!values.password) errors.password = "Password is required.";
  return errors;
}
