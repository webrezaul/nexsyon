/* Contact Form - Submission */
window.addEventListener("DOMContentLoaded", function() {
	/* Get the form elements defined in your form HTML above */
	var form = document.getElementById("my-form");
	var button = document.getElementById("my-form-button");
	var status = document.getElementById("my-form-status");
	/* Success and Error functions for after the form is submitted  */
	function success() {
		grecaptcha.reset();
		form.reset();
		button.style = "display: none";
		status.innerHTML = "Thanks: Will be in Touch Soon!";
	}

	function error() {
		status.innerHTML = "Oops! There was a problem.";
	}

	function captcha() {
		if (grecaptcha.getResponse().length !== 0) {
			console.log("The captcha has been already solved");
		}
	}
	/* Handle the form submission event */
	form.addEventListener("submit", function(ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});


/* Helper function for sending an AJAX request */
function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}


