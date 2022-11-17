<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <SidebarComponent activeSidebar="integrations" />
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <TopbarComponent />
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">
            <!-- Breadcrum -->
            <div class="row">
              <div class="col">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <router-link to="/">Home</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/">Race Fullfillment</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Integrations
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <!-- End Breadcrum -->

            <!-- Page Heading -->
            <h1 class="h3 mb-4 text-gray-800">Integrations</h1>
            <!-- End Page Heading -->

            <!-- content -->
            <div class="row mb-5">
              <div class="col">
                <div class="card shadow">
                  <div class="card-body">
                    <router-link
                      to="/integrations/add"
                      class="btn btn-sm btn-primary mb-3"
                    >
                      <i class="fas fa-store mr-2"></i>
                      ADD NEW
                    </router-link>
                    <div class="table-responsive mb-3">
                      <table
                        class="table table-bordered table-striped"
                        id="dataTable"
                        width="100%"
                      >
                        <thead>
                          <tr class="text-nowrap">
                            <th>SERVICE</th>
                            <th>IDENTIFIER</th>
                            <th>TYPE</th>
                            <th>LAST IMPORTED</th>
                            <th>LAST EXPORTED</th>
                            <th>SYNC STOCK</th>
                          </tr>
                        </thead>
                        <tbody class="text-nowrap">
                          <tr>
                            <td>Shopee</td>
                            <td>SH-2012</td>
                            <td>Seller</td>
                            <td>03-11-2022</td>
                            <td>03-11-2022</td>
                            <td>1200</td>
                          </tr>
                          <tr>
                            <td>Tokopedia</td>
                            <td>SH-2012</td>
                            <td>Seller</td>
                            <td>03-11-2022</td>
                            <td>03-11-2022</td>
                            <td>1200</td>
                          </tr>
                          <tr>
                            <td>Lazada</td>
                            <td>SH-2012</td>
                            <td>Seller</td>
                            <td>03-11-2022</td>
                            <td>03-11-2022</td>
                            <td>1200</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end content -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <FooterComponent />
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <ScrollTopComponent />
    <!-- End Scroll to Top Button-->

    <!-- Logout Modal-->
    <LogoutModalComponent />
    <!-- End Logout Modal-->

    <!-- Script -->
    <script
      type="application/javascript"
      defer
      src="./frontend/vendor/jquery/jquery.min.js"
    ></script>
    <script
      type="application/javascript"
      defer
      src="./frontend/vendor/bootstrap/js/bootstrap.bundle.min.js"
    ></script>
    <script
      type="application/javascript"
      defer
      src="./frontend/vendor/jquery-easing/jquery.easing.min.js"
    ></script>
    <script
      type="application/javascript"
      defer
      src="./frontend/js/sb-admin-2.min.js"
    ></script>
    <!-- End Script -->
  </div>
</template>

<script>
// import component
import SidebarComponent from "@/components/Layout/SidebarComponent.vue";
import TopbarComponent from "@/components/Layout/TopbarComponent.vue";
import FooterComponent from "@/components/Layout/FooterComponent.vue";
import LogoutModalComponent from "@/components/Modal/LogoutModalComponent.vue";
import ScrollTopComponent from "@/components/Layout/ScrollTopComponent.vue";

// import jquery
import $ from "jquery";

export default {
  name: "IntegrationsView",

  // component
  components: {
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    LogoutModalComponent,
    ScrollTopComponent,
  },

  // mounted
  mounted() {
    this.getData();
  },

  // methods
  methods: {
    getData() {
      $(document).ready(function () {
        $("#dataTable").DataTable();
      });
    },
  },
};
</script>
