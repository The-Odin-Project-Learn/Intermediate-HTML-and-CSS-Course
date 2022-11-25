let gradeField = document.querySelector("input[name=password]");

gradeField.addEventListener("invalid", function () {
  this.setCustomValidity('');
  if (!this.validity.valid) {
    this.setCustomValidity('! Password do not match');
  }
});