<template>
  <div id="login">
    <div class="project-logo">
      <img
        alt="project logo"
        src="../../shared/assets/logo.png"
        width="50"
        height="50"
      />
      <h2>Project</h2>
    </div>
    <div class="register-form-container">
      <h1>Register</h1>
      <form action="" class="register-form">
        <h3>Welcome Back to Project</h3>
        <p>Have a great day</p>
        <span class="p-float-label">
          <InputText id="username" type="text" />
          <label for="username">Username</label>
        </span>
        <span class="p-float-label">
          <InputText id="username" type="text" />
          <label for="username">Email</label>
        </span>
        <span class="p-float-label">
          <InputText id="username" type="password" toggleMask />
          <label for="username">Password</label>
        </span>
        <span class="p-float-label">
          <InputText id="username" type="password" toggleMask />
          <label for="username">Repeat Password</label>
        </span>
        <p>
          create account? <b><a href="#">Sign up!</a></b>
        </p>
        <Button label="Sign in" />
        <b><a href="#">Forget Password?</a></b>
      </form>
    </div>
  </div>
</template>
  
<script lang="ts">
export default {
  name: "Regsiter",
};
</script>
  
  <style scoped>
#resister {
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
.register-form-container {
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 100%;
  align-items: center;
}
.register-form {
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
.register-form input,
button {
  width: 30vw;
}
.register-form span {
  margin-top: 20px;
}
.register-form button {
  margin-bottom: 20px;
}
</style>