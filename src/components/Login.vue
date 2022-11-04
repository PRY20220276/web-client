<template>
  <div id="login">
    <div class="project-logo">
      <img alt="project logo" src="../assets/logo.png" width="50" height="50">
      <h2>Project</h2>
    </div>
    <div class="login-form-container">
      <h1>Sign in</h1>
      <form action="" class="login-form">
        <h3>Welcome Back to Project</h3>
        <p>Have a great day</p>
        <span class="p-float-label">
          <InputText id="username" type="text" />
          <label for="username">Username</label>
        </span>
        <span class="p-float-label">
          <InputText id="password" type="password" />
          <label for="password">Password</label>
        </span>
        <p>create account? <b><a href="#">Sign up!</a></b></p>
        <router-link to="/home">
          <Button label="Sign in" />
        </router-link>
        <b><a href="#">Forget Password?</a></b>
      </form>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Login",
}
</script>

<style scoped>
#login {
  display: flex;
  flex-direction: column;
}
/* Logo */
.project-logo {
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
}
.project-logo img {
  margin-right: 15px;
}

/* login form */
.login-form-container {
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 100%;
  align-items: center;
}
.login-form {
  display: flex;
  flex-direction: column;
  width: 40vw;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: #e5e6e8;
}
.login-form input, button {
  width: 30vw;
}
.login-form span {
  margin-top: 20px;
}
.login-form button {
  margin-bottom: 20px;
}


</style>