<template>
  <!-- Outer Row -->
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-6">
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
                    <h3 class="h4 text-gray-900 mb-4 ml-2">
                      Create an Account!
                    </h3>
                  </div>
                </div>
                <form class="user" @submit.prevent="handleSubmit">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="fullname"
                      placeholder="Enter Your Name..."
                      v-model="fullname"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      id="email"
                      placeholder="Enter Email Address..."
                      v-model="email"
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        class="form-control form-control-user form-password"
                        id="password"
                        placeholder="Password"
                        v-model="password"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="password"
                        class="form-control form-control-user form-password"
                        id="repeat_password"
                        placeholder="Repeat Password"
                        v-model="repeat_password"
                      />
                    </div>
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
                    Register Account
                  </button>
                </form>
                <hr />
                <div class="text-center">
                  <router-link to="#" class="small"
                    >Forgot Password?</router-link
                  >
                </div>
                <div class="text-center">
                  <router-link to="/auth/login" class="small"
                    >Already have an account? Login!</router-link
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
  name: "RegisterView",

  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      repeat_password: "",
    };
  },

  methods: {
    async handleSubmit() {
      const data = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        repeat_password: this.repeat_password,
      };
      // console.log(data);

      await axios
        .post("auth", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push("/auth/login");
    },
  },
};
</script>
