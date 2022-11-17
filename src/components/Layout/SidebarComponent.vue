<template>
  <div class="bg-gradient-dark">
    <!-- Sidebar -->
    <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
      <!-- Sidebar - Brand -->
      <router-link
        class="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div class="sidebar-brand-icon">
          <!-- <i class="fas fa-code"></i> -->
          <img
            src="../../assets/img/logo/logo-race.png"
            class="img-profile"
            width="60"
          />
        </div>
        <div class="sidebar-brand-text">Race Fullfillment</div>
      </router-link>

      <!-- Divider -->
      <hr class="sidebar-divider mt-3" />

      <!-- Heading -->
      <div class="sidebar-heading">Dashboard</div>

      <!-- Nav Item - Dashboard -->
      <div v-if="activeSidebar == 'dashboard'">
        <!--  -->
        <li class="nav-item active div-active-sidebar">
          <router-link class="nav-link" to="/dashboard">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></router-link
          >
        </li>
      </div>
      <div v-else>
        <!--  -->
        <li class="nav-item">
          <router-link class="nav-link" to="/dashboard">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></router-link
          >
        </li>
      </div>

      <!-- Divider -->
      <hr class="sidebar-divider mt-2" />

      <!-- Heading -->
      <div class="sidebar-heading">Stock</div>

      <!-- Nav Item - Inventory -->
      <div v-if="activeSidebar == 'inventory'">
        <!--  -->
        <li class="nav-item active div-active-sidebar">
          <router-link class="nav-link" to="/inventory">
            <i class="fas fa-fw fa-archive"></i>
            <span>Inventory</span></router-link
          >
        </li>
        <!-- Nav Item - Products -->
        <li class="nav-item">
          <router-link class="nav-link" to="/products">
            <i class="fas fa-fw fa-boxes"></i>
            <span>Products</span></router-link
          >
        </li>
      </div>
      <div v-else-if="activeSidebar == 'products'">
        <!--  -->
        <li class="nav-item">
          <router-link class="nav-link" to="/inventory">
            <i class="fas fa-fw fa-archive"></i>
            <span>Inventory</span></router-link
          >
        </li>
        <!-- Nav Item - Products -->
        <li class="nav-item active div-active-sidebar">
          <router-link class="nav-link" to="/products">
            <i class="fas fa-fw fa-boxes"></i>
            <span>Products</span></router-link
          >
        </li>
      </div>
      <div v-else>
        <!--  -->
        <li class="nav-item">
          <router-link class="nav-link" to="/inventory">
            <i class="fas fa-fw fa-archive"></i>
            <span>Inventory</span></router-link
          >
        </li>
        <!-- Nav Item - Products -->
        <li class="nav-item">
          <router-link class="nav-link" to="/products">
            <i class="fas fa-fw fa-boxes"></i>
            <span>Products</span></router-link
          >
        </li>
      </div>

      <!-- Divider -->
      <hr class="sidebar-divider mt-2" />

      <!-- Heading -->
      <div class="sidebar-heading">Shipment</div>

      <!-- Nav Item - Inbound -->
      <div v-if="activeSidebar == 'inbound'">
        <!--  -->
        <li class="nav-item active div-active-sidebar">
          <router-link class="nav-link" to="/inbound">
            <i class="fas fa-arrow-circle-down"></i>
            <span>Inbound</span></router-link
          >
        </li>
        <!-- Nav Item - Outbound -->
        <li class="nav-item">
          <router-link class="nav-link" to="/outbound">
            <i class="fas fa-arrow-circle-up"></i>
            <span>Outbound</span></router-link
          >
        </li>
        <!-- Nav Item - Tracking -->
        <li class="nav-item">
          <router-link class="nav-link" to="/tracking">
            <i class="fas fa-crosshairs"></i>
            <span>Tracking</span></router-link
          >
        </li>
        <!-- Nav Item - Orders -->
        <li class="nav-item">
          <router-link class="nav-link" to="/orders">
            <i class="fas fa-fw fa-history"></i>
            <span>Orders</span></router-link
          >
        </li>
      </div>
      <div v-else-if="activeSidebar == 'outbound'">
        <!--  -->
        <li class="nav-item">
          <router-link class="nav-link" to="/inbound">
            <i class="fas fa-arrow-circle-down"></i>
            <span>Inbound</span></router-link
          >
        </li>
        <!-- Nav Item - Outbound -->
        <li class="nav-item active div-active-sidebar">
          <router-link class="nav-link" to="/outbound">
            <i class="fas fa-arrow-circle-up"></i>
            <span>Outbound</span></router-link
          >
        </li>
        <!-- Nav Item - Tracking -->
        <li class="nav-item">
          <router-link class="nav-link" to="/tracking">
            <i class="fas fa-crosshairs"></i>
            <span>Tracking</span></router-link
          >
        </li>
        <!-- Nav Item - Orders -->
        <li class="nav-item">
          <router-link class="nav-link" to="/orders">
            <i class="fas fa-fw fa-history"></i>
            <span>Orders</span></router-link
          >
        </li>
      </div>
      <div v-else-if="activeSidebar == 'tracking'">
        <!--  -->
        <li class="nav-item">
          <router-link class="nav-link" to="/inbound">
            <i class="fas fa-arrow-circle-down"></i>
            <span>Inbound</span></router-link
          >
        </li>
        <!-- Nav Item - Outbound -->
        <li class="nav-item">
          <router-link class="nav-link" to="/outbound">
            <i class="fas fa-arrow-circle-up"></i>
            <span>Outbound</span></router-link
          >
        </li>
        <!-- Nav Item - Tracking -->
        <li class="nav-item active div-active-sidebar">
          <router-link class="nav-link" to="/tracking">
            <i class="fas fa-crosshairs"></i>
            <span>Tracking</span></router-link
          >
        </li>
        <!-- Nav Item - Orders -->
        <li class="nav-item">
          <router-link class="nav-link" to="/orders">
            <i class="fas fa-fw fa-history"></i>
            <span>Orders</span></router-link
          >
        </li>
      </div>
      <div v-else-if="activeSidebar == 'orders'">
        <!--  -->
        <li class="nav-item">
          <router-link class="nav-link" to="/inbound">
            <i class="fas fa-arrow-circle-down"></i>
            <span>Inbound</span></router-link
          >
        </li>
        <!-- Nav Item - Outbound -->
        <li class="nav-item">
          <router-link class="nav-link" to="/outbound">
            <i class="fas fa-arrow-circle-up"></i>
            <span>Outbound</span></router-link
          >
        </li>
        <!-- Nav Item - Tracking -->
        <li class="nav-item">
          <router-link class="nav-link" to="/tracking">
            <i class="fas fa-crosshairs"></i>
            <span>Tracking</span></router-link
          >
        </li>
        <!-- Nav Item - Orders -->
        <li class="nav-item active div-active-sidebar">
          <router-link class="nav-link" to="/orders">
            <i class="fas fa-fw fa-history"></i>
            <span>Orders</span></router-link
          >
        </li>
      </div>
      <div v-else>
        <!--  -->
        <li class="nav-item">
          <router-link class="nav-link" to="/inbound">
            <i class="fas fa-arrow-circle-down"></i>
            <span>Inbound</span></router-link
          >
        </li>
        <!-- Nav Item - Outbound -->
        <li class="nav-item">
          <router-link class="nav-link" to="/outbound">
            <i class="fas fa-arrow-circle-up"></i>
            <span>Outbound</span></router-link
          >
        </li>
        <!-- Nav Item - Tracking -->
        <li class="nav-item">
          <router-link class="nav-link" to="/tracking">
            <i class="fas fa-crosshairs"></i>
            <span>Tracking</span></router-link
          >
        </li>
        <!-- Nav Item - Orders -->
        <li class="nav-item">
          <router-link class="nav-link" to="/orders">
            <i class="fas fa-fw fa-history"></i>
            <span>Orders</span></router-link
          >
        </li>
      </div>

      <!-- Divider -->
      <hr class="sidebar-divider mt-2" />

      <!-- Heading -->
      <div class="sidebar-heading">Settings</div>

      <!-- Nav Item - Integrations -->
      <div v-if="activeSidebar == 'integrations'">
        <!--  -->
        <li class="nav-item div-active-sidebar">
          <router-link class="nav-link" to="/integrations">
            <i class="fas fa-fw fa-cogs"></i>
            <span>Integrations</span></router-link
          >
        </li>
      </div>
      <div v-else>
        <!--  -->
        <li class="nav-item">
          <router-link class="nav-link" to="/integrations">
            <i class="fas fa-fw fa-cogs"></i>
            <span>Integrations</span></router-link
          >
        </li>
      </div>

      <!-- Divider -->
      <hr class="sidebar-divider mt-2" />

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
    <!-- End of Sidebar -->
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  props: ["activeSidebar"],
};
</script>
