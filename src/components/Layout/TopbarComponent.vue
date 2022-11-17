<template>
  <div class="row mb-4">
    <div class="col">
      <div class="card shadow">
        <div class="card-body">
          <div class="d-flex justify-content-between mr-3">
            <!--  -->
            <!-- Sidebar Toggle (Topbar) -->
            <button
              id="sidebarToggleTop"
              class="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i class="fa fa-bars"></i>
            </button>
            <!--  -->
            <div class="topbar-divider d-none d-sm-block"></div>
            <div class="dropdown">
              <span class="">
                <img
                  class="img-profile rounded-circle border mr-2 mt-1"
                  src="../../assets/logo.png"
                  style="width: 30px"
                />
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                  User
                </span>
              </span>
              <div class="dropdown-content dropdown-menu-right">
                <router-link to="/profile" class="dropdown-item">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </router-link>
                <a
                  class="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i
                    class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                  ></i>
                  Logout
                </a>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopbarComponent",
};
</script>

<style></style>
