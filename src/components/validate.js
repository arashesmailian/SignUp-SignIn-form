export const validate = (data, type) => {
  const errors = {};

  //validating email
  if (!data.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  } else {
    delete errors.email;
  }

  //validating password
  if (!data.password) {
    errors.password = "Password required";
  } else if (data.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    //validating name
    if (!data.name.trim()) {
      errors.name = "Username required";
    } else {
      delete errors.name;
    }

    //validating confirm password
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm the Password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password does not match";
    } else {
      delete errors.confirmPassword;
    }

    //validating isAccepted
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept our regulations";
    }
  }

  return errors;
};
