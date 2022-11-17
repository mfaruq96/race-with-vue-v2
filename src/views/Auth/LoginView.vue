<template>
  <!-- Outer Row -->
  <div class="row justify-content-center">
    <div class="col-lg-5">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-12">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4" style="font-weight: bold">
                    <img
                      src="../../assets/img/logo/logo-race.png"
                      style="height: 50px; width: 50px"
                      alt=""
                      class="bg-primary rounded"
                    />
                    RAJA CEPAT
                  </h1>
                  <div class="text-left">
                    <h3 class="h4 text-gray-900 mb-4 ml-2">Login!</h3>
                  </div>
                </div>
                <form class="user" @submit.prevent="handleSubmit">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      id="email"
                      placeholder="Enter Email Address..."
                      v-model="email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-user form-password"
                      id="password"
                      placeholder="Password"
                      v-model="password"
                    />
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox small">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck"
                      />
                      <label class="custom-control-label" for="customCheck"
                        >Show password
                      </label>
                    </div>
                  </div>
                  <button class="btn btn-primary btn-user btn-block">
                    Login
                  </button>
                </form>
                <hr />
                <div class="text-center">
                  <router-link to="#" class="small"
                    >Forgot Password?</router-link
                  >
                </div>
                <div class="text-center">
                  <router-link to="/auth/register" class="small"
                    >Create an Account!</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

$(document).ready(function () {
  $(".custom-control-input").click(function () {
    if ($(this).is(":checked")) {
      $(".form-password").attr("type", "text");
    } else {
      $(".form-password").attr("type", "password");
    }
  });
});

export default {
  name: "LoginView",

  auth: "guest",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async handleSubmit() {
      const data = {
        email: this.email,
        password: this.password,
      };
      // console.log(data);

      await axios
        .post("login", data)
        .then((res) => {
          // console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
          // console.log(res.data);
          this.$router.push("/homepage");
        })
        .catch((err) => {
          console.log(err);
        });

      // localStorage.setItem("token", response.data.token);
    },
  },
};
</script>
