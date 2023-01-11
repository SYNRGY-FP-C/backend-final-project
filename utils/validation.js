function validateEmail(mail) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
    return true;
  }
  return false;
}

module.exports = { validateEmail };
