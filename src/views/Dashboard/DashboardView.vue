<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <SidebarComponent activeSidebar="dashboard" />
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
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <!-- End Breadcrum -->

            <!-- Page Heading -->
            <h1 class="h3 mb-4 text-gray-800">Dashboard</h1>
            <!-- End Page Heading -->

            <!-- content -->

            <!-- count -->
            <div class="row mb-4">
              <!-- request pickup -->
              <div class="col-lg-3 col-md-6 mb-3">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >
                          Request Pickup
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          {{ request_pickup.length }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-archive fa-3x text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end request pickup -->
              <!-- request inbound -->
              <div class="col-lg-3 col-md-6 mb-3">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-success text-uppercase mb-1"
                        >
                          Inbound
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          {{ inbound.length }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-plus-circle fa-3x text-success"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end inbound -->
              <!-- request proccess -->
              <div class="col-lg-3 col-md-6 mb-3">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >
                          Proccess
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          {{ proses.length }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-folder-open fa-3x text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end proccess -->
              <!-- request outbound -->
              <div class="col-lg-3 col-md-6 mb-3">
                <div class="card border-left-danger shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-danger text-uppercase mb-1"
                        >
                          Outbound
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          {{ outbound.length }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-minus-circle fa-3x text-danger"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end outbound -->
            </div>
            <!-- end count -->

            <!-- status and maps -->
            <div class="row mb-3">
              <div class="col-md-6 mb-3">
                <div class="card shadow">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Last Order <br />
                      <span class="text-secondary">RC-0821-0292282</span>
                    </h6>
                  </div>
                  <div class="card-body">
                    <table class="table" width="100%">
                      <tbody>
                        <tr>
                          <th width="10%">
                            <i class="far fa-dot-circle text-warning fa-2x"></i>
                          </th>
                          <td align="left">
                            <strong>Inbound</strong> <br />
                            Kamis, 20 Agustus 2018 11.00 PM
                          </td>
                        </tr>
                        <tr>
                          <th width="10%">
                            <i
                              class="far fa-dot-circle text-info text-primary fa-2x"
                            ></i>
                          </th>
                          <td align="left">
                            <strong>QC Checking</strong> <br />
                            Jumat, 21 Agustus 2018 08.00 PM
                          </td>
                        </tr>
                        <tr>
                          <th width="10%">
                            <i
                              class="far fa-dot-circle text-info text-primary fa-2x"
                            ></i>
                          </th>
                          <td align="left">
                            <strong>Labeling</strong> <br />
                            Kamis, 20 Agustus 2018 11.00 PM
                          </td>
                        </tr>
                        <tr>
                          <th width="10%">
                            <i
                              class="far fa-dot-circle text-info text-primary fa-2x"
                            ></i>
                          </th>
                          <td align="left">
                            <strong>Storing</strong> <br />
                            Kamis, 20 Agustus 2018 11.00 PM
                          </td>
                        </tr>
                        <tr>
                          <th width="10%">
                            <i
                              class="far fa-dot-circle text-info text-primary fa-2x"
                            ></i>
                          </th>
                          <td align="left">
                            <strong>Packing</strong> <br />
                            Kamis, 20 Agustus 2018 11.00 PM
                          </td>
                        </tr>
                        <tr>
                          <th width="10%">
                            <i
                              class="far fa-dot-circle text-danger text-primary fa-2x"
                            ></i>
                          </th>
                          <td align="left">
                            <strong>Outbound</strong> <br />
                            Kamis, 20 Agustus 2018 11.00 PM
                          </td>
                        </tr>
                        <tr>
                          <th width="10%">
                            <i
                              class="fas fa-car text-primary text-primary fa-2x"
                            ></i>
                          </th>
                          <td align="left">
                            <strong>Delivery</strong> <br />
                            Kamis, 20 Agustus 2018 11.00 PM
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="card shadow">
                  <div class="card-body">
                    <MapsComponent />
                  </div>
                </div>
              </div>
            </div>
            <!-- end status and maps -->

            <!-- charts -->
            <div class="row mb-5">
              <div class="col-lg-6 mb-3">
                <div class="card shadow">
                  <div class="card-body">
                    <LineChartComponent />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-3">
                <div class="card shadow">
                  <div class="card-body">
                    <PieChartComponent />
                  </div>
                </div>
              </div>
            </div>
            <!-- end charts -->

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

// import component tambahan
import LineChartComponent from "@/components/Chart/LineChartComponent.vue";
import PieChartComponent from "@/components/Chart/PieChartComponent.vue";
import MapsComponent from "@/components/Maps/MapsComponent.vue";

// import axios
import axios from "axios";

export default {
  name: "DashboardView",

  // component
  components: {
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    LogoutModalComponent,
    ScrollTopComponent,
    LineChartComponent,
    PieChartComponent,
    MapsComponent,
  },

  // data
  data() {
    return {
      request_pickup: [],
      inbound: [],
      proses: [],
      outbound: [],
    };
  },

  // method
  methods: {
    setJumlah(data) {
      this.request_pickup = data;
    },

    setInbound(data) {
      this.inbound = data;
    },

    setProses(data) {
      this.proses = data;
    },

    setOutbound(data) {
      this.outbound = data;
    },
  },

  // mounted
  mounted() {
    // request pickup
    axios
      .get("http://localhost:3000/request-pickup")
      .then(
        (response) => this.setJumlah(response.data)
        // console.log(response.data)
      )
      .catch((error) => console.log(error));

    // inbound
    axios
      .get("http://localhost:3000/inbound")
      .then(
        (response) => this.setInbound(response.data)
        // console.log(response.data)
      )
      .catch((error) => console.log(error));

    // proses
    axios
      .get("http://localhost:3000/proses")
      .then(
        (response) => this.setProses(response.data)
        // console.log(response.data)
      )
      .catch((error) => console.log(error));

    // outbound
    axios
      .get("http://localhost:3000/outbound")
      .then(
        (response) => this.setOutbound(response.data)
        // console.log(response.data)
      )
      .catch((error) => console.log(error));
  },
};
</script>
