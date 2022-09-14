<template>
  <div class="pay_bills_wrap w-100">
    <div class="users">
      <admin-nav name="Users" />
      <div class="back__button">
        <font-awesome-icon
          @click="$router.go(-1)"
          role="button"
          class="fa-1x text-dark pl-1"
          :icon="['fas', 'arrow-left']"
        />
      </div>
      <div class="create__assets__wrap py-4">
        <div class="text-center">
          <h1 style="color: #004345">Add Property</h1>
        </div>
        <form action="" @submit.prevent="addAsset()">
          <div class="row pt-2">
            <div class="col-md-6">
              <!-- <div class="form-group mx-2"> -->
              <!-- <label for="" class="">Location</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter location Name"
                  v-model="assets.location"
                /> -->
              <!-- <div>
                <b-form-select
                  v-model="assets.location"
                  :options="options"
                ></b-form-select>
              </div> -->
              <div class="form-group mx-2">
                <label class="font-weight-bolder">Choose Location</label>
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  v-model="assets.location"
                >
                  <option>Select</option>
                  <option
                    v-for="(option, index) in locations"
                    :key="index"
                    :value="option"
                    class="colour"
                    id="selectCountry"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <!-- <small v-if="location_error.length > 0" class="text-danger"
                >{{ location_error }}
              </small> -->
              <!-- </div> -->
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Layout</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter layout name Name"
                  v-model="assets.layout_name"
                />
                <small v-if="layout_name_error.length > 0" class="text-danger"
                  >{{ layout_name_error }}
                </small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Token Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter token name Name"
                  v-model="assets.token_name"
                />
                <small v-if="token_name_error.length > 0" class="text-danger"
                  >{{ token_name_error }}
                </small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Min Roi</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter min roi"
                  v-model="assets.min_roi"
                />
                <small v-if="min_roi_error.length > 0" class="text-danger"
                  >{{ min_roi_error }}
                </small>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Size</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter size"
                  v-model="assets.size"
                />
                <small v-if="size_error.length > 0" class="text-danger"
                  >{{ size_error }}
                </small>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Total Token Quantity</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter total token quantity"
                  v-model="assets.total_token_quantity"
                />
                <small
                  v-if="total_token_quantity_error.length > 0"
                  class="text-danger"
                  >{{ total_token_quantity_error }}
                </small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Token Price</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter token price"
                  v-model="assets.token_price"
                />
                <small v-if="token_price_error.length > 0" class="text-danger"
                  >{{ token_price_error }}
                </small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Whole Price</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter whole price"
                  v-model="assets.whole_price"
                />
                <small v-if="whole_price_error.length > 0" class="text-danger"
                  >{{ whole_price_error }}
                </small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Description1</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter distance"
                  v-model="assets.description1"
                />
                <small v-if="description1_error.length > 0" class="text-danger"
                  >{{ description1_error }}
                </small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Description2</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter distance"
                  v-model="assets.description2"
                />
                <small v-if="description2_error.length > 0" class="text-danger"
                  >{{ description2_error }}
                </small>
              </div>
            </div>
            <!-- <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Distance3</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter distance"
                  v-model="assets.description3"
                  
                />
                
              </div>
            </div> -->
            <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Documentation</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter distance"
                  v-model="assets.documentation"
                />
                <small v-if="documentation_error.length > 0" class="text-danger"
                  >{{ documentation_error }}
                </small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Current Market Price</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter current market price"
                  v-model="assets.current_market_price"
                />
                <!-- <small
                  v-if="current_market_price_error.length > 0"
                  class="text-danger"
                  >{{ current_market_price_error }}
                </small> -->
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2">
                <label for="" class="">Coordinate</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter coordinates"
                  v-model="assets.coordinates"
                />
                <small v-if="coordinates_error.length > 0" class="text-danger"
                  >{{ coordinates_error }}
                </small>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group mx-2">
                <!-- <label for="" class="">DDR</label> -->
                <!-- <v-file-input
                  placeholder="Pick a Valid Document"
                  prepend-icon="mdi-attachment"
                  label="Due Deligence Report"
                  @change="upload_due_deligence_report()"
                /> -->
                <v-file-input
                  placeholder="Pick a Valid Document"
                  label="Due Deligence Report"
                  @change="upload_due_deligence_report()"
                  multiple
                />
                <small
                  v-if="due_deligence_report_error.lenght > 0"
                  class="text-danger"
                  >{{ due_deligence_report_error }}
                </small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2">
                <v-file-input
                  placeholder="Pick a Valid Document"
                  multiple
                  label="Token Audit Report"
                  @change="upload_token_audit_report()"
                />
                <small
                  v-if="token_audit_report_error.length > 0"
                  class="text-danger"
                  >{{ token_audit_report_error }}
                </small>
              </div>
            </div>
            <div class="col-md-12">
              <div class="upload_wrapper">
                <div class="drag_area text-center py-4" id="drag_area">
                  <div class="">
                    <div class="">
                      <ion-icon
                        style="font-size: 24px"
                        name="cloud-upload-outline"
                      ></ion-icon>
                    </div>
                    <header class="text-dark" id="textDrag">
                      Drag and Upload File
                    </header>
                    <!-- <span role="button" class="text-dark" id="button"
                      >Upload File</span
                    > -->
                    <input
                      @change="upload_image()"
                      id="input"
                      type="file"
                      class="file"
                      hidden
                    />
                    <small v-if="image_error.length > 0" class="text-danger"
                      >{{ image_error }}
                    </small>
                  </div>
                </div>
              </div>
              <!-- <upload /> -->
              <!-- <v-file-input
                
                placeholder="Pick an Image of You and Your Shop"
                prepend-icon="mdi-camera"
                label="Image of You and Your Shop"
                @change="upload_passport_photo()"
              /> -->
            </div>
          </div>
          <div class="create__wrap text-center mt-3">
            <v-btn
              class="register_button"
              value=""
              :loading="loading"
              type="submit"
              ><span>Create Property</span></v-btn
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import creator_sidebar from "~/components/creator_sidebar.vue";
export default {
  components: { creator_sidebar },
  data() {
    return {
      tab: null,
      loading: false,
      // selected: null,
      // options: [
      //   { value: "a", text: "lagos" },
      //   { value: "b", text: "abuja" },
      //   { value: "c", text: "uyo" },
      // ],
      assets: {
        location: "",
        layout_name: "",
        token_name: "",
        image: "",
        min_roi: "",
        total_token_quantity: "",
        token_price: "",
        whole_price: "",
        description1: "",
        description2: "",
        // description3: "",
        documentation: "",
        coordinates: "",
        size: "",
        current_market_price: "",
        due_deligence_report: "",
        token_audit_report: "",
      },
<<<<<<< HEAD
      locations: ["abuja", "lagos", "uyo"],
=======
      locations: ["Abuja", "Lagos", "Uyo"],
>>>>>>> 83e822a21a9440c5b29221fb481a67f858f38a61
      errors: {},
      coordinates_error: {},
      description1_error: {},
      description2_error: {},
      documentation_error: {},
      due_deligence_report_error: {},
      image_error: {},
      layout_name_error: {},
      location_error: {},
      min_roi_error: {},
      size_error: {},
      token_audit_report_error: {},
      token_name_error: {},
      token_price_error: {},
      total_token_quantity_error: {},
      whole_price_error: {},
      subscriptions: {},
    };
  },
  methods: {
    addAsset() {
      this.loading = true;
      const formData = new FormData();
      formData.append("location", this.assets.location);
      formData.append("layout_name", this.assets.layout_name);
      formData.append("token_name", this.assets.token_name);
      formData.append("image", this.assets.image);
      formData.append("min_roi", this.assets.min_roi);
      formData.append("total_token_quantity", this.assets.total_token_quantity);
      formData.append("token_price", this.assets.token_price);
      formData.append("whole_price", this.assets.whole_price);
      formData.append("description1", this.assets.description1);
      formData.append("description2", this.assets.description2);
      // formData.append("description3", this.assets.description3);
      formData.append("documentation", this.assets.documentation);
      formData.append("coordinates", this.assets.coordinates);
      formData.append("current_market_price", this.assets.current_market_price);
      formData.append("due_deligence_report", this.assets.due_deligence_report);
      formData.append("token_audit_report", this.assets.token_audit_report);
      formData.append("size", this.assets.size);
      formData.append("_method", "POST");
      this.$axios
        .post("/admin/addAsset", formData)
        .then((res) => {
          console.log(res);
          this.$toast.success("asset added successfully", { timeout: 5000 });
          this.assets = {};
          this.loading = false;
        })
        .catch((error) => {
          console.log(error.response.data);
          // window.location.reload();
          this.loading = false;
          this.errors = error.response.data.errors;
          this.coordinates_error = error.response.data.errors.coordinates[0];
          this.description2_error = error.response.data.errors.description1[0];
          this.description1_error = error.response.data.errors.description2[0];
          this.documentation_error =
            error.response.data.errors.documentation[0];
          this.due_deligence_report_error =
            error.response.data.errors.due_deligence_report[0];
          this.image_error = error.response.data.errors.image[0];
          this.layout_name_error = error.response.data.errors.layout_name[0];
          this.location_error = error.response.data.errors.location[0];
          this.min_roi_error = error.response.data.errors.min_roi[0];
          this.size_error = error.response.data.errors.size[0];
          this.token_audit_report_error =
            error.response.data.errors.token_audit_report[0];
          this.token_name_error = error.response.data.errors.token_name[0];
          this.token_price_error = error.response.data.errors.token_price[0];
          this.total_token_quantity_error =
            error.response.data.errors.total_token_quantity[0];
          this.whole_price_error = error.response.data.errors.whole_price[0];
        });
    },
    upload_due_deligence_report() {
      var input = event.target;
      this.assets.due_deligence_report = input.files[0];
      // this.document.push(this.assets.due_deligence_report);
      console.log(this.assets.due_deligence_report);
    },
    upload_token_audit_report() {
      var input = event.target;
      this.assets.token_audit_report = input.files[0];
      // this.document.push(this.assets.token_audit_report);
      console.log(this.assets.token_audit_report);
    },
    // upload_passport_photo() {
    //   var input = event.target;
    //   this.assets.image = input.files[0];
    //   console.log(this.assets.image);
    // },
    upload_image() {
      const drop_area = document.getElementById("drag_area");
      const dragText = document.getElementById("textDrag");
      const input = document.getElementById("input");
      const button = document.getElementById("button");
      let file;

      // button.onclick = () => {
      //   // if user clicks the button then the input is also clicked
      //   input.click();
      // };

      // input.addEventListener("change", function () {
      //   file = this.files[0];
      //   console.log(file);
      //   // showFile();
      //   drop_area.classList.add("active");
      // });

      // If user drags file over drag area
      drop_area.addEventListener("dragover", (event) => {
        event.preventDefault();
        // console.log("File is over Drag Area");
        drop_area.classList.add("active");
        dragText.textContent = "Release to Upload File";
      });
      // If user drags file from drag area
      drop_area.addEventListener("dragleave", () => {
        // console.log("File is outside Drag Area");
        drop_area.classList.remove("active");
        dragText.textContent = "Drag and Drop to Upload File";
      });

      // If user drops file on drop area
      drop_area.addEventListener("drop", (event) => {
        event.preventDefault();
        // console.log("File is dropped on Drop Area");
        file = event.dataTransfer.files[0];
        this.assets.image = file;
        console.log(this.assets.image);
        showFile();
      });
      function showFile() {
        let fileType = file.type;

        let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
        if (validExtensions.includes(fileType)) {
          let fileReader = new FileReader();
          fileReader.onload = () => {
            let fileURL = fileReader.result;
            // console.log(fileURL);
            let imgTag = `<img src="${fileURL}" alt="">`;
            drop_area.innerHTML = imgTag;
          };
          fileReader.readAsDataURL(file);
        } else {
          alert("This is not an Image File");
          drop_area.classList.remove("active");
        }
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.upload_image();
  },
};
</script>

<style>
.users {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.buy__button {
  color: #00e8fe;
}
.back__link {
  font-size: 12px;
  color: blue;
  cursor: pointer;
  font-style: italic;
}
.create__assets__wrap {
  margin-top: 30px;
  padding-left: 150px;
  padding-right: 150px;
}
.create__assets__wrap h1 {
  font-weight: bold;
}
.create__assets__wrap select {
  -webkit-appearance: auto;
}
.create__assets__wrap .v-slide-group {
  flex-wrap: wrap;
}
.create__assets__wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active),
.create__assets__wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-icon,
.create__assets__wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-btn,
.create__assets__wrap .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}
.create__assets__wrap .v-tab {
  text-transform: unset;
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > td:not(.v-data-table__mobile-row),
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > th:not(.v-data-table__mobile-row) {
  font-size: 13px;
}
.create__assets__wrap .v-btn {
  /* border: 1px solid #00e8fe; */
  background-color: #fff !important;
  box-shadow: none;
  text-transform: lowercase;
  border-radius: 0;
}
.create__assets__wrap .create__wrap span {
  border: 1px solid #00e8fe;
  padding: 3px 4px;
}
.upload_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.142);
  height: 100px;
  margin-left: 10px;
  border-radius: 5px;
}
.file {
  width: 100%;
  font-size: 10px;
}

.drag_area {
  border: 2px dashed #fff;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.drag_area.active {
  border: 2px solid #fff;
  background-color: #fff !important;
}
.drag_area .icon {
  font-size: 30px;
  color: #fff;
}
.drag_area header {
  font-size: 12px;
  font-weight: 500;
  color: #fff;
}
.drag_area span {
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  margin: 10px 0 15px 0 !important;
}
.drag_area button {
  /* padding: 2px 15px !important; */
  font-size: 10px;
  font-weight: 500;
  border: none;
  outline: none;
  background-color: #fff;
  color: #5256ad;
  border-radius: 5px;
  cursor: pointer;
}
.icon {
  font-size: 15px;
}
.drag_area img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .users {
    margin-left: 0 !important;
    padding: 0;
  }
  .create__assets__wrap {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .upload_wrapper {
    width: 100%;
    margin-left: 0;
  }
}
</style>