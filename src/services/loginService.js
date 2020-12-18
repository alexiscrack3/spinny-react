import execute from "./execute";

const loginService = {
  async signIn(email, password) {
    return execute("/auth/sign_in", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },
};

export default loginService;
