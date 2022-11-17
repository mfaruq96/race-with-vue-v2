<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <SidebarComponent activeSidebar="products" />
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
                      Products
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <!-- End Breadcrum -->

            <!-- Page Heading -->
            <h1 class="h3 mb-4 text-gray-800">Products</h1>
            <!-- End Page Heading -->

            <!-- content -->
            <div class="row mb-5">
              <div class="col-lg-3 mb-3">
                <div class="card shadow">
                  <div class="card-body">
                    <div class="m-3 mb-4 div-active-product">
                      <router-link to="#">
                        <img
                          src="../../assets/img/icon/shopee-icon.png"
                          class="img-thumbnail"
                          width="15%"
                          alt=""
                        />
                        Shopee
                      </router-link>
                    </div>
                    <div class="m-3 mb-4">
                      <router-link to="#">
                        <img
                          src="../../assets/img/icon/tokopedia-icon.png"
                          class="img-thumbnail"
                          width="15%"
                          alt=""
                        />
                        Tokopedia
                      </router-link>
                    </div>
                    <div class="m-3 mb-4">
                      <router-link to="#">
                        <img
                          src="../../assets/img/icon/lazada-icon.png"
                          class="img-thumbnail"
                          width="15%"
                          alt=""
                        />
                        Lazada
                      </router-link>
                    </div>
                    <div class="m-3 mb-4">
                      <router-link to="#">
                        <img
                          src="../../assets/img/icon/blibli-icon.png"
                          class="img-thumbnail"
                          width="15%"
                          alt=""
                        />
                        Blibli
                      </router-link>
                    </div>
                    <div class="m-3 mb-4">
                      <router-link to="#">
                        <img
                          src="../../assets/img/icon/jdid-icon.jpg"
                          class="img-thumbnail"
                          width="15%"
                          alt=""
                        />
                        JD.ID
                      </router-link>
                    </div>
                    <div class="m-3 mb-4">
                      <router-link to="#">
                        <img
                          src="../../assets/img/icon/bukalapak-icon.png"
                          class="img-thumbnail"
                          width="15%"
                          alt=""
                        />
                        Bukalapak
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-9 mb-3">
                <div class="card shadow">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        class="table table-bordered table-striped"
                        id="dataTable"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th width="15%">Image</th>
                            <th>Name</th>
                            <th>SKU</th>
                            <th>Store</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Created_Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="../../assets/img/products/sunlight-example.jpg"
                                alt=""
                                class="img-thumbnail"
                              />
                            </td>
                            <td>Sunlight 5 Liter</td>
                            <td>SL-548</td>
                            <td>
                              <span class="badge badge-success"
                                >Trial Store</span
                              >
                            </td>
                            <td>2000</td>
                            <td>Rp. 100.000</td>
                            <td>31-10-2022</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/img/products/sunlight-example.jpg"
                                alt=""
                                class="img-thumbnail"
                              />
                            </td>
                            <td>Sunlight 5 Liter</td>
                            <td>SL-548</td>
                            <td>
                              <span class="badge badge-success"
                                >Trial Store</span
                              >
                            </td>
                            <td>2000</td>
                            <td>Rp. 100.000</td>
                            <td>31-10-2022</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/img/products/sunlight-example.jpg"
                                alt=""
                                class="img-thumbnail"
                              />
                            </td>
                            <td>Sunlight 5 Liter</td>
                            <td>SL-548</td>
                            <td>
                              <span class="badge badge-success"
                                >Trial Store</span
                              >
                            </td>
                            <td>2000</td>
                            <td>Rp. 100.000</td>
                            <td>31-10-2022</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/img/products/sunlight-example.jpg"
                                alt=""
                                class="img-thumbnail"
                              />
                            </td>
                            <td>Sunlight 5 Liter</td>
                            <td>SL-548</td>
                            <td>
                              <span class="badge badge-success"
                                >Trial Store</span
                              >
                            </td>
                            <td>2000</td>
                            <td>Rp. 100.000</td>
                            <td>31-10-2022</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/img/products/sunlight-example.jpg"
                                alt=""
                                class="img-thumbnail"
                              />
                            </td>
                            <td>Sunlight 5 Liter</td>
                            <td>SL-548</td>
                            <td>
                              <span class="badge badge-success"
                                >Trial Store</span
                              >
                            </td>
                            <td>2000</td>
                            <td>Rp. 100.000</td>
                            <td>31-10-2022</td>
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
  name: "ProductsView",

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
