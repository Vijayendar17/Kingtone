// Utility functions

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  validateEmail,
  formatDate,
  generateId,
  capitalize
};