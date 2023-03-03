export function login_validate(values: any) {

	type errorType = {
		email?: string;
		password?: string;
	};

	let errors: errorType = {};

	if (!values.email) {
		errors.email = "Email Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	if (!values.password) {
		errors.password = "Password required";
	} else if (values.password.length < 8 || values.password.length > 20) {
		errors.password = "Password must be between 8 and 20 characters";
	} else if(values.password.includes(" ")){
		errors.password = "Password cannot contain empty spaces";
	}

	return errors;
}

export function register_validate (values: any){
	
	type errorType = {
		username?: string;
		email?: string;
		password?: string;
		cpassword?: string;
	};

	let errors: errorType = {};


	if (!values.username) {
		errors.username = "Username Required";
	} else if (values.username.length < 3 || values.username.length > 20) {
		errors.username = "Username must be between 3 and 20 characters";
	}

	if (!values.email) {
		errors.email = "Email Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	if (!values.password) {
		errors.password = "Password required";
	} else if (values.password.length < 8 || values.password.length > 20) {
		errors.password = "Password must be between 8 and 20 characters";
	} else if(values.password.includes(" ")){
		errors.password = "Password cannot contain empty spaces";
	}

	if (!values.cpassword) {
		errors.cpassword = "Confirm password required";
	} else if (values.cpassword !== values.password) {
		errors.cpassword = "Passwords do not match";
	}

	return errors;
}

module.exports = {
	login_validate,
	register_validate,
}