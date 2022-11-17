<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <SidebarComponent activeSidebar="inbound" />
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
                      Inbound
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <!-- End Breadcrum -->

            <!-- Page Heading -->
            <h1 class="h3 mb-4 text-gray-800">Inbound</h1>
            <!-- End Page Heading -->

            <!-- content -->
            <div class="row mb-5">
              <div class="col-lg-12">
                <div class="card shadow">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        class="table table-striped"
                        id="dataTable"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Kode Inbound</th>
                            <th>Dikirim Ke</th>
                            <th>Tanggal Inbound</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody class="text-nowrap">
                          <tr>
                            <td>1</td>
                            <td>
                              <router-link to="#"> IN-913283232 </router-link>
                            </td>
                            <td>Kec. Cilodong, Kota Depok, Jawa Barat 16415</td>
                            <td>2020-03-21 14:20:12</td>
                            <td>
                              <span class="badge badge-warning">
                                Menunggu Penerimaan
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              <router-link to="#"> IN-913283142 </router-link>
                            </td>
                            <td>Kec. Cilodong, Kota Depok, Jawa Barat 16415</td>
                            <td>2020-03-21 14:20:12</td>
                            <td>
                              <span class="badge badge-primary">
                                Sudah Diterima
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              <router-link to="#"> IN-913283142 </router-link>
                            </td>
                            <td>Kec. Cilodong, Kota Depok, Jawa Barat 16415</td>
                            <td>2020-03-21 14:20:12</td>
                            <td>
                              <span class="badge badge-info">
                                Menunggu Pengiriman
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>
                              <router-link to="#"> IN-913283142 </router-link>
                            </td>
                            <td>Kec. Cilodong, Kota Depok, Jawa Barat 16415</td>
                            <td>2020-03-21 14:20:12</td>
                            <td>
                              <span class="badge badge-success"> Selesai </span>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              <router-link to="#"> IN-913283142 </router-link>
                            </td>
                            <td>Kec. Cilodong, Kota Depok, Jawa Barat 16415</td>
                            <td>2020-03-21 14:20:12</td>
                            <td>
                              <span class="badge badge-success"> Selesai </span>
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>
                              <router-link to="#"> IN-913283142 </router-link>
                            </td>
                            <td>Kec. Cilodong, Kota Depok, Jawa Barat 16415</td>
                            <td>2020-03-21 14:20:12</td>
                            <td>
                              <span class="badge badge-success"> Selesai </span>
                            </td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>
                              <router-link to="#"> IN-913283142 </router-link>
                            </td>
                            <td>Kec. Cilodong, Kota Depok, Jawa Barat 16415</td>
                            <td>2020-03-21 14:20:12</td>
                            <td>
                              <span class="badge badge-success"> Selesai </span>
                            </td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>
                              <router-link to="#"> IN-913283142 </router-link>
                            </td>
                            <td>Kec. Cilodong, Kota Depok, Jawa Barat 16415</td>
                            <td>2020-03-21 14:20:12</td>
                            <td>
                              <span class="badge badge-success"> Selesai </span>
                            </td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>
                              <router-link to="#"> IN-913283142 </router-link>
                            </td>
                            <td>Kec. Cilodong, Kota Depok, Jawa Barat 16415</td>
                            <td>2020-03-21 14:20:12</td>
                            <td>
                              <span class="badge badge-success"> Selesai </span>
                            </td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>
                              <router-link to="#"> IN-913283142 </router-link>
                            </td>
                            <td>Kec. Cilodong, Kota Depok, Jawa Barat 16415</td>
                            <td>2020-03-21 14:20:12</td>
                            <td>
                              <span class="badge badge-success"> Selesai </span>
                            </td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>
                              <router-link to="#"> IN-913283142 </router-link>
                            </td>
                            <td>Kec. Cilodong, Kota Depok, Jawa Barat 16415</td>
                            <td>2020-03-21 14:20:12</td>
                            <td>
                              <span class="badge badge-success"> Selesai </span>
                            </td>
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
  name: "InboundView",

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
