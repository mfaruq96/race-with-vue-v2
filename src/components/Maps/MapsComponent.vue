<template>
  <div>
    <GmapMap :center="center" :zoom="6" style="width: 100%; height: 450px">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      />
    </GmapMap>
    <h4 class="mt-3"><strong>Warehouse</strong></h4>
    <div class="row mt-4">
      <div class="col-lg-3 col-md-6 text-center mb-2">
        <h6>
          <i class="fas fa-map-marker-alt mr-1"></i>
          <strong>Bekasi</strong>
        </h6>
        <p>1000</p>
      </div>
      <div class="col-lg-3 col-md-6 text-center mb-2">
        <h6>
          <i class="fas fa-map-marker-alt mr-1"></i>
          <strong>Bandung</strong>
        </h6>
        <p>1000</p>
      </div>
      <div class="col-lg-3 col-md-6 text-center mb-2">
        <h6>
          <i class="fas fa-map-marker-alt mr-1"></i>
          <strong>Tangerang</strong>
        </h6>
        <p>1000</p>
      </div>
      <div class="col-lg-3 col-md-6 text-center mb-2">
        <h6>
          <i class="fas fa-map-marker-alt mr-1"></i>
          <strong>Surabaya</strong>
        </h6>
        <p>1000</p>
      </div>
    </div>
  </div>
</template>

<script>
const bandung = { lat: -6.9032739, lng: 107.5731165 };
const bekasi = { lat: -6.2475834, lng: 106.9904924 };
const tangerang = { lat: -6.120189892529338, lng: 106.65191909650768 };
const surabaya = { lat: -7.261991519244702, lng: 112.75868582449166 };
const centerMap = { lat: -7.292655837368606, lng: 109.99625935394725 };

export default {
  name: "MapsComponent",

  // maps
  data() {
    return {
      coordinates: {
        lat: 0,
        lng: 0,
      },
      markers: [
        {
          position: bandung,
        },
        {
          position: bekasi,
        },
        {
          position: tangerang,
        },
        {
          position: surabaya,
        },
      ],
      center: centerMap,
    };
  },
  //
  created() {
    this.$getLocation({})
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((error) => alert(error));
  },
  //
  methods: {
    drawMarkers() {
      this.markers = [
        {
          position: bandung,
        },
        {
          position: bekasi,
        },
        {
          position: tangerang,
        },
        {
          position: surabaya,
        },
      ];
    },
    Bandung() {
      alert("Bandung");
    },
    clearMap() {
      alert("clearMap");
    },
  },
};
</script>
